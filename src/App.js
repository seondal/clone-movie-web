import Button from "./Button";
import styled from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styled.title}>welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
