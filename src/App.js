import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Display from './components/Display';
import FirstComp from './components/FirstComp';
import Show from './components/Show';
import SignupForm from './components/SignupForm';
import AddLocalStorage from './components/AddLocalStorage';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserId from './components/UserId';
import Navigation from './components/Navigation';
import Product from './components/Product';
import Category from './components/Category';
import NewProduct from './components/NewProduct';


function App() {
  var products=[{prodName:"marker",prodPrice:100},
    {prodName:"pens",prodPrice:200},
    {prodName:"color",prodPrice:500}
  ]

let [list,setList]=useState(products);
 
  let [flag,setFlag]=useState(false);
  function funAddForm(){
   setFlag(!flag);
   
  }
  function getProdObj(newObj){
    console.log(newObj);
    setList([...list,newObj]);
    
  }
  function upArr(newObj){
  var arr=list.map((obj)=>{
    if(obj.prodName===newObj.prodName){
      obj.prodPrice=newObj.prodPrice;
    }
    return obj;
  })
  setList(arr);

  }
  function removeArr(newObj){
    var arr=list.filter((x)=>{
      if(x.prodName!=newObj.prodName){
        return x;
      }
    })
    
    setList(arr);
  
  }
  function funSort(){
    var arr1=[...list];
    var arr=arr1.sort(function(a,b){
      return b.prodPrice-a.prodPrice;
    })
    setList(arr);
    
    
  }
  //inline css
  let myStyle={backgroundColor:"red",
    color:"white",
    width:"100px",
    height:"30px"};
  return (
    <div className='container'>
      <h1>First React App</h1>
      {/* <FirstComp/> */}
      <h4>{new Date().toDateString()}</h4>
    <Navigation />
      <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/signup" Component={SignupForm}></Route>
      <Route path="/addLocal" Component={AddLocalStorage}></Route>
      <Route path="/user/:id/:name" Component={UserId}></Route>
      <Route path="/product" Component={Product}></Route>
      <Route path="/category" Component={Category}></Route>
      <Route path="/addNewProduct" Component={NewProduct}></Route>
      <Route path="/*" Component={Home}></Route>
      </Routes>
      
     
      <Display arr={list} getUpObj={upArr} removeObj={removeArr}/>
     
      <input type="button" value="AddProduct" onClick={funAddForm} style={myStyle}
      />
      {
        //conditional rendering
        flag && <AddProduct getArr={getProdObj} />
      }
      <input type="button" value="Sort" onClick={funSort} />
      <hr></hr>

      <Show data={list}/>
      <hr></hr>
      {/*
      <SignupForm />
      <hr></hr>
      <AddLocalStorage />
    */}
    </div>
   
    );
}

export default App;
