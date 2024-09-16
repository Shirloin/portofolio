// import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50">
        <Navbar />
        <div className="z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
