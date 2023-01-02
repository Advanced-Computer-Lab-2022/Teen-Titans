import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Exercise = () => {
  const [showFinalresults, setFinalresults] = useState(false)
  const [hideSubmitButton, setHideSubmitButton] = useState(false)
  const [showSolution, setSolution] = useState(false)
  const [message, setMessage] = useState('')
  const [score, setscore] = useState(0)
  const [showgrade, setshowgrade] = useState(false)
  const [exercise, setExercise] = useState(null)
  const country = JSON.parse(localStorage.getItem('country'))
  const params = new URLSearchParams(window.location.search);
  const user = localStorage.getItem('user')
  const userId = localStorage.getItem('id')
  // const courseId = params.get('courseId');
  const conversion_rate = country.conversion_rate
  const target_code = country.target_code
  const location = useLocation();
  // const exercise = location.state;
  useEffect(() => {
    setExercise(location.state)
  }, [])
  let text = "foo"
  // console.log(exercise)

  // useEffect(() => {
  //   const getDetails = async () => {
  //     await axios.get(`myCourse/${user}/openCourse?id=${userId}&courseId=${courseId}`).then(
  //       (res) => {
  //         const json = res.data
  //         console.log(json);
  //         if (json) {
  //           setCourse(json)
  //         }
  //       }
  //     )
  //   }
  //   getDetails()
  // }, [])

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
    setHideSubmitButton(true)
  }


  return (
    <div>
      {
        <form className="exercises" >
          {showFinalresults ?
            <div className="final-results">
              <h2>Grade is </h2>
              <p> {score} /2</p>
            </div>
            :
            null}


          <div className="row">
            <div className="col-6">
              <div className="question-card"  >
                <h3 style={{ color: "var(--taupe)" }}>
                  Course Test:
                </h3>

                <h2>Question One:</h2>
                <div >
                  <h3>{exercise?.questionOne?.question} </h3>
                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q1a" name="q1" value={exercise?.questionOne?.options[0]?.isCorrect} />
                    <label >{exercise?.questionOne?.options[0]?.Text}</label>
                  </div>

                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q1b" name="q1" value={exercise?.questionOne?.options[1]?.isCorrect} />
                    <label>{exercise?.questionOne?.options[1]?.Text}</label>
                  </div>

                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q1c" name="q1" value={exercise?.questionOne?.options[2]?.isCorrect} />
                    <label>{exercise?.questionOne?.options[2]?.Text}</label>
                  </div>
                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q1d" name="q1" value={exercise?.questionOne?.options[3]?.isCorrect} />
                    <label>{exercise?.questionOne?.options[3]?.Text}</label>
                  </div>
                </div>

                <h2>Question Two:</h2>
                <div>
                  <div>
                    <h3 className="d-flex">{exercise?.questionTwo?.question}</h3>
                  </div>
                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q2a" name="q2" value={exercise?.questionTwo?.options[0]?.isCorrect} />
                    <label>{exercise?.questionTwo?.options[0]?.Text}</label>
                  </div>

                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q2b" name="q2" value={exercise?.questionTwo?.options[1]?.isCorrect} />
                    <label>{exercise?.questionTwo?.options[1]?.Text}</label>
                  </div>

                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q2c" name="q2" value={exercise?.questionTwo?.options[2]?.isCorrect} />
                    <label>{exercise?.questionTwo?.options[2]?.Text}</label>
                  </div>

                  <div className="d-flex">
                    <input style={{ width: "10px" }} type="radio" id="q2d" name="q2" value={exercise?.questionTwo?.options[3]?.isCorrect} />
                    <label>{exercise?.questionTwo?.options[3]?.Text}</label>
                  </div>
                </div>

                {
                  !hideSubmitButton &&
                  <button className="display-courses-btn" onClick={handleSubmit}>Submit Answers</button>
                }

                {showgrade ?
                  <div>
                    <button className="display-courses-btn" onClick={handleSubmit2}>check grade</button>
                    <button className="display-courses-btn" onClick={solution} >check solution</button>
                  </div>
                  : null}

              </div>
            </div>

            <div className="col-6">
              {showSolution ?
                <div className="question-card"  >
                  <h3 style={{ color: "var(--taupe)" }}>
                    Correct Answers:
                  </h3>

                  <h2>Question One:</h2>
                  <div >
                    <h3>{exercise?.questionOne?.question} </h3>
                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s1a" name="s1" checked={exercise?.questionOne?.options[0]?.isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionOne.options[0].isCorrect ? 'var(--primary)' : 'var(--wrong)' }}  >{exercise?.questionOne.options[0].Text}</label>
                    </div>
                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s1b" name="s1" checked={exercise?.questionOne?.options[1]?.isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionOne.options[1].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionOne.options[1].Text}</label>
                    </div>
                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s1c" name="s1" checked={exercise?.questionOne?.options[2]?.isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionOne.options[2].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionOne.options[2].Text}</label>
                    </div>
                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s1d" name="s1" checked={exercise?.questionOne?.options[3]?.isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionOne.options[3].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionOne.options[3].Text}</label>
                    </div>
                  </div>


                  <h2>Question Two:</h2>
                  <div >
                    <div>
                      <h3 className="d-flex">{exercise?.questionTwo?.question}</h3>
                    </div>
                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s2a" name="s2" checked={exercise?.questionTwo.options[0].isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionTwo.options[0].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionTwo.options[0].Text} </label>
                    </div>

                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s2b" name="s2" checked={exercise?.questionTwo.options[1].isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionTwo.options[1].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionTwo.options[1].Text}</label>
                    </div>

                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s2c" name="s2" checked={exercise?.questionTwo.options[2].isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionTwo.options[2].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionTwo.options[2].Text}</label>
                    </div>
                    <div className="d-flex">
                      <input style={{ width: "10px" }} type="radio" id="s2d" name="s2" checked={exercise?.questionTwo.options[3].isCorrect} />
                      <label style={{ backgroundColor: exercise?.questionTwo.options[3].isCorrect ? 'var(--primary)' : 'var(--wrong)' }} >{exercise?.questionTwo.options[3].Text}</label>
                    </div>
                  </div>

                </div>
                : null
              }
            </div>
          </div>
        </form>
      }
    </div>
  )
}

export default Exercise