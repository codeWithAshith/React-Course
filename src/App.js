import FirstComponent from "./content/04. props/FirstComponent";
import SecondComponent from "./content/04. props/SecondComponent";

const something = "Hi";

const App = () => {
  return (
    <div>
      <FirstComponent value={something} />
      <SecondComponent value={something} />
    </div>
  );
};

export default App;
