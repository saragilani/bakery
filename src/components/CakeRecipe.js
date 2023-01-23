const CakeRecipe = ({cake}) => {

    const handleDisplayRecipes = () => {

    }

    return (

        <div class="cake">
              <h3>{cake.cakeName}</h3>

                <h2>Ingredients:</h2>
                    <ul> {cake.ingredients}</ul>
        
                <p>Price: {cake.price}</p>
                <p>Rating: {cake.rating}</p>
        </div>
    )
}

export default CakeRecipe;