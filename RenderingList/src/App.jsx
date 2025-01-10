import List from './List.jsx'

function App() {

const fruits=[{id:1, name:"Apple", calories:95},
              {id:2, name:"Banana", calories:45},
              {id:3, name:"Orange", calories:125},
              {id:4, name:"Pineapple", calories:37},
              {id:5, name:"Coconut", calories:155}];


const vegetables=[{id:6, name:"Potatoes", calories:95},
                  {id:7, name:"Celery", calories:45},
                  {id:8, name:"Carrots", calories:125},
                  {id:9, name:"Corn", calories:37},
                  {id:10, name:"Broccoli", calories:155}];
  

  return (<>
            {fruits.length>0 && <List item={fruits} category="Fruits" /> }  {/* its is way to use ternary operator in short way */}
            {vegetables.length>0 ? <List item={vegetables} category="Vegetables" /> : null }
            
          </>
  
);
}

export default App
