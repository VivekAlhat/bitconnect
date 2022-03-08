import Navbar from "./Components/Navbar";
import DotGrid from "./Components/DotGrid";
import Hero from "./Components/Hero";
import Peep from "./Components/Peep";

function App() {
  return (
    <div className="font-openSans flex flex-col items-center sm:justify-between min-h-screen">
      <Navbar />
      <DotGrid />
      <Hero />
      <Peep />
    </div>
  );
}

export default App;
