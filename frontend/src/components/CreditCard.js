import { render } from "react-dom";
import { useState,useEffect } from "react"
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import axios from "axios";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CreditCardForm() {
  const [message, setMessage] = useState('')
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId')
    const userId = localStorage.getItem('id')
  
    useEffect(() => {
      if (!window.document.getElementById("stripe-script")) {
        var s = window.document.createElement("script");
        s.id = "stripe-script";
        s.type = "text/javascript";
        s.src = "https://js.stripe.com/v2/";
        s.onload = () => {
          window["Stripe"].setPublishableKey(
            "pk_test_51MEvkYDb3AuWuf2f9cSXdr8gPEuMwvNhx4UoOEEbwKOkXZLRHU6EX36d0LEDU54hpcP3V674glZYxj68606UJIx600JzZBl6Hy"
          );
        };
        window.document.body.appendChild(s);
      }
    }, []);
    const onSubmit = async (values) => {
      await sleep(300);
      try {
        window.Stripe.card.createToken(
          {
            number: values.number, 
            exp_month: values.expiry.split("/")[0],
            exp_year: values.expiry.split("/")[1],
            cvc: values.cvc,
            name: values.name,
          },
          (status, response) => {
            if (status === 200) {
              axios
                .post("/api/stripe-payment", {
                  token: response,
                  email: values.email,
                
                })
                .then((res) => window.alert(JSON.stringify(res.data, 0, 2)))
                .catch((err) => console.log(err));
            } else {
              console.log(response.error.message);
            }
          }
        );
      } catch (error) {}
    };

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
      alert("Registration Successful!")
  }
  else {
      setMessage("Registration Unsuccessful!")
      alert("Registration Unsuccessful!")
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
          }) => 
          {

            
           
          return (
            
            <form onSubmit={handleSubmit}>
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
                required
              />
            </div>
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                required
                format={formatCreditCardNumber}
                 
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                required
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
                required
                format={formatExpirationDate}
                
              />
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                required
                format={formatCVC}
                
              />
            </div>
            
            <button  type="submit" disabled={submitting} >
            Submit
          </button>


          <span>{message}</span>
       
              </form>
              
          );
          
            }}
      
          />
          </Styles>
        );
    
  
}
export default CreditCardForm
 //render(<CreditCardForm />, document.getElementById("root"));