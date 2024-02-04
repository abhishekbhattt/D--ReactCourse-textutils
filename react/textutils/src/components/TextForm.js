import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Upper case character ");
    let UpperText = text.toUpperCase();
    setText(UpperText);
    props.showAlert("Converted to Upper case ","success");
  };

  const handleLowClick = () => {
    //  console.log("Lower case character ");
    let LowerText = text.toLowerCase();
    setText(LowerText);
    props.showAlert("Converted to Lower case ","success");
  };

  const handleClearClick = () => {
    // console.log("Clear the characters");
    let ClearText = "";
    setText(ClearText);
    props.showAlert("text is cleared ","success");
  };

  const handleOnChange = (event) => {
    //  console.log("handle onchange ");
    setText(event.target.value);
    
  };

  const handleExtraClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed from text ","success");
  };

  const handleCopyClick = () => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);
    props.showAlert("Copied  succesfully ","success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        
        

      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#434344" : "#e0e8ff",
              color: props.mode === "dark" ? "white" : "black"
            }}
            
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            UpperCase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            LowerCase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
            Copy to Clipboard
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>

      <div
        className="container my-5  "
        style={{backgroundColor: props.mode === 'dark' ? '#020b3f' : 'white', 
      color:props.mode === 'dark' ? 'white' : 'black'}}
        
      >
          <h1 className="mb-4" >Your Text Summary</h1>
          <h5>
            {text.split(" ").filter((word) => word !== "").length} words and{" "}
            {text.length} characters
          </h5>
          <div className="container p-7  my-3.5" >
            <p className="text-danger">
              Time you required to read the total number of words :{" "}
              {0.008 * text.split(" ").filter((word) => word !== "").length}{" "}
              minutes
            </p>
          </div>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
