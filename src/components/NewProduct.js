import { useRef } from "react";

function NewProduct(){
let txtId= useRef();
let txtName=useRef();
let txtTitle=useRef();
let txtPrice=useRef();

async function funInsert(event){
    let name=txtName.current.value;
    let price=txtPrice.current.value;
    console.log(name,price);
    var obj={
        title:name,
        price:price,
        rating:4
    }
    var response=await fetch("https://dummyjson.com/products/add",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(obj)
    })
    var result=await response.json();
    console.log(result);

}
return <>
<h2>Add New Product</h2>
    <div>
        <form>
             <div>
                Id:<input type="text" ref={txtId}></input>
            </div>

            <div>
                Name:<input type="text" ref={txtName}></input>
            </div>

            <div>
               Title:<input type="text" ref={txtTitle}></input>
            </div>

            <div>
                Price:<input type="text" ref={txtPrice}></input>
            </div>
            <div>
               <input type="button" value="Insert" onClick={funInsert}></input>
            </div>
        </form>
    </div>
</>
}
export default NewProduct;
