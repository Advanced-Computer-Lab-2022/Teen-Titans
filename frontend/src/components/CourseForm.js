import { useState } from "react"
const CourseForm = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [subject, setSubject] = useState('')
  const [instructorId, setInstructorId] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [shortSummary, setShortSummary] = useState('')
  const [previewVideoURL, setPreviewVideoURL] = useState('')
  const [previewVideoShortDescription, setPreviewVideoShortDescription] = useState('')
  const [courseOutline, setCourseOutline] = useState('')
  const [exercise, setExercise] = useState({
    question1: '',
    Text1: '', isCorrect1: false,
    Text2: '', isCorrect2: false,
    Text3: '', isCorrect3: false,
    Text4: '', isCorrect4: false,
    question2: '',
    Text5: '', isCorrect5: false,
    Text6: '', isCorrect6: false,
    Text7: '', isCorrect7: false,
    Text8: '', isCorrect8: false
  })
  const [subtitles, setSubtitles] = useState([{
    title: "", subtitleHours: "", url: "", shortDescription: "",
    question1: '',
    Text1: '', isCorrect1: false,
    Text2: '', isCorrect2: false,
    Text3: '', isCorrect3: false,
    Text4: '', isCorrect4: false,
    question2: '',
    Text5: '', isCorrect5: false,
    Text6: '', isCorrect6: false,
    Text7: '', isCorrect7: false,
    Text8: '', isCorrect8: false
  }]);

  const [error, setError] = useState(null)

  const handleSubtitleAdd = () => {
    setSubtitles([...subtitles, {
      title: "", subtitleHours: "", url: "", shortDescription: "",
      question1: '',
      Text1: '', isCorrect1: false,
      Text2: '', isCorrect2: false,
      Text3: '', isCorrect3: false,
      Text4: '', isCorrect4: false,
      question2: '',
      Text5: '', isCorrect5: false,
      Text6: '', isCorrect6: false,
      Text7: '', isCorrect7: false,
      Text8: '', isCorrect8: false
    }]);
  };

  const handleSubtitleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...subtitles];
    list[index][name] = value;
    setSubtitles(list);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const subtitleArray = []
    for (let i = 0; i < subtitles.length; i++) {
      const title = subtitles[i].title;
      const hours = subtitles[i].subtitleHours;
      const videoUrl = subtitles[i].url;
      const videoShortDescription = subtitles[i].shortDescription;
      const question1 = subtitles[i].question1;
      const Text1 = subtitles[i].Text1;
      const isCorrect1 = subtitles[i].isCorrect1;
      const Text2 = subtitles[i].Text2;
      const isCorrect2 = subtitles[i].isCorrect2;
      const Text3 = subtitles[i].Text3;
      const isCorrect3 = subtitles[i].isCorrect3;
      const Text4 = subtitles[i].Text4;
      const isCorrect4 = subtitles[i].isCorrect4;
      const question2 = subtitles[i].question2;
      const Text5 = subtitles[i].Text5;
      const isCorrect5 = subtitles[i].isCorrect5;
      const Text6 = subtitles[i].Text6;
      const isCorrect6 = subtitles[i].isCorrect6;
      const Text7 = subtitles[i].Text7;
      const isCorrect7 = subtitles[i].isCorrect7;
      const Text8 = subtitles[i].Text8;
      const isCorrect8 = subtitles[i].isCorrect8;
      subtitleArray.push({
        "title": title,
        "hours": hours,
        "video": {
          "url": videoUrl,
          "shortDescription": videoShortDescription
        },
        "exercise": {
          "questionOne": {
            "question": question1,
            "options": [{ "Text1": Text1, "isCorrect1": isCorrect1 },
            { "Text2": Text2, "isCorrect2": isCorrect2 },
            { "Text3": Text3, "isCorrect3": isCorrect3 },
            { "Text4": Text4, "isCorrect4": isCorrect4 }]
          },
          "questionTwo": {
            "question": question2,
            "options": [{ "Text1": Text5, "isCorrect1": isCorrect5 },
            { "Text2": Text6, "isCorrect2": isCorrect6 },
            { "Text3": Text7, "isCorrect3": isCorrect7 },
            { "Text4": Text8, "isCorrect4": isCorrect8 }]
          }
        }
      })
    }

    console.log(subtitleArray);
    const response = await fetch('/instructor/createCourse', {
      method: 'POST',
      body: JSON.stringify({
        "title": title,
        "price": price,
        "subject": subject,
        "instructorId": instructorId,
        "instructorName": instructorName,
        "shortSummary": shortSummary,
        "subtitles": subtitleArray,
        "previewVideo": {
          "url": previewVideoURL,
          "shortDescription": previewVideoShortDescription
        },
        "courseOutline": courseOutline,
        "exercise": {
          "questionOne": {
            "question": exercise.question1,
            "options": [{ "Text1": exercise.Text1, "isCorrect1": exercise.isCorrect1 },
            { "Text2": exercise.Text2, "isCorrect2": exercise.isCorrect2 },
            { "Text3": exercise.Text3, "isCorrect3": exercise.isCorrect3 },
            { "Text4": exercise.Text4, "isCorrect4": exercise.isCorrect4 }]
          },
          "questionTwo": {
            "question": exercise.question2,
            "options": [{ "Text1": exercise.Text5, "isCorrect1": exercise.isCorrect5 },
            { "Text2": exercise.Text6, "isCorrect2": exercise.isCorrect6 },
            { "Text3": exercise.Text7, "isCorrect3": exercise.isCorrect7 },
            { "Text4": exercise.Text8, "isCorrect4": exercise.isCorrect8 }]
          }
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      alert('Course added successfully!')
      setTitle('')
      setPrice('')
      setSubject('')
      setInstructorId('')
      setInstructorName('')
      setShortSummary('')
      setCourseOutline('')
      setPreviewVideoURL('')
      setPreviewVideoShortDescription('')
      setSubtitles([{
        title: "", subtitleHours: "", url: "", shortDescription: "",
        question1: '',
        Text1: '', isCorrect1: false,
        Text2: '', isCorrect2: false,
        Text3: '', isCorrect3: false,
        Text4: '', isCorrect4: false,
        question2: '',
        Text5: '', isCorrect5: false,
        Text6: '', isCorrect6: false,
        Text7: '', isCorrect7: false,
        Text8: '', isCorrect8: false
      }])
      setExercise({
        question1: '',
        Text1: '', isCorrect1: false,
        Text2: '', isCorrect2: false,
        Text3: '', isCorrect3: false,
        Text4: '', isCorrect4: false,
        question2: '',
        Text5: '', isCorrect5: false,
        Text6: '', isCorrect6: false,
        Text7: '', isCorrect7: false,
        Text8: '', isCorrect8: false
      })
      setError(null)
      console.log('new course added', json)
    }
  }
  return (
    //create a form 
    <form className="create" onSubmit={handleSubmit}>
      <h3>
        add a new course
      </h3>
      <label>course title:</label>
      <input type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label> Course price:</label>
      <input type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="Enter price in USD" />
      <label> Course subject:</label>
      <input type="text"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <label> instructor id:</label>
      <input type="text"
        onChange={(e) => setInstructorId(e.target.value)}
        value={instructorId}
      />
      <label> instructor name:</label>
      <input type="text"
        onChange={(e) => setInstructorName(e.target.value)}
        value={instructorName}
      />
      <form>
        <label>Subtitle:</label>
        {
          subtitles.map((singleSubtitle, index) => (
            <div>
              <div>
                <input placeholder="title" name="title" value={singleSubtitle.title} onChange={(e) => handleSubtitleChange(e, index)}></input>
                <input placeholder="hours" name="subtitleHours" value={singleSubtitle.subtitleHours} onChange={(e) => handleSubtitleChange(e, index)}></input>
                <label>Video:</label>
                <div>
                  <input placeholder="url" name="url" value={singleSubtitle.url} onChange={(e) => handleSubtitleChange(e, index)}></input>
                  <input placeholder="short description" name="shortDescription" value={singleSubtitle.shortDescription} onChange={(e) => handleSubtitleChange(e, index)}></input>
                  {/* <button onClick={() => handleVideoChange(index)}>Save Video</button> */}
                </div>
                <label>Exercise:</label>
                <br></br>
                <div>
                  <label>Question one:</label>
                  <input id='question1' name="question1" value={singleSubtitle.question1} onChange={(e) => handleSubtitleChange(e, index)}></input>
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <label>Option 1:</label>
                      <input id='Text1' className="exercise" name="Text1" value={singleSubtitle.Text1} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect1' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect1"
                        value={singleSubtitle.isCorrect1} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                    <div>
                      <label>Option 2:</label>
                      <input id='Text2' className="exercise" name="Text2" value={singleSubtitle.Text2} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect2' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect2"
                        value={singleSubtitle.isCorrect2} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                    <div>
                      <label>Option 3:</label>
                      <input id='Text3' className="exercise" name="Text3" value={singleSubtitle.Text3} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect3' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect3"
                        value={singleSubtitle.isCorrect3} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                    <div>
                      <label>Option 4:</label>
                      <input id='Text4' className="exercise" name="Text4" value={singleSubtitle.Text4} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect4' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect4"
                        value={singleSubtitle.isCorrect4} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                  </div>
                </div>

                <div>
                  <label>Question Two:</label>
                  <input id='question2' name="question2" value={singleSubtitle.question2} onChange={(e) => handleSubtitleChange(e, index)}></input>
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <label>Option 1:</label>
                      <input id='Text5' className="exercise" name="Text5" value={singleSubtitle.Text5} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect5' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect5" value={singleSubtitle.isCorrect5} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                    <div>
                      <label>Option 2:</label>
                      <input id='Text6' className="exercise" name="Text6" value={singleSubtitle.Text6} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect6' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect6" value={singleSubtitle.isCorrect6} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                    <div>
                      <label>Option 3:</label>
                      <input id='Text7' className="exercise" name="Text7" value={singleSubtitle.Text7} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect7' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect7" value={singleSubtitle.isCorrect7} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                    <div>
                      <label>Option 4:</label>
                      <input id='Text8' className="exercise" name="Text8" value={singleSubtitle.Text8} onChange={(e) => handleSubtitleChange(e, index)}></input>
                      <input id='isCorrect8' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect8" value={singleSubtitle.isCorrect8} onChange={(e) => handleSubtitleChange(e, index)}></input>
                    </div>
                  </div>
                </div>
                {/* <button onClick={() => {
                  
                  const list = [...subtitles];
                  list[index][exercise] = exercise;
                  setSubtitles(list);
                }}>Save Exercise</button> */}
                <br></br>
                {
                  subtitles.length - 1 === index && (
                    <button
                      type="button"
                      onClick={handleSubtitleAdd}
                      className="add-btn"
                    >
                      <span>Add Subtitle</span>
                    </button>
                  )
                }
              </div>
            </div>

          ))
        }

      </form>


      <label> Course shortSummary:</label>
      <input type="text"
        onChange={(e) => setShortSummary(e.target.value)}
        value={shortSummary}
      />
      <label> Course Outline:</label>
      <input type="text"
        onChange={(e) => setCourseOutline(e.target.value)}
        value={courseOutline}
      />
      <label> Preview Video:</label>
      <input type="text" placeholder="url" id="previewURL" onChange={(e) => setPreviewVideoURL(e.target.value)}
        value={previewVideoURL} />
      <input type="text" placeholder="short description" id="previewShortDescription" onChange={(e) => setPreviewVideoShortDescription(e.target.value)}
        value={previewVideoShortDescription} />

      <label>Course Exercise:</label>
      <br></br>
      <div>
        <label>Question one:</label>
        <input id='question1' name="question1" value={exercise.question1} onChange={(e) => setExercise({ ...exercise, question1: e.target.value })}></input>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label>Option 1:</label>
            <input id='Text1' className="exercise" name="Text1" value={exercise.Text1} onChange={(e) => setExercise({ ...exercise, Text1: e.target.value })}></input>
            <input id='isCorrect1' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect1"
              value={exercise.isCorrect1} onChange={(e) => setExercise({ ...exercise, isCorrect1: e.target.value })}></input>
          </div>
          <div>
            <label>Option 2:</label>
            <input id='Text2' className="exercise" name="Text2" value={exercise.Text2} onChange={(e) => setExercise({ ...exercise, Text2: e.target.value })}></input>
            <input id='isCorrect2' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect2"
              value={exercise.isCorrect2} onChange={(e) => setExercise({ ...exercise, isCorrect2: e.target.value })}></input>
          </div>
          <div>
            <label>Option 3:</label>
            <input id='Text3' className="exercise" name="Text3" value={exercise.Text3} onChange={(e) => setExercise({ ...exercise, Text3: e.target.value })}></input>
            <input id='isCorrect3' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect3"
              value={exercise.isCorrect3} onChange={(e) => setExercise({ ...exercise, isCorrect3: e.target.value })}></input>
          </div>
          <div>
            <label>Option 4:</label>
            <input id='Text4' className="exercise" name="Text4" value={exercise.Text4} onChange={(e) => setExercise({ ...exercise, Text4: e.target.value })}></input>
            <input id='isCorrect4' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect4"
              value={exercise.isCorrect4} onChange={(e) => setExercise({ ...exercise, isCorrect4: e.target.value })}></input>
          </div>
        </div>
      </div>

      <div>
        <label>Question two:</label>
        <input id='question2' name="question2" value={exercise.question2} onChange={(e) => setExercise({ ...exercise, question2: e.target.value })}></input>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <label>Option 1:</label>
            <input id='Text5' className="exercise" name="Text5" value={exercise.Text5} onChange={(e) => setExercise({ ...exercise, Text5: e.target.value })}></input>
            <input id='isCorrect5' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect5"
              value={exercise.isCorrect5} onChange={(e) => setExercise({ ...exercise, isCorrect5: e.target.value })}></input>
          </div>
          <div>
            <label>Option 2:</label>
            <input id='Text6' className="exercise" name="Text6" value={exercise.Text6} onChange={(e) => setExercise({ ...exercise, Text6: e.target.value })}></input>
            <input id='isCorrect6' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect6"
              value={exercise.isCorrect6} onChange={(e) => setExercise({ ...exercise, isCorrect6: e.target.value })}></input>
          </div>
          <div>
            <label>Option 3:</label>
            <input id='Text7' className="exercise" name="Text7" value={exercise.Text7} onChange={(e) => setExercise({ ...exercise, Text7: e.target.value })}></input>
            <input id='isCorrect7' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect7"
              value={exercise.isCorrect7} onChange={(e) => setExercise({ ...exercise, isCorrect7: e.target.value })}></input>
          </div>
          <div>
            <label>Option 4:</label>
            <input id='Text8' className="exercise" name="Text8" value={exercise.Text8} onChange={(e) => setExercise({ ...exercise, Text8: e.target.value })}></input>
            <input id='isCorrect8' placeholder="Please specify if this option is true or false" className="exercise" name="isCorrect8"
              value={exercise.isCorrect8} onChange={(e) => setExercise({ ...exercise, isCorrect8: e.target.value })}></input>
          </div>
        </div>
      </div>
      <button>Add course</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default CourseForm