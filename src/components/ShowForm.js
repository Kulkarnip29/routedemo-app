import { useEffect, useState } from "react";

function ShowForm(props){
    let[txtName,setTxtName]=useState();
    let[txtPrice,setTxtPrice]=useState();
     
  
    useEffect(()=>{
        let rowData=props.rowData;
        console.log(rowData);
        setTxtName(rowData.prodName);
        setTxtPrice(rowData.prodPrice);
    })
return (<div>
        <div>
            ProdName:<input type="text" value={txtName}></input>
        </div>
        <div>
            ProdPrice:<input type="text" defaultValue={txtPrice}></input>
        </div>
        <div>
            <input type="button" value="Done"></input>
        </div>
</div>)
}
export default ShowForm;