import { useState } from "react";
import st from './AddProduct.module.css';
function AddProduct(props){

    let[txtName,setTxtName]=useState();
    let[txtPrice,setTxtPrice]=useState();

    function funNameChange(event){
        setTxtName(event.currentTarget.value);
    }
    function funPriceChange(event){
        setTxtPrice(event.currentTarget.value);
    }
    function funInsert(){
        var obj={prodName:txtName,prodPrice:txtPrice};
        console.log(obj);
        props.getArr(obj);

    }
   
return( <>
    <form>
        ProductName:<input type="text" onChange={funNameChange}/><br/>
        ProductPrice:<input type="text" onChange={funPriceChange}/><br/>
        <input type="button" value="Insert" onClick={funInsert} />
        
    </form>
    
</>)
}
export default AddProduct;

