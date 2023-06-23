// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import MainComp from "./components/main";
import "./index.css";
import { Editor } from "./components/edtitor";

function App() {
  return (
    <div>
      <div
        style={{
          border: "2px solid red",
          height: "400px",
          width: "90vw",
        }}
      >
        <div>
          <MainComp />
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
