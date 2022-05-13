import { useState, startTransition } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [content, setContent] = useState();

  function onModeChangeHandler() {
    setIsChecked(!isChecked);
  }

  function onNameChangeHandler(event) {
    if (!isChecked) {
      changeHandlerV17(event);
      return;
    }
    changeHandlerV18(event);
  }

  function changeHandlerV18(event) {
    setInputVal(event.target.value);
    startTransition(() => {
      setContent(event.target.value);
    });
  }

  function changeHandlerV17(event) {
    setInputVal(event.target.value);
    setContent(event.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>
            <p>
              If you ticked React 18, you will find the performance is improved. <br /> The input box is responed promptly when you type some stuff in the input box
            </p>
            <label style={{ width: "100%" }}>
              <input
                type="checkbox"
                style={{ marginRight: "1rem" }}
                checked={isChecked}
                onChange={onModeChangeHandler}
              />
              React 18
            </label>
          </div>
          <input
            value={inputVal}
            type="text"
            style={{ marginTop: "1rem", padding: "0.5rem" }}
            placeholder="Enter your name"
            onChange={onNameChangeHandler}
          />
          {Array.from(new Array(5000)).map((_, index) => (
            <div style={{ margin: "10px" }} key={index}>
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
