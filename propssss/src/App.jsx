import Student from './Student.jsx'
function App() {
  return(
    <>
        <Student name="Dhruv" age={30} isStudent={true}/>
        <Student name="om" age={20} isStudent={true}/>
        <Student/>
    </>

  );
}

export default App
