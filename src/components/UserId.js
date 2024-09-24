import { useParams } from "react-router-dom";

function UserId(){
    var obj=useParams();
   var userId=obj.id;
   var str=obj.name;

    return(<>
    
 <h2>This is User<span>Id={userId} Name={str}</span></h2> 
 
 
   </>
 )
}
export default UserId;