

import PriceFilter from "../components/PriceFilter";


    

const Home = () => {


    return (

        <div className="home">
            <PriceFilter />
           
        </div>
    )
}












//     return(
//         <div className="wrapper">
//         <div className="container">
//             <div className="head">
              
//             </div>
//             <div className="body">
//                 <div className="table_container">
//                     <Table  courses={obj.courses ? obj.courses : []} />
                
//                 </div>
//                 <div className="filter_container">
//                     <Filter sort={sort} setSort={(sort) => setSort(sort)} />
//                     <Subject
//                         filterGenre={filterGenre}
//                         subjects={obj.subjects ? obj.subjects : []}
//                         setfilterGenre={(subject) => setfilterGenre(subject)}
//                     />
//                 </div>
//             </div>
//         </div>
//     </div>
  
//     )

// }


  

export default Home