import MForm from "./components/MForm";
import MobileList from "./components/MobileList";
function App() {
  return (
    <div>
      <h1 className="text-xl font-bold text-center bg-slate-200 p-5">
        Mobile Management
      </h1>
      <MForm />
      <MobileList />
    </div>
  );
}

export default App;
