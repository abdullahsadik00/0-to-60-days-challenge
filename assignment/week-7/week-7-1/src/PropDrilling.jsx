import React, { useState, useContext } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

const PropDrilling = () => {
  //   const [count, setCount] = useState(0);

  return (
    <div>
      {/* <CountContext.Provider value={{ count, setCount }}> */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      {/* </CountContext.Provider> */}
    </div>
  );
};

const Count = () => {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
};

const CountRenderer = () => {
  // const {count} = useContext(CountContext);
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

const Buttons = () => {
  //   const {count,setCount} = useContext(CountContext)
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default PropDrilling;
