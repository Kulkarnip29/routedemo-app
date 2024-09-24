import { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Category(){

let[category,setCategory]=useState([]);

let[catProducts,setCatProducts]=useState([]);
let[flagChange,setFlagChange]=useState(false);

async function getCategory(){
var result=await fetch("https://dummyjson.com/products/category-list");
var response=await result.json();

setCategory(response);
}
function funChange(event){
    console.log(event.target.value);
    getCatProducts(event.target.value);
}
async function getCatProducts(op){
    let response =await fetch("https://dummyjson.com/products/category/"+op);
    let res=await response.json();
    console.log(res);
    setCatProducts(res.products);
    setFlagChange(true);
}
useEffect(()=>{
    getCategory();
},[]);

return <>
<h3>Category</h3>
<div>
    Select Category:<select onChange={funChange}>
        <option>Select</option>
        {
            category.map((x)=>{
              return   <option>{x}</option>
            })
        }
    </select>
    {
        flagChange && <ProductList  data={catProducts} />
    }
</div>
</>
}
export default Category;
