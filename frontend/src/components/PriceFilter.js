import React, { useState } from 'react'
import { useEffect } from 'react';
const PriceFilter = () => {
  
  const [filterResults, setfilterResults] = useState(null);
//   const [subjectfilterResults, setsubjectfilterResults] = useState(null);
  useEffect(() =>{

    const fetchCourses = async () => {
        const response = await fetch(`/instructor/all`);
        const json = await response.json()
       
    
        if (response.ok) {
            setfilterResults(json)
            console.log(json)
        }

		};
        fetchCourses();
   
    }, []);

   
      const onfilterChange= async (event) => { 
          
            if (event.target.value === "two") {
                let price=200
              const response = await fetch(`/instructor/?price=${price}`);
            const json = await response.json()
           
        
            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
            }
            
            else if(event.target.value === "three"){
                let price=300
                const response = await fetch(`/instructor/?price=${price}`);
              const json = await response.json()
             
          
              if (response.ok) {
                  setfilterResults(json)
                  console.log(json)
              }
                }

              else{
                const response = await fetch(`/instructor/all`);
              const json = await response.json()
             
          
              if (response.ok) {
                  setfilterResults(json)
                  console.log(json)
              }

              }
               
            
            
        }
        const onfilterChange2= async (event) => { 
          
            if (event.target.value === "all") {
                const response = await fetch(`/instructor/all`);
              const json = await response.json()
             
          
              if (response.ok) {
                  setfilterResults(json)
                  console.log(json)
              }
            }
            else{
              const response = await fetch(`/instructor/subject/?subject=${event.target.value}`);
            const json = await response.json()
           
        
            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
            
        
            
            }
            
            
        }
            
      
        
    
	return (
<div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
                <b>Filter by Price:</b>
     <select name="price" onChange={onfilterChange}>
         <option value="all">All</option>
         <option value="two">200</option>
         <option value="three">300</option>
     </select>


    
        
</div>
<div className="mb-3 col-4 mx-auto text-center">
                <b>Filter by Subject:</b>
     <select name="price" onChange={onfilterChange2}>
         <option value="all">All</option>
         <option value="bio">bio</option>
         <option value="chem">chem</option>
         <option value="calculus">calculus</option>

     </select>


    
        
</div>





{filterResults &&
                    filterResults.map((course) => (
                        <div className="box" key={course.id}>
                            <b>TITLE:</b>
                            <p>{course.title}</p> 
                            <b>PRICE:</b>
                            <p>{course.price}</p>
                            <b> InstructorNAME:</b>
                            <p>{course.instructorName}</p>
                            <b> SUBJECT:</b>
                            <p>{course.subject}</p>


                        </div>
                    ))
                }



                
</div>

          
    )
    
    }



export default PriceFilter;