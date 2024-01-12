import './Burger.css'
import meatImage from "./assets/meat.png";
import baconImage from "./assets/Bacon.png";
import cheeseImage from "./assets/cheese.png";
import saladImage from "./assets/Salad.png";
import {useState} from "react";
import {BurgerProps, Ingredient} from "./components/Burger/types";


function App() {


    const INGREDIENTS: Ingredient[] = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Bacon', price: 60, image: baconImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Salad', price: 10, image: saladImage}
    ]


    const [ingredients, setIngredients] = useState<Ingredient[]>(INGREDIENTS);
    const [burgerIngredients, setBurgerIngredients] = useState<BurgerProps[]>([])

    const onAddIngredient = (index: number) => {
        setBurgerIngredients((prevState) => {
            const ingredientName = ingredients[index].name;

            const existIngredient = prevState.filter((ingredient) => ingredient.name === ingredientName);

            if (existIngredient.length > 0) {
                return prevState.map((ingredient) =>
                    ingredient.name === ingredientName ? {...ingredient, count: ingredient.count + 1} : ingredient
                );
            }
        });
    }


    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <div className="Salad"></div>
            <div className="Cheese"></div>
            <div className="Meat"></div>
            <div className="BreadBottom"></div>
        </div>
    )
}

export default App;

