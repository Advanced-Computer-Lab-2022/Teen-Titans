import React,{ useState } from "react"

const ExerciseForm = () => {

  const [showFinalresults, setFinalresults] = useState(false)
  const [showSolution, setSolution] = useState(false)

//   const [error, setError] = useState(null)

const [filterResults, setfilterResults] = useState([])
const [message, setMessage] = useState('')
const [score, setscore] = useState(0)
const [showgrade,setshowgrade] = useState(false)


const styles = {
  radioWhite: {
    color: 'white',
  
  },
  radioPink: {
    color: 'pink',
  },
  radioRed: {
    color: 'red',
  }
};



const fetchCourse = async () => {
    if (document.getElementById('title').value &&document.getElementById('subtitle').value ) {
        const response = await fetch(`/corporateTrainee/${document.getElementById('title').value.toString()}`);
        const json = await response.json()
        if (response.ok) {
            setfilterResults(json)
            console.log(filterResults)
        }
    }
    else {
        setMessage("Please enter a title and subtitle")
    }
};



const handleSubmit2=async (e)=> {
  setFinalresults(true)
};
const solution=async (e)=> {
  setSolution(true)
  // setFinalresults(true)
  
};
  
  
  const handleSubmit = async (e) => {
     e.preventDefault()
     let scores=0;
     console.log(score)
     if(document.getElementById("q1a").checked &&
      document.getElementById("q1a").value=="true"  ){
   scores=scores+1;
     }
      else if(document.getElementById("q1b").checked &&
      document.getElementById("q1b").value=="true"  ){
        scores=scores+1;
      
     
      }
      else if(document.getElementById("q1c").checked &&
      document.getElementById("q1c").value=="true"  ){
      
        scores=scores+1;}

      
      console.log(score)
     if(document.getElementById("q2a").checked &&
      document.getElementById("q2a").value=="true" ){
     
        scores=scores+1;}
      else if(document.getElementById("q2b").checked &&
      document.getElementById("q2b").value=="true"  ){
     
        scores=scores+1;}
      else if(document.getElementById("q2c").checked &&
      document.getElementById("q2c").value=="true" ){
        scores=scores+1;}
     
      console.log(score)
      
   
setscore(scores)
      setshowgrade(true)
      setMessage('Answer submitted')
     
     }
  


  return (


   // {showFinalresults ? <FinalResults /> : <CourseForm />}

    //create a form 
    <form className="exercises" onSubmit={handleSubmit}>
 <label>Please enter your Course Name:</label>
            <input id='title'></input>
            <label>Course subtitle:</label>
            <input id='subtitle'></input>
            <button type='submit' onClick={() => fetchCourse()}>Submit</button>
{showFinalresults ? 

 <div className="final-results">
        <h2>Grade is </h2>
        {/* <p>Correct answers: 0</p> */}
        {/* <p>Incorrect answers: 0</p> */}
        {/* <p>Score: 0%</p> */}
        <p> {score} /2</p>
        <button >check solution</button>
    </div>
    


 : 
 
 filterResults && filterResults.map((course) => (
 <div className="question-card"  key={course.id}>
  
 <h3>
 Solve multiple choice questions:
 </h3>

 <h2>Question One:</h2>
 <div >
 <h3>{course.subtitles.exercise.questionOne.question} </h3>
 <ul>
   <li>
       <input type="radio" id="q1a" name="q1" value={course.subtitles.exercise.questionOne.options[0].isCorrect}   style={styles.radioWhite}         />
       <label for="q1a" >{course.subtitles.exercise.questionOne.options[0].Text}</label>

       <input type="radio" id="q1b" name="q1" value={course.subtitles.exercise.questionOne.options[1].isCorrect} style={styles.radioPink}/>
       <label for="q1b">{course.subtitles.exercise.questionOne.options[1].Text}</label>
       
       <input type="radio" id="q1c" name="q1" value={course.subtitles.exercise.questionOne.options[2].isCorrect}  
                     />
       <label for="q1c">{course.subtitles.exercise.questionOne.options[2].Text}</label>
       {/* <input type="radio" id="q1d" name="q1" value="d" />
       <label for="q1d">{course.subtitles.exercise.questionOne.options[3].Text}</label> */}
   </li>
   </ul>
   </div>
  
   <div >
<h2>Question Two:</h2>
 <h3>{course.subtitles.exercise.questionTwo.question}</h3>
 <ul>
   <li>
   <input type="radio" id="q2a" name="q2" value={course.subtitles.exercise.questionTwo.options[0].isCorrect}/>
       <label for="q2a">{course.subtitles.exercise.questionTwo.options[0].Text}</label>

       <input type="radio" id="q2b" name="q2" value={course.subtitles.exercise.questionTwo.options[1].isCorrect}/>
       <label for="q2b">{course.subtitles.exercise.questionTwo.options[1].Text}</label>

       <input type="radio" id="q2c" name="q2" value={course.subtitles.exercise.questionTwo.options[2].isCorrect} />
       <label for="q2c">{course.subtitles.exercise.questionTwo.options[2].Text}</label>
       {/* <input type="radio" id="q1c" name="q1" value="c" />
       <label for="q1c">{course.subtitles.exercise.questionTwo.options[3].Text}</label> */}
   </li>
   </ul>

   </div>


 

 {/* <button type="button" className="add-btn" onClick={handleSubtitleAdd}
 >      <span>add a subtitle</span>
 </button> */}

 <button onClick={handleSubmit}>Submit Answers</button>
 
 {showgrade ? <div>
<button onClick={handleSubmit2}>check grade</button>
 <button onClick={solution} >check solution</button>
</div>
  : null}


 

 {/* {error && <div className="error">{error}</div>} */}


</div>
 ))
}

{showSolution ? 
  filterResults && filterResults.map((course) => (
 <div className="question-card"  key={course.id}>
  
 <h3>
Correct Answers:
 </h3>

 <h2>Question One:</h2>
 <div >
 <h3>{course.subtitles.exercise.questionOne.question} </h3>
 <ul>
   <li>
    
       <input type="radio" id="s1a" name="q1"  checked={course.subtitles.exercise.questionOne.options[0].isCorrect }       />
       <label for="q1a" >{course.subtitles.exercise.questionOne.options[0].Text}</label>

       <input type="radio" id="s1b" name="q1" checked={course.subtitles.exercise.questionOne.options[1].isCorrect}  />
       <label for="q1b">{course.subtitles.exercise.questionOne.options[1].Text}</label>
       
       <input type="radio" id="s1c" name="q1" checked={course.subtitles.exercise.questionOne.options[2].isCorrect} 
                     />
       <label for="q1c">{course.subtitles.exercise.questionOne.options[2].Text}</label>
       {/* <input type="radio" id="q1d" name="q1" value="d" />
       <label for="q1d">{course.subtitles.exercise.questionOne.options[3].Text}</label> */}
   </li>
   </ul>
   </div>
  
   <div >
<h2>Question Two:</h2>
 <h3>{course.subtitles.exercise.questionTwo.question}</h3>
 <ul>
   <li>
   <input type="radio" id="s2a" name="q2" checked={course.subtitles.exercise.questionTwo.options[0].isCorrect} />
       <label for="q2a">{course.subtitles.exercise.questionTwo.options[0].Text} </label>

       <input type="radio" id="s2b" name="q2" checked={course.subtitles.exercise.questionTwo.options[1].isCorrect}/>
       <label for="q2b">{course.subtitles.exercise.questionTwo.options[1].Text}</label>

       <input type="radio" id="s2c" name="q2"checked= {course.subtitles.exercise.questionTwo.options[2].isCorrect} />
       <label for="q2c">{course.subtitles.exercise.questionTwo.options[2].Text}</label>
       {/* <input type="radio" id="q1c" name="q1" value="c" />
       <label for="q1c">{course.subtitles.exercise.questionTwo.options[3].Text}</label> */}
   </li>
   </ul>

   </div>


 

 {/* <button type="button" className="add-btn" onClick={handleSubtitleAdd}
 >      <span>add a subtitle</span>
 </button> */}

 <button onClick={handleSubmit}>Submit Answers</button>
 
 {showgrade ? <div>
<button onClick={handleSubmit2}>check grade</button>
 <button onClick={solution} >check solution</button>
</div>
  : null}


 

 {/* {error && <div className="error">{error}</div>} */}


</div>
 ))







  : null

}




    </form>
  )
}

export default ExerciseForm;
