import { useRef } from "react";

function SignupForm(){
    //uncontrolled form
    var fname=useRef();
    var lname=useRef();

    function funSubmit(event){
        event.preventDefault();
        console.log(fname.current.value,lname.current.value);
    }
return(<div>
    <form >
    <div>
        FirstName:<input type="text" ref={fname}></input>
    </div>
    <div>
        LastName:<input type="text" ref={lname}></input>
    </div>
    <div>
        <input type="submit" value="Register" onClick={funSubmit}></input>
    </div>
    </form>
</div>)
}
export default SignupForm;