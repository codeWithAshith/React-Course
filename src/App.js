import FirstComponent from "./content/06. props and events/FirstComponent";

const App = () => {
  const clickHandler = () => {
    let a = 6;
    let b = 9;
    console.log(a + b);
    console.log("clicked");
  };
  let buttonValue = "click";
  return (
    <div>
      <FirstComponent clickHandler={clickHandler} value={buttonValue} />
    </div>
  );
};

export default App;
