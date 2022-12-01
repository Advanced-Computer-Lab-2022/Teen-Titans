import { useState } from "react";
//import './App.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function AppRate() {
  const [message, setMessage] = useState('')
  const RateCourses=async()=>{
    let id=document.getElementById('ID').value;
    const response=await fetch(`/individualTrainee/RateCourses/${id}`,{
      method:'POST',
      body:JSON.stringify({
        "rating":document.getElementById('rating').value
      })
    })
    if (response.ok) {
      setMessage("your rating is saved.")
  }
  }
  const RateInstructor=async()=>{
    let id=document.getElementById('ID').value;
    const response=await fetch(`/individualTrainee/RateInstructor/${id}`,{
      method:'POST',
      body:JSON.stringify({
        "rating":document.getElementById('rating').value
      })
    })
    
    if (response.ok) {
      setMessage("your rating is saved.")
  }
  }


  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
    console.log(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
      <label>
        instructorId
        </label>
        <input id='ID'>

        </input>
      <h2> React Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
     

      <button
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default AppRate;