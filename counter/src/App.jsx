// React Hooks = Special Function that allows functional components 
//               to use React features without class components ( React v16.8)

//               { useState , useEffect, useContent, useReducer, useCallbacks ..... }

// useState()= A react hook that allows the creation of a stateful variables
//             AND a setter function to update its value in virtual DOM


import Component from './Component.jsx';
import Counter from './Counter.jsx';

function App() {
  return(
    <>
      {/*     <Component />    */}
      <Counter/>
    </>
  );

}

export default App
