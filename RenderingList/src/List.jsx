import PropTypes from 'prop-types';

function List(props){

    const category = props.category;
    const itemList= props.item;

   // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // ALPHABETIC 
   //fruits.sort((b,a)=> a.name.localeCompare(b.name));  // REVESE ALPHABETIC
   //fruits.sort((a,b)=>a.calories - b.calories )   // NUMERIC
   //fruits.sort((b,a)=>a.calories - b.calories )   // REVERSE  NUMERIC

   //const lowCalFruits= fruits.filter(fruit=> fruit.calories< 100);
    
    const listItems = itemList.map(item => (<li key={item.id}> 
                                                   {item.name}
                                            : <b>  {item.calories}</b></li>
    ));

    return( <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
    </> 
    );
}

List.PropTypes={
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                             name: PropTypes.string,
                                             calories: PropTypes.number}))
}

List.defaultProps= { 
    category: "Category",
    items: []
}

export default List;