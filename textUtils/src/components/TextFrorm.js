import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('enter text here');

  const HandleUpCase = () => {
    let newtext = text.toLocaleUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="MyBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpCase}>
        Convert to Upper case
      </button>
    </div>
  );
}
