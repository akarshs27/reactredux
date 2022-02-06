import { Cake } from "./components/Cake";
import { IceCream } from "./components/IceCream";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <Cake />
      <IceCream />
      <User />
    </div>
  );
}

export default App;
