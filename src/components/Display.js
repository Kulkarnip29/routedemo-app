import React from 'react';
import './Display.css';
import st from './Display.module.css';
function Display(props){

   let product=props.arr;
   function funAction(event,x){
       if(event.target.textContent==="Edit"){
        var newPrice=prompt("Enter the new Price:");
       var upObj={prodName:x.prodName,prodPrice:newPrice};
       props.getUpObj(upObj);

    }
    else if(event.target.textContent==="Delete"){
        props.removeObj(x);

    }
   }
    return (<React.Fragment>
            <table border="2" className={st.tb}>
                <tbody>

                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>{
                    product.map((x)=>{
                        return <tr key={x.prodName}  >
                            <td>{x.prodName}</td>
                            <td>{x.prodPrice}</td>
                            <td onClick={
                                (event)=>{event.preventDefault();
                                funAction(event,x)}
                                }>
                                <a href="" >Edit</a> /
                                <a href="">Delete</a>
                            </td>
                            </tr>
                    })
                }
                </tbody>
            </table>
            </React.Fragment>
    );
}
export default Display;