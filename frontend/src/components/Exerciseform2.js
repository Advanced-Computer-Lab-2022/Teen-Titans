// import React,{ useState } from "react"

// const Exerciseform2 = () => {

//   const [showFinalresults, setFinalresults] = useState(false)
//   const [showSolution, setSolution] = useState(false)

// //   const [error, setError] = useState(null)

// const [filterResults, setfilterResults] = useState([])
// const [message, setMessage] = useState('')
// const [score, setscore] = useState(0)
// const [showgrade,setshowgrade] = useState(false)
// const [currentQuestion, setCurrentQuestion] = useState(0);





// const fetchCourse = async () => {
//     if (document.getElementById('title').value &&document.getElementById('subtitle').value ) {
//         const response = await fetch(`/corporateTrainee/${document.getElementById('title').value.toString()}`);
//         const course = await response.json()
//         if (response.ok) {
//             setfilterResults(course)
//             console.log(filterResults)
//         }
//     }
//     else {
//         setMessage("Please enter a title and subtitle")
//     }
// };



// // const handleSubmit2=async (e)=> {
// //   setFinalresults(true)
// //};
// // const solution=async (e)=> {
// //   setSolution(true)
// // };
  

// const handleAnswerOptionClick= async()=>{

// }
  
//   const handleSubmit = async (e) => {
//      e.preventDefault()
// //      let scores=0;
// //      console.log(score)
// //      if(document.getElementById("q1a").checked &&
// //       document.getElementById("q1a").value=="true"  ){
// //    scores=scores+1;
// //      }
// //       else if(document.getElementById("q1b").checked &&
// //       document.getElementById("q1b").value=="true"  ){
// //         scores=scores+1;
      
     
// //       }
// //       else if(document.getElementById("q1c").checked &&
// //       document.getElementById("q1c").value=="true"  ){
      
// //         scores=scores+1;}

      
// //       console.log(score)
// //      if(document.getElementById("q2a").checked &&
// //       document.getElementById("q2a").value=="true" ){
     
// //         scores=scores+1;}
// //       else if(document.getElementById("q2b").checked &&
// //       document.getElementById("q2b").value=="true"  ){
     
// //         scores=scores+1;}
// //       else if(document.getElementById("q2c").checked &&
// //       document.getElementById("q2c").value=="true" ){
// //         scores=scores+1;}
     
// //       console.log(score)
      
   
// // setscore(scores)
// //       setshowgrade(true)
// //       setMessage('Answer submitted')
     
//      }
  


//   return (

// <form className="exercises" onSubmit={handleSubmit}>
// <label>Please enter your Course Name:</label>
//             <input id='title'></input>
//             <label>Course subtitle:</label>
//             <input id='subtitle'></input>
//             <button type='submit' onClick={() => fetchCourse()}>Submit</button>
          

// <div className='app'>
// 			{showFinalresults ? (
// 				<div className='score-section'>
// 					{/* You scored {score} out of {course.subtitles?.exercise?.questions?.length} */}
// 				</div>
// 			) : (
//                 filterResults && filterResults.map(({subtitles.exercise })  => (
                  
				
//                     {course.subtitiles.exercise.questions.map((questions) => (
							
//                         <div>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							{/* <span>Question {currentQuestion + 1}</span>/{course?.subtitles?.exercise?.questions?.length} */}
// 						</div>

                        
// 						<div className='question-text'>{questions[currentQuestion]?.question}</div>
// 					</div>


// 					<div className='answer-section'>
// 						{questions[currentQuestion]?.options.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption?.isCorrect)}>{answerOption?.Text}</button>
// 						))}
// 					</div>
//                     </div>
//                     	))}
				
//                 ))
// 			)}
// 		</div>
	





//     </form>
  
//   )
// }

// export default Exerciseform2;
