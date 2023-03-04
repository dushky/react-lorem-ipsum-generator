import data from "./data"
import { useState } from "react"
const App = () => {
  const [paragraphs, setParagraphs] = useState([])
  const [number, setNumber] = useState(0)

  const changeNumber = (event) => {
    let newNumber = parseInt(event.target.value)
    if(newNumber<0){
      setNumber(0)
    }
    else if(newNumber > data.length){
      setNumber(data.length)
    }
    else{
    setNumber(newNumber)
    }
  }

  const submitForm = (event) => {
    event.preventDefault()
    const newParagraphs = data.slice(0, number)
    setParagraphs(newParagraphs)
  }
   
  return (
    <div className="form-section">
      <h1>Lorem ipsum generator</h1>
      <form onSubmit={submitForm}>
        <input 
        type="number"
        value={number}
        onChange={changeNumber}
        />
        <br />
        <input type="submit" value="generate" />
      </form>

      <article className="lorem-ipsum-box">
        {
          paragraphs.map((paragraph, index)=>{
            return (
              <p key={index}>{paragraph}</p>
            )
          })
      }
      </article>
    </div>
  )
}

export default App
