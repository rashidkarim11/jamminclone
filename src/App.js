import Button from "./components/button";
import Header from "./components/header";
import Input from "./components/searchbar";

function App() {
  return (
    <div className="bg-background w-full h-screen bg-cover">
      <Header />
      <div className="mt-20 flex flex-col justify-center items-center">
        <Input />
        <Button text="search" />
      </div>
    </div>
  );
}

export default App;
