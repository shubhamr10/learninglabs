import { useEffect, useState } from "react";

function App(){
  const [advice, setAdvice] = useState("");
  const [timesClicked, setTimesClicked] = useState(0);

  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setTimesClicked(timesClicked => timesClicked + 1);
  }

  // using useEffect to load something when the first time,
  useEffect(function(){
    getAdvice();
  }, []);
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to my first React app!</p>
      <button onClick={getAdvice}>Get advice!</button>
      <div>{timesClicked}'s advice:</div>
      <Message count={timesClicked} />
      <p>{advice}</p>
    </div>
  );
}

export default App;


// Component names should be in upper-case
function Message(props){
  return <div>
    <p>You have read <strong>{props.count}</strong> pieces of advices.</p>
  </div>;
}