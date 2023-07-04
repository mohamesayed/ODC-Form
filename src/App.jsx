import "./App.css";
import Animation from "./component/Animation";
import Call from "./component/Call";

function App() {
  return (
    <>
      <div className="app">
        <div className="wraper">
          <Animation />

          <Call />
        </div>
      </div>
    </>
  );
}

export default App;
