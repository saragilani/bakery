import { useState } from "react";
import CakeRecipe from "../components/CakeRecipe";

// const [victoriaSponge, setVictoriaSpongeRecipe] = useState(0);
// const [teaLoaf, setTeaLoafRecipe] = useState(0);
// const [carrotCake, setCarrotCakeRecipe] = useState(0);
//const recipes = ["Victoria Sponge = [ingredients, price, rating]"];

const RecipeContainer = () => {

    const [victoriaSponge, setVictoriaSponge] = useState(
        {
            cakeName : "Victoria Sponge",
               ingredients: [
                   "eggs",
                  "butter",
                  "sugar",
                  "self-raising flour",
                  "baking powder",
                  "milk"
              ],
              price: 5,
               rating: 5
        });

    const [TeaLoaf, setTeaLoaf] = useState ( {
            cakeName : "Tea Loaf",
            ingredients: [
                "eggs",
               "oil",
               "dried fruit",
               "sugar",
               "self-raising flour",
               "strong tea",
           ],
           price: 2,
           rating: 3
        });
        
    const [carrotCake, setCarrotCake] = useState ( {
            cakeName: "Carrot Cake",
              ingredients: [
               "carrots",
                 "walnuts",
                 "oil",
                 "cream cheese",
                 "flour",
                 "sugar",
              ],
              price: 8,
              rating: 4
        } 
        );


    return(

        <>
        
            <h2>Cake Recipes:</h2>
            <CakeRecipe cake={victoriaSponge}/>
            <CakeRecipe cake={TeaLoaf}/>
            <CakeRecipe cake={carrotCake} />
                
            <p>Average rating: 
                {(victoriaSponge.rating+TeaLoaf.rating+carrotCake.rating)/3}
            </p>
        </>



    )


}





export default RecipeContainer;
