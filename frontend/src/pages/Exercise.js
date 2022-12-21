import React, { useEffect, useState } from "react"
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Exercise = () => {


  const [showFinalresults, setFinalresults] = useState(false)
  const [showSolution, setSolution] = useState(false)
  const [message, setMessage] = useState('')
  const [score, setscore] = useState(0)
  const [showgrade, setshowgrade] = useState(false)

  const country = JSON.parse(localStorage.getItem('country'))
  const params = new URLSearchParams(window.location.search);

  const conversion_rate = country.conversion_rate
  const target_code = country.target_code
  const location = useLocation();
  const exercise = location.state;
  console.log(exercise)



  const handleSubmit2 = async (e) => {
    e.preventDefault()
    setFinalresults(true)

  };

  const solution = async (e) => {
    e.preventDefault()
    setSolution(true)



  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    let scores = 0;
    console.log(score)
    if (document.getElementById("q1a").checked &&
      document.getElementById("q1a").value == "true") {
      scores = scores + 1;
    }
    else if (document.getElementById("q1b").checked &&
      document.getElementById("q1b").value == "true") {
      scores = scores + 1;


    }
    else if (document.getElementById("q1c").checked &&
      document.getElementById("q1c").value == "true") {

      scores = scores + 1;
    }


    console.log(score)
    if (document.getElementById("q2a").checked &&
      document.getElementById("q2a").value == "true") {

      scores = scores + 1;
    }
    else if (document.getElementById("q2b").checked &&
      document.getElementById("q2b").value == "true") {

      scores = scores + 1;
    }
    else if (document.getElementById("q2c").checked &&
      document.getElementById("q2c").value == "true") {
      scores = scores + 1;
    }

    console.log(score)

    alert('Answer submitted')
    setscore(scores)
    setshowgrade(true)


  }


  return (

    <form className="exercises" >

      {showFinalresults ?

        <div className="final-results">
          <h2>Grade is </h2>
          <p> {score} /2</p>
          <button onClick={solution}>check solution</button>
        </div>



        :
        null}


      <div className="question-card"  >

        <h3>
          Solve multiple choice questions:
        </h3>

        <h2>Question One:</h2>
        <div >
          <h3>{exercise?.questionOne?.question} </h3>
          <ul>
            <li>
              <input type="radio" id="q1a" name="q1" value={exercise?.questionOne?.options[0]?.isCorrect} />
              <label for="q1a" >{exercise?.questionOne?.options[0]?.Text}</label>

              <input type="radio" id="q1b" name="q1" value={exercise?.questionOne?.options[1]?.isCorrect} />
              <label for="q1b">{exercise?.questionOne?.options[1]?.Text}</label>

              <input type="radio" id="q1c" name="q1" value={exercise?.questionOne?.options[2]?.isCorrect}
              />
              <label for="q1c">{exercise?.questionOne?.options[2]?.Text}</label>
              <input type="radio" id="q1d" name="q1" value={exercise?.questionOne?.options[3]?.isCorrect} />
              <label for="q1d">{exercise?.questionOne?.options[3]?.Text}</label>
            </li>
          </ul>
        </div>

        <div >
          <h2>Question Two:</h2>
          <h3>{exercise?.questionTwo?.question}</h3>
          <ul>
            <li>
              <input type="radio" id="q2a" name="q2" value={exercise?.questionTwo?.options[0]?.isCorrect} />
              <label for="q2a">{exercise?.questionTwo?.options[0]?.Text}</label>

              <input type="radio" id="q2b" name="q2" value={exercise?.questionTwo?.options[1]?.isCorrect} />
              <label for="q2b">{exercise?.questionTwo?.options[1]?.Text}</label>

              <input type="radio" id="q2c" name="q2" value={exercise?.questionTwo?.options[2]?.isCorrect} />
              <label for="q2c">{exercise?.questionTwo?.options[2]?.Text}</label>

              <input type="radio" id="q2d" name="q2" value={exercise?.questionTwo?.options[3]?.isCorrect} />
              <label for="q2d">{exercise?.questionTwo?.options[3]?.Text}</label>
            </li>
          </ul>

        </div>

        <button onClick={handleSubmit}>Submit Answers</button>

        {showgrade ? <div>
          <button onClick={handleSubmit2}>check grade</button>
          <button onClick={solution} >check solution</button>
        </div>
          : null}

      </div>



      {showSolution ?

        <div className="solution-card"  >

          <h3>
            Correct Answers:
          </h3>

          <h2>Question One:</h2>
          <div >
            <h3>{exercise?.questionOne.question} </h3>
            <ul>
              <li  >

                <input type="radio" id="s1a" name="s1" checked={exercise?.questionOne.options[0].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionOne.options[0].isCorrect ? 'green' : "red" }} for="s1a" >{exercise?.questionOne.options[0].Text}</label>
              </li>
              <li>
                <input type="radio" id="s1b" name="s1" checked={exercise?.questionOne.options[1].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionOne.options[1].isCorrect ? 'green' : "red" }} for="s1b">{exercise?.questionOne.options[1].Text}</label>
              </li>
              <li>
                <input type="radio" id="s1c" name="s1" checked={exercise?.questionOne.options[2].isCorrect}
                />
                <label style={{ backgroundColor: exercise?.questionOne.options[2].isCorrect ? 'green' : "red" }} for="s1c">{exercise?.questionOne.options[2].Text}</label>
              </li>
              <li>
                <input type="radio" id="s1d" name="s1" checked={exercise?.questionOne.options[3].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionOne.options[3].isCorrect ? 'green' : "red" }} for="s1d">{exercise?.questionOne.options[3].Text}</label>
              </li>
            </ul>
          </div>

          <div >
            <h2>Question Two:</h2>
            <h3>{exercise?.questionTwo.question}</h3>
            <ul>
              <li>
                <input type="radio" id="s2a" name="s2" checked={exercise?.questionTwo.options[0].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionTwo.options[0].isCorrect ? 'green' : "red" }} for="s2a">{exercise?.questionTwo.options[0].Text} </label>

                <input type="radio" id="s2b" name="s2" checked={exercise?.questionTwo.options[1].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionTwo.options[1].isCorrect ? 'green' : "red" }} for="s2b">{exercise?.questionTwo.options[1].Text}</label>

                <input type="radio" id="s2c" name="s2" checked={exercise?.questionTwo.options[2].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionTwo.options[2].isCorrect ? 'green' : "red" }} for="s2c">{exercise?.questionTwo.options[2].Text}</label>
                <input type="radio" id="s2d" name="s2" checked={exercise?.questionTwo.options[3].isCorrect} />
                <label style={{ backgroundColor: exercise?.questionTwo.options[3].isCorrect ? 'green' : "red" }} for="sdc">{exercise?.questionTwo.options[3].Text}</label>
              </li>
            </ul>

          </div>

        </div>
        :

        <div>
          {showgrade ? <div>
            {/* <button onClick={handleSubmit2}>check grade</button> */}
            {/* <button onClick={solution} >check solution</button> */}
          </div>
            : null}

        </div>

      }












      {/* )) */}












    </form>



  )
}

export default Exercise