const CakeRecipe = ({cake}) => {

    const handleDisplayRecipes = () => {

    }

    const ingredientsList = cake.ingredients.map ((ingredient) => {
        return <li>{ingredient}</li>
    });

    return (

        <div class="cake">
              <h2>{cake.cakeName}</h2>

                <h3>Ingredients:</h3>
                    <ul> {ingredientsList}</ul>
        
                <p>Price: {cake.price}</p>
                <p>Rating: {cake.rating}</p>
        </div>
    )
}

export default CakeRecipe;