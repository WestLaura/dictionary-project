import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

//apikey: 9a169bbfe3916405e3fo154f72be9t4a

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let apiKey = "9a169bbfe3916405e3fo154f72be9t4a";

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
