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
    // var text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert('Copied to clipboard!','success');
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4">{props.heading}</h1>
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
        <button disabled = {text.length === 0} className="btn btn-primary mx-1  my-1 ChangeColors" onClick={handleUpClick} style={{background:props.buttonsColor, borderColor:props.buttonsColor}}>
          Convert to uppercase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1  my-1 ChangeColors" onClick={handleLoClick} style={{background:props.buttonsColor, borderColor:props.buttonsColor}}>
          Convert to Lowercase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1  my-1 ChangeColors" onClick={handleClearClick} style={{background:props.buttonsColor, borderColor:props.buttonsColor}}>
          Clear
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1  my-1 ChangeColors" onClick={handleRemoveExtraSpaceClick} style={{background:props.buttonsColor, borderColor:props.buttonsColor}}>
          Remove Extra Spaces
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1  my-1 ChangeColors" onClick={handleCopy} style={{background:props.buttonsColor, borderColor:props.buttonsColor}}>
          Copy Text
        </button> 
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.length === 1 ? text[0] === ' ' ? setText('') : null: null }
          {text.length === 0 ? 0 : text.split(/\s(?=\w)/).length} words and{" "}
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
