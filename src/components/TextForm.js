import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!','success');
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!','success');
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared!','success');
  };
  const handleRemoveExtraSpaceClick = () => {
    setText(text.replace(/\s(?!\w)/g,''));
    props.showAlert('Extra spaces removed!','success');
  };
  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard!','success');
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{background:props.mode==='dark'?'#160c14':'white',
            color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaceClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.length === 0 ? 0 : text[0] === ' ' ? setText(''): text.split(/\s(?=\w)/).length} words and{" "}
          {text.length} characters
        </p>
        {/* An avg reader takes 0.008 minutes to read one word */}
        <p>
          {text.length === 0
            ? 0 * 0.008
            : text.split(/\s(?=\w)/).length * 0.008}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
      </div>
    </>
  );
}
