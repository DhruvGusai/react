
function Button(){

    /*
    let count=0;

    const handelClick= (name)=>{
        if(count<5){
            count++;
            console.log(`${name} clicked me ${count} timess!!!`) ;
        }
        else{
            console.log(`${name} stopp clicking me`);
        }
    }
    */

    const handelEventClick = (e) =>{
        e.target.textContent="you clicked me🌞"
    }



return(
    /*    <>
        <button onClick={()=>{
            handelClick("Dhruv")
        }}>Click Me⭐  </button>
    </> */
    <>
        <button onClick={(e)=> handelEventClick(e)} > click me </button>
    </>



);

}


export default Button;