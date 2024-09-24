function FirstComp(){

    let name="Bitcode";
    var colors=["red","yellow","blue","green"];
    let str=<b>Technologies</b>
    console.log("firstComponent");
    function funClick(event){
        if(event.type==="click"){
            alert("Hello!!");
        }
        else if(event.type==="mouseover"){
            event.currentTarget.style.backgroundColor="red";
        }
        else if(event.type==="mouseout"){
            event.currentTarget.style.backgroundColor="yellow";
        }
    }
    return (
    <div>
              <h5>  Hello!!" This is FirstComponent</h5>
              <h6>This is {name}</h6>
              <div>
                Sum:{2+2}
                {str}
            <input type="button" value="Click" onClick={funClick} onMouseOver={funClick} onMouseOut={funClick}></input>
     </div>
     <ul>
               {
                colors.map((x,ind)=>{
                    return <li key={ind}>{x}</li>
                })
               }
             
            </ul>
            <table border="2">
                <tr>
                    <td>Index</td>
                    <td>Value</td>
                </tr>
                {
                        colors.map((i,ind)=> {
                        return <tr>
                                <td>{ind}</td>
                                <td>{i}</td>
                                </tr>
                        })
                        
                    }
                    
                
            </table>
    </div>);
}

export default FirstComp;