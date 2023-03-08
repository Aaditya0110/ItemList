import React, { Component, useState } from "react";
import axios from "axios"; 
import { Link, useParams } from "react-router-dom";
const UpdateItem=()=>
{
    const params=useParams();
    const [Name,setName]=useState("");
    const [price,setPrice]=useState(0);

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handlepriceChange=(e)=>{
        setPrice(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/update/"+params.id,{id:params.id,name:Name,price:price});
    }
        return(
            <div className="whole">
                <center>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="bd">
                <h1>Update Item</h1>
                    <br></br>
            <form onSubmit={handleSubmit}>
            <label>Name :</label>
                <input type="text" onChange={handleNameChange}>
                </input><br/>
                <label>Price</label>
                <input type="number" onChange={handlepriceChange}>
                </input><br/><br></br>
            <Link to="/"><button className="bd5" >Back</button></Link>
            <input className="bd3" type="submit"/>
            <br></br>
            <br></br>
            </form>
            </div>
            </center>
            </div>
        )
    }
    export default UpdateItem;