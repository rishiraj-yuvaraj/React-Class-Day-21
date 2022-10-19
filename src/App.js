import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Msg Name = "RJ" age = "{20}" />
      <Msg Name = "Thambi" />
      <Msg Name = "Enga" />

    </div>
  );
}

function Msg(props){
  console.log(props)
  return(
    <div>
      <h1>Hello, {props.Name}</h1>
    </div>
  )
}
