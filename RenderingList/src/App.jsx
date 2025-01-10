import List from './List.jsx'

function App() {

const fruits=[{key:1, name:"apple", calories:95},
              {key:2, name:"banana", calories:45},
              {key:3, name:"orange", calories:125},
              {key:4, name:"pineapple", calories:37},
              {key:5, name:"coconut", calories:155}];

  return (<List item={fruits} category="Fruits" />);
}

export default App
