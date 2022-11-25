import PriceFilter from "../components/PriceFilter";
import EditBiography from "../components/InstructorEditBiography";
import EditEmail from "../components/InstructorEditEmail";
import DefinePromotion from "../components/InstructorDefinePromotion";
const InstructorHome = () => {
    return (

        <div className="home">
            <PriceFilter />
           
            <EditBiography/>
            <EditEmail/> 
           
            
            
        </div>
    )
}
export default InstructorHome