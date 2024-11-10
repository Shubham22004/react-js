const Random = ()=>{
  let num = Math.floor(Math.random())
  return(
    <>
      <button onClick={value} style={{background:"red"}}>Click me</button> {/*adding css with two parenthesis and js */}
    </>
  );
}

function App(){
  return (<>
    <h1>react is booming</h1>
    </>
  );
}
const value=()=>{
  alert("alert created successfully");
}
export default App;
export {Random};