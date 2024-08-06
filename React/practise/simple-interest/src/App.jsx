import { useState } from "react";
import "./App.css"


const App = () => {
  const [prinicple, setPrinciple] = useState("");
  const [time, setTime]= useState("");
  const [rate, setRate] = useState("");
  const [simpleInterest, setSimpleInterest] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    const simpleInterest = (parseFloat(prinicple) *  time * rate).toFixed(2);
    setSimpleInterest(simpleInterest);
  }

  const onChangeHandler = e => {
      const name = e.target.name;
      const value = e.target.value;
      if(name === "prinicple"){
        setPrinciple(value);
      } else if (name === "time"){
        setTime(value);
      } else if (name === "rate"){
        setRate(value)
      } else {
        console.error("unnamed value entered");
      }
  }

  return (
    <main className="card-main">
      <section className="card-content">
        <h1 className="poppins-semibold">Simple Interest calculator</h1>
        <hr />
        <form className="form-class" onSubmit={onSubmit}>
          <div>
            <label htmlFor="prinicple">Enter Priciple amount:</label>
            <input type="number" name="prinicple" value={prinicple} placeholder="0" onChange={onChangeHandler} />
          </div>
          
          <div>
            <label htmlFor="time">Enter Time:</label>
            <input type="number" name="time" value={time} placeholder="0" onChange={onChangeHandler} />
          </div>
          
          <div>
            <label htmlFor="rate">Enter  Rate of Interest:</label>
            <input type="number" name="rate" value={rate} placeholder="0" onChange={onChangeHandler} />
          </div>
          <div>
            <button type="submit">Calculate Simple Interest</button>
          </div>
          
        </form>
        <section> 
          <h2>Your Simple Interest is:</h2>
          <p>{ simpleInterest}</p>
        </section>
      </section>
    </main>
  )
}

export default App;