import { useState } from "react";
import ShowForm from "./ShowForm";

function Show(props){
    let product=props.data;
    let[btnClick,setBtnClick]=useState(false);
    let[rowData,setRowData]=useState();
    function funRowClick(x){
        console.log(x);
        setRowData(x);
        setBtnClick(true);
    }
    return (<div>
        <table border="2">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {
                product.map((x)=>{
                   return <tr key={x.prodName} onClick={()=>{funRowClick(x)}}>
                        <td>{x.prodName}</td>
                        <td>{x.prodPrice}</td>
                    </tr>
                })
            }
        </table>
        {
            btnClick && <ShowForm rowData={rowData}/>
            
        }
    </div>)
}
export default Show;