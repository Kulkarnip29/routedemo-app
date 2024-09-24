import { useEffect, useState } from "react";

function UpdateCategory(props){
    
    let [txtId,setTxtId]=useState();
    let [txtTitle,setTxtTitle]=useState();
    let [txtBrand,setTxtBrand]=useState();
    let [txtPrice,setTxtPrice]=useState();
    let [txtRating,setTxtRating]=useState();
    
    function funIdChange(event){
       setTxtId(event.currentTarget.value); 
    }
    function funTitleChange(event){
        setTxtTitle(event.currentTarget.value); 
     }
     function funBrandChange(event){
        setTxtBrand(event.currentTarget.value); 
     }
     function funPriceChange(event){
        setTxtPrice(event.currentTarget.value); 
     }
     function funRatingChange(event){
        setTxtRating(event.currentTarget.value); 
     }
     async function funUpdate(event){
        event.preventDefault();
        var id=txtId;
        var obj={
         title:txtTitle,
         brand:txtBrand,
         price:txtPrice,
         rating:txtRating
        }

        var response=await fetch("https://dummyjson.com/products/"+id,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(obj)
            
            })
            var res=await response.json();
            console.log(res);
    }
   async function funDelete(event){
        event.preventDefault();
        var response=await fetch("https://dummyjson.com/products/"+txtId,{
            method:"DELETE",
        })
        var res=await response.json();
        console.log(res.id+" deleted!!!");
    }
    useEffect(()=>{
        let rowData=props.row;

        setTxtId(rowData.id);
        setTxtTitle(rowData.title);
        setTxtBrand(rowData.brand);
        setTxtPrice(rowData.price);
        setTxtRating(rowData.rating);
    },[props]);

    return <>
    <div>
        Id:<input type="text" onChange={funIdChange} value={txtId}/>
    </div>
    <div>
        Title:<input type="text" onChange={funTitleChange} value={txtTitle}/>
    </div>
    <div>
        Brand:<input type="text" onChange={funBrandChange} value={txtBrand}/>
    </div>
    <div>
        Price:<input type="text" onChange={funPriceChange} value={txtPrice}/>
    </div>
    <div>
        Rating:<input type="text" onChange={funRatingChange} value={txtRating}/>
    </div>
    <div>
        <input type="submit" onClick={funUpdate} value="Update"/>
    </div>
    <div>
        <input type="submit" onClick={funDelete} value="Delete"/>
    </div>
    </>
}
export default UpdateCategory;
