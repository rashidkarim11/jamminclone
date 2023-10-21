import Button from "./components/button";
import Header from "./components/header";
import Input from "./components/searchbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-green-500 to-black via-green-900 min-h-screen transition-all duration-500 ease-in-out">
      <Header />
      <div className="mt-20 flex flex-col justify-center items-center">
        <Input />
        <Button text="search" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
