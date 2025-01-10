import PropTypes from 'prop-types'

function Student(props){

    return (
        <>
                <div>Name:{props.name} </div>
                <p>Age:{props.age}</p>
                <p>Student:{props.isStudent ? "yes":"no"}</p>
        </>

        
    );

}

Student.proptypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent : PropTypes.bool,

}
Student.defaultProps ={
    name:"Guest",
    age: 0,
    isStudent:"no"
}
export default Student;