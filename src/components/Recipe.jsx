import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const API_URL = "http://localhost:5005";

function Recipe (){
    const [recep, setrecep] = useState([])
    const {recepid}= useParams()

    const getRecep = () =>{
        axios.get(`${API_URL}/recipe/${recepid}`)
        .then((reponse)=>
        setrecep(reponse.data)
       
        )
        
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{
        getRecep();
        
    },[])
    
    return(
       <div>
        {recep && (
            <>
            <img className="recipeImage"src={recep.image}/>
            <br/>
            <h1 className="center">{recep.name}</h1>
            <br/>
            <h2 className="center">{recep.cuisine}</h2>
            <br/>
            <ul className="center">
            <li> {recep.ingredients}</li>
            </ul>
            <br/>
            <p className="center">{recep.instructions}</p>

            </>
        )}


       </div>
    )
}
export default Recipe