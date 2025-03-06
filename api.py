from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

food_mappings = {
    "banana": "fruit",
    "apple": "fruit",
    "carrot": "vegetable",
    "chicken": "meat",
    "pork": "meat",
    "fish": "meat",
    "beef": "meat"
}

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/autosuggest")
async def autosuggest(query: str = None):
    if query:
        food_key = query.lower()
        category = food_mappings.get(food_key)
        if category is None:
            return {"error": f"No category found for {query}"}
        message = f"{query} is a {category}"
        return {"message": message}
    return {"message": ""}