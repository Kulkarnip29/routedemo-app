//Product.js
import { useEffect, useState } from "react";

function Product(){

    let myStyle={width:"100px",height:"100px"};
    function funLi(event){
        event.preventDefault();
        console.log(event.target.textContent);
        if(event.target.textContent===1){
            getAllProducts(10,0);
        }
        else if(event.target.textContent==2){
            getAllProducts(10,10);
        }
        else if(event.target.textContent==3){
            getAllProducts(10,20);
        }
    }
    let arr=[];
    let[list,setList]=useState([]);
    async function getAllProducts(l1,s1){
        let lm=l1;
        let sp=s1;
        var output=await fetch("https://dummyjson.com/products?limit="+lm+"&skip="+sp+"&select=id,title,price,thumbnail&quot")
        var response=await output.json();
        arr=response.products;
        setList(arr);
        console.log(list.length);
        }
        useEffect(()=>{
           getAllProducts(10,0);
        },[]);
   
    return <>

    <ul onClick={funLi}><li><a href="">1</a></li><li><a href="">2</a></li><li><a href="">3</a></li></ul>
    <table border="2">
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Price</td>
            <td >Img</td>
        </tr>
        {
           list.map((x)=>{
          return <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.price}</td>
                <td><img src={x.thumbnail} style={myStyle}/></td>
            </tr>
           })
        }
    </table>
    </>;
}
export default Product;