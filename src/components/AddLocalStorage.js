import { useState } from "react";

function AddLocalStorage(){
    
    let[txtName,setTxtName]=useState();
    let[txtPrice,setTxtPrice]=useState();

    function funNameChange(event){
        setTxtName(event.currentTarget.value);
    }
    function funPriceChange(event){
        setTxtPrice(event.currentTarget.value);
    }
     //radio button
     let[rBtn,setRbtn]=useState("");
     function funChange(event){
         var op=event.currentTarget.value;
         console.log(op);
         setRbtn(op);
     }
     //checkbox
     let[checkBtn,setCheckBtn]=useState([]);
     
     function funCheck(event){
         if(event.currentTarget.checked){
             var str=event.currentTarget.value;
             setCheckBtn([...checkBtn,str]);
         }
         else{
             setCheckBtn(checkBtn.filter((item) => item !== event.currentTarget.value));
         }
         
     }
 
     function funSet(){
         var obj={prodName:txtName,
             prodPrice:txtPrice,
             prodOp:rBtn,
             prodCheck:checkBtn
            
         }
         if(!localStorage.getItem("ex")){
             var arr=[];
             arr.push(obj);
             localStorage.setItem("ex",JSON.stringify(arr));
         }
         else{
             var arr=JSON.parse(localStorage.getItem("ex"));
             arr.push(obj);
             localStorage.setItem("ex",JSON.stringify(arr));
         }
     } 
return (
    <div>
        <form>
        <div>
        Name:<input type="text" onChange={funNameChange}/>
        </div>
        <div>
        Price:<input type="text" onChange={funPriceChange} />
        </div>
        <div>
        <input type="radio" value="Pass" name="result" onChange={funChange} />Pass
    </div>
    <div>
        <input type="radio" value="Fail" name="result" onChange={funChange} />Fail 
    </div>
    <div>
        <input type="checkbox" value="Angular" onChange={(event)=>{funCheck(event)}} />Angular
    </div>
    <div>
        <input type="checkbox" value="React"  onChange={(event)=>{funCheck(event)}} />React
    </div>
    <input type="button" value="InsertToLS" onClick={funSet} />

           
        </form>
    </div>
)
}
export default AddLocalStorage;