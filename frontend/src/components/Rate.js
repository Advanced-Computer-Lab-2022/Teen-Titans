import { useState } from "react";
//import './App.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


const AppRate = ({ courseId, instructorId }) => {
    // console.log("instructor: " + instructorId);
    // console.log("course: " + courseId);
    const [message, setMessage] = useState('')
    const [currentValue, setCurrentValue] = useState(0);
    const [courseValue, setCourseValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [hoverValue2, setHoverValue2] = useState(undefined);
    const stars = Array(5).fill(0)
    const stars2 = Array(5).fill(0)
    const RateCourses = async () => {
        // let id = document.getElementById('ID').value;
        // console.log(courseValue);
        const response = await fetch(`/users/rateCourse?id=${courseId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                "rating": courseValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            setMessage("your rating is saved.")
        }
    }
    const RateInstructor = async () => {
        // let id = document.getElementById('ID').value;
        const response = await fetch(`/users/rateInstructor?id=${instructorId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                "rating": currentValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            console.log(await response.json());
            setMessage("your rating is saved.")
        }
    }

    const handleClick = value => {
        setCurrentValue(value)
        // console.log(currentValue)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleClick2 = value => {
        setCourseValue(value)
        // console.log(courseValue)
    }

    const handleMouseOver2 = newHoverValue => {
        setHoverValue2(newHoverValue)
    };

    const handleMouseLeave2 = () => {
        setHoverValue2(undefined)
    }


    return (
        <div>
            <div style={styles.container}>
                <label>
                    Rate Instructor
                </label>
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
                <button style={styles.button} onClick={() => RateInstructor()}>Submit</button>
                {
                    message &&
                    <span>{message}</span>
                }
            </div>

            <div style={styles.container}>
                <label>
                    Rate Course
                </label>
                <div style={styles.stars2}>
                    {stars2.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                onClick={() => handleClick2(index + 1)}
                                onMouseOver={() => handleMouseOver2(index + 1)}
                                onMouseLeave={handleMouseLeave2}
                                color={(hoverValue2 || courseValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                </div>
                <button style={styles.button} onClick={() => RateCourses()}>Submit</button>
                {
                    message &&
                    <span>{message}</span>
                }
            </div>
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