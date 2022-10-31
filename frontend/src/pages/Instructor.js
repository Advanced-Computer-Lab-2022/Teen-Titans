
import { useEffect,useState } from 'react'
import axios from 'axios';
import Table from '../components/Table';
import Subject from '../components/Subject'
import Filter from '../components/Filter';


const base_url = '/instructor/getCoursesTitles'

const Instructor =()=> {
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({ sort: "price", order: "desc" });
    const [filterGenre, setfilterGenre] = useState([])
  

useEffect(() =>{

   
    const fetchCourses = async () => {
        try {
        const url=`${base_url}?subject=${filterGenre.toString()}&sort=${sort.sort},${
            sort.order
        }`
        const { data } = await axios.get(url);
				setObj(data);
                console.log(data)

            } catch (err) {
				console.log(err);
			}
		};
        fetchCourses();
    }, [filterGenre, sort]);











    return(
        <div className="wrapper">
        <div className="container">
            <div className="head">
              
            </div>
            <div className="body">
                <div className="table_container">
                    <Table  courses={obj.courses ? obj.courses : []} />
                
                </div>
                <div className="filter_container">
                    <Filter sort={sort} setSort={(sort) => setSort(sort)} />
                    <Subject
                        filterGenre={filterGenre}
                        subjects={obj.subjects ? obj.subjects : []}
                        setfilterGenre={(subject) => setfilterGenre(subject)}
                    />
                </div>
            </div>
        </div>
    </div>
  
    )

}


  

export default Instructor