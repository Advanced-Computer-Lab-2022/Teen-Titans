import { render } from "react-dom";
import { useState } from "react"
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import axios from "axios";


//const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CreditCardForm() {
  const [message, setMessage] = useState('')
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId')
    //const userId = localStorage.getItem('id')
   // console.log( document.getElementById("id").value)

  const register = async ()=>{
    const response = await fetch('/individualTrainee/registerForCourse', {
      method: 'POST',
      body: JSON.stringify({
          "id":document.getElementById("id").value,
          "courseId":courseId
      }),
      headers: { 'Content-Type': 'application/json' }

  })

  if (response.ok) {
      setMessage("Registration Successful!")
  }
  else {
      setMessage("Registration Unsuccessful!")
  }
      
    }
    return (
      <Styles>
        {/* <h1>🏁 React Stripe</h1> */}
        <Form
          onSubmit={register}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
          }) => {

            
           
          return (
            
            <form onSubmit={register}>
              <input id = 'id'></input>
            <Card
              number={values.number || ""}
              name={values.name || ""}
              expiry={values.expiry || ""}
              cvc={values.cvc || ""}
              focused={active}
            />
            <div>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="Your email"
              />
            </div>
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
              />
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
            
            <button  type="submit" disabled={submitting} >
            Submit
          </button>
             
              </form>
          );
            }}
      
          />
          </Styles>
        );
    
  
}
export default CreditCardForm
 //render(<CreditCardForm />, document.getElementById("root"));