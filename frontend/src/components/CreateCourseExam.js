import { useState } from "react"


const CourseExamForm = () => {
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    const createExamForaCourse = async () => {
        let id = document.getElementById('ID').value;
        const response = await fetch(`/instructor/createCourseExam/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
          
            
            "question1": document.getElementById("question1").value.toString(),
            "answer1": document.getElementById("answer1").value.toString(),
            "Text1":document.getElementById("Text1").value.toString(),
            "Text2":document.getElementById("Text2").value.toString(),
            "Text3":document.getElementById("Text3").value.toString(),
            "Text4":document.getElementById("Text4").value.toString(),
            "isCorrect1":document.getElementById("isCorrect1").value.toString(),
            "isCorrect2":document.getElementById("isCorrect2").value,
            "isCorrect3":document.getElementById("isCorrect3").value,
             "isCorrect4":document.getElementById("isCorrect4").value,
            "question2": document.getElementById("question2").value.toString(),
            "answer2": document.getElementById("answer2").value.toString(),
            "Text5":document.getElementById("Text5").value.toString(),
            "Text6":document.getElementById("Text6").value.toString(),
            "Text7":document.getElementById("Text7").value.toString(),
            "Text8":document.getElementById("Text8").value.toString(),
            "isCorrect5":document.getElementById("isCorrect5").value,
            "isCorrect6":document.getElementById("isCorrect6").value,
            "isCorrect7":document.getElementById("isCorrect7").value,
            "isCorrect8":document.getElementById("isCorrect8").value


          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
    
        if (response.ok) {
          setMessage("email edited.")
      }
      else {
          setMessage("error")
      }
    
      }
      return(
        <div>
        <h2>Create Exam for a Course</h2>
        <div className='d-flex flex-column'>

        <label>Course id:</label>
            <input id='ID'></input>
            <label>Question one:</label>
            <input id='question1'></input>
            <label>Answer:</label>
            <input id='answer1'></input>
            <label>Option 1:</label>
            <input id='Text1'></input>  
            <input id='isCorrect1'  placeholder="Please specify if this option is true or false"></input>  
            <label>Option 2:</label>
            <input id='Text2'></input>
            <input id='isCorrect2' placeholder="Please specify if this option is true or false"></input>  
            <label>Option 3:</label>
            <input id='Text3'></input>
            <input id='isCorrect3' placeholder="Please specify if this option is true or false"></input>  
            <label>Option 4:</label>
            <input id='Text4'></input>
            <input id='isCorrect4' placeholder="Please specify if this option is true or false"></input>  

            <label>Question Two:</label>
            <input id='question2'></input>
            <label>Answer:</label>
            <input id='answer2'></input>
            <label>Option 1:</label>
            <input id='Text5'></input>
            <input id='isCorrect5' placeholder="Please specify if this option is true or false"></input>
            <label>Option 2:</label>
            <input id='Text6'></input>
            <input id='isCorrect6' placeholder="Please specify if this option is true or false"></input>
            <label>Option 3:</label>
            <input id='Text7'></input>
            <input id='isCorrect7' placeholder="Please specify if this option is true or false"></input>
            <label>Option 4:</label>
            <input id='Text8'></input>
            <input id='isCorrect8' placeholder="Please specify if this option is true or false"></input>
           
            <button onClick={() => createExamForaCourse()}>create</button>
            
        </div>
    </div>
      )
}

export default CourseExamForm