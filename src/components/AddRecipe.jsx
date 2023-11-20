import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddRecipe() {
    const[name, setName]=useState('')
    const[cuisine, setCuisine]=useState('')
    const[image, setImage]=useState('')
    const[ingredients, setIngredients]=useState('')
    const[instructions, setInstructions]=useState('')

    const navigate = useNavigate()
    const handleSubmit= (e)=>{
        e.preventDefault()
        const requestBody={
            name: name,
            cuisine: cuisine,
            image: image,
            ingredients: ingredients,
            instructions: instructions,
        }
        axios 
        .post(`${API_URL}/addRecipe`, requestBody)
        .then((rep)=>{
            navigate("/addRecipe")
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div>
        <h1>Add Reciepe</h1>
        <br/>
        <form onSubmit={handleSubmit}>
             <label>Name:</label>
            <input
                type="text"
                name="Name"
                value={name}
                onChange={(e) =>setName(e.target.value)}
                />

                  <label>Cuisine:</label>
                <input
                type="text"
                name="Cuisine"
                value={cuisine}
                onChange={(e) =>setCuisine(e.target.value)}
                />
                    <label>Image:</label>
                <input
                type="url"
                name="Image"
                value={image}
                onChange={(e) =>setImage(e.target.value)}
                />
                    <label>Ingredients:</label>
                <input 
                type="text"
                name="Ingredients"
                value={ingredients}
                onChange={(e) =>setIngredients(e.target.value)}    
                />
                    <label>Instructions:</label>
                <input
                type="text"
                name="Instructions"
                value={instructions}
                onChange={(e) =>setInstructions(e.target.value)} 
                />
                <button type="submit">Submit</button>   
        </form>
      
    </div>
  )
}

export default AddRecipe
