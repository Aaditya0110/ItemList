
import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class AddItem extends Component
{
    constructor()
    {
        super();
        this.state={id:1,name:"",price:1};
    }
    handleidChange=(e)=>{
        this.setState({id:e.target.value})
    }
    handleNameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handlepriceChange=(e)=>{
        this.setState({price:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/post",this.state);
    }
    
    render()
    {
        return(
            <div className="whole"><center><br></br><br></br><br></br> 
            <div className="bd">
            <h1>Add Items</h1>
            <form onSubmit={this.handleSubmit}>
            <label>id</label>
                <input type="number" onChange={this.handleidChange}>
                </input><br></br><br></br><br></br>
                <label>Name:</label>
                <input type="text" onChange={this.handleNameChange}>
                </input><br></br><br></br><br></br>
                <label>price</label>
                <input type="number" onChange={this.handlepriceChange}>
                </input><br></br><br></br><br></br>
                <Link to="/"><button className="bd5" >Back</button></Link>
                <input type="submit" className="bd3"/>
                <br></br><br></br>
            </form>
            </div>
            </center>
            </div>
        )
    }
}