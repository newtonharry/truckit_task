import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length >= 3) {
      try {
        const res = await fetch(`/autosuggest?query=${encodeURIComponent(value)}`); // NOTE:  need to encode any poential characters not compatible with the URL
        const data = await res.json();
        setResult(data.error || data.message || "");
      } catch (error) {
        setResult("There was an error fetching the result.");
        console.error(error);
      }
    } else {
      setResult("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1>Food Autosuggest</h1>
      <input
        type="text"
        value={query}
        placeholder="Enter a food"
        onChange={handleChange}
        // Bit of styling to make it nicer
        style={{
          width: "300px",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />
      {result && (
        <div
          id="result"
          style={{
            marginTop: "20px",
            padding: "10px",
            borderTop: "1px solid #eee"
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);