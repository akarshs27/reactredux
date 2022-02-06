import { useDispatch, useSelector } from "react-redux";
import { CakeAction } from "../Actions/CakeAction";
import { useState } from "react";

export const Cake = () => {
  const [number, setNumber] = useState(1);

    const numofCakes = useSelector(state => state.cake.numofCakes);
    const dispatch = useDispatch();
  return (

   <div>
      <h2>Number of cakes: {numofCakes}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(CakeAction(number))}>Buy Cake</button>
  </div>
  )
};
