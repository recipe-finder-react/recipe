import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "https://yassine-backend-test1.adaptable.app";

function RandomRecipe() {
    const [randomRecipe, setRandomRecipe] = useState({})
    useEffect(()=>{
        axios.get(API_URL + "/recipe")
        .then((reponse=>{
            const recipArr = reponse.data.map((rece)=>rece.id)
            const randomId = recipArr[Math.floor(Math.random() * recipArr.length)]
            const newRece = reponse.data.find((rece) => rece.id === randomId)
            setRandomRecipe(newRece)
        }))
        .catch((error)=> console.log(error))

    },[])
  return (
    <div>
      {randomRecipe &&(
      <div>
        <div className="recipediv">
            <img className="recipeImage" src={randomRecipe.image} />
            <br />
            <div className="divnamdetail">
              <h1 className="randomRecipename">{randomRecipe.name}</h1>
              <br />
              <h2 className="center">Cuisine : {randomRecipe.cuisine}</h2>
              <br />
              <span>
                {" "}
                <h2>Ingredients :</h2>
                {randomRecipe.ingredients}
              </span>

              <br />
              <p className="par">
                {" "}
                <h2>Instructions :</h2>
                {randomRecipe.instructions}
              </p>
            </div>
            <br />
            <div className="btnrecipe">
            <Link to={`/recipe/edit/${randomRecipe.id}`}>
              <button className="btn">Edit recipe</button>
            </Link>
          </div>
          </div>
            </div>
      )

      }




    </div>
  )
}

export default RandomRecipe
