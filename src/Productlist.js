import React, { useState } from 'react'

export default function Productlist() {
    const [id,setId]=useState("");
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[output,setOutput]=useState([]);
    const[div,setDiv]=useState({display:"none"})
    const idHandler=(e)=>{
      setId(e.target.value)
    }
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const buttonHandler=(e)=>{
      var obj={
        id1:id,
        name1:name,
        price1:price
      }
      if(obj.id1===""&&obj.name1===""&&obj.price1===""){
        alert("please fill all the boxes")
        setDiv({display:"none"})
      }
      else if(obj.id1===""&&obj.name1===""){
        alert("please enter id and name")
        setDiv({display:"none"})
      }
      else if(obj.id1===""&& obj.price1===""){
        alert("please enter id and price")
        setDiv({display:"none"})
      }
      else if(obj.name1===""&&obj.price1===""){
        alert("please enter name and price")
        setDiv({display:"none"})
      }
      else if(obj.name1===""){
        alert("please enter name")
        setDiv({display:"none"})
      }
      else if(obj.price1===""){
        alert("please enter price")
        setDiv({display:"none"})
      }
      else if(obj.id1===""){
        alert("please enter id")
        setDiv({display:"none"})
      }
      else if(!isNaN(obj.name1)){
        alert("name should be integer")
        setDiv({display:"none"})
      }
      else if(obj.id1<=0){
        alert("please enter correct id")
        setDiv({display:"none"})
      }
      else if(obj.price1<=0){
        alert("please enter correct price")
        setDiv({display:"none"})
      }
      else{
        setOutput([...output,obj])
        setDiv({display:"block"})
        
      }
    }
  return (
    <div>
        Product ID:<input type="number" onChange={idHandler}/>
        <br /><br />
        Product NAME:<input type="text" onChange={nameHandler}/>
        <br /> <br />
        Product PRICE:<input type="text" onChange={priceHandler} />
        <br /> <br />
        <button onClick={buttonHandler}>ADD</button>
        <div>
          
            <table className='center' style={div} >
                <thead>
                <tr>
                <th>Product Id</th>
                <th>Product NAME</th>
                <th>Product PRICE</th>
                </tr>
                </thead>
                {output.map((item)=>
                <tbody key={item.id1} >
                    <tr>
                        <td>{item.id1}</td>
                        <td>{item.name1}</td>
                        <td>{item.price1}</td>
                    </tr>
                </tbody>)}
                
            </table>
           
        </div>
    </div>
  )
}
