import React, { useState } from "react";

const   Text = () => {
  const [text, setText] = useState("Write your post here:");
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearCase = () => {
    let newText = " ";
    setText(newText);
  };
  const handleCopyCase = () => {
    let newText = document.getElementById("demo");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handleRemoveCase = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))
  };

  return (
    <>
      <div className="container">
        <h2>Write your post:</h2>
        <textarea
          id="demo"
          name="postContent"
          rows={8}
          cols={100}
          value={text}
          onChange={handleOnChange}
        />
        <div className="">
          <button onClick={handleUpCase} className="me-2">
            Convert to UpperCase
          </button>
          <button onClick={handleLoCase} className="me-2">
            Convert to LowerCase
          </button>
          <button onClick={handleClearCase} className="me-2">
            Clear text
          </button>
          <button onClick={handleCopyCase} className="me-2">
            Copy Text
          </button>
          <button onClick={handleRemoveCase}>Remove Extra Space</button>
        </div>
      </div>
    </>
  );
};

export default Text;
