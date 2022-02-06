import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IceCreamAction } from '../Actions/IceCreamAction';

export const IceCream = () => {
    const numofIceCream = useSelector(state => state.iceCream.numofIceCream);
    const dispatch = useDispatch()
  return (
      <div>
        <h2>Number of IceCream: {numofIceCream}</h2>
      <button onClick={() => dispatch(IceCreamAction())}>Buy IceCream</button>
      </div>
  )

}
