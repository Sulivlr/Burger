import './Burger.css'
import meatImage from "./assets/meat.png";
import baconImage from "./assets/Bacon.png";
import cheeseImage from "./assets/cheese.png";
import saladImage from "./assets/Salad.png";
import {useState} from "react";
import {BurgerProps, Ingredient} from "./components/Burger/types";
import Burger from "./components/Burger/BurgerIngredients.tsx";


function Ingredient(props: { onAddIngredient: () => void, image: string, price: number, name: string }) {
    return null;
}

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
            setBurgerIngredients(prevState);
        });
    };

    const onRemoveIngredient = (index: number) => {
        const newIngredient = [...burgerIngredients];
        newIngredient[index].count++
    }
    const burgerPrice = 30
    const sumBurgerPrice = () => {
        let totalPrice = burgerPrice;

        burgerIngredients.forEach((ingredient) => {
            const installIngredient = ingredients.filter((item) => item.name === ingredient.name)[0];
            if (installIngredient) {
                totalPrice += installIngredient.price * ingredient.count;
            }
        });
        return totalPrice;
    }


    return (
        <div className="app">
            <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        name={ingredient.name}
                        price={ingredient.price}
                        image={ingredient.image}
                        onAddIngredient={() => onAddIngredient(index)}
                    />
                ))}
            </div>
            <Burger ingredients={burgerIngredients} onRemoveIngredient={onRemoveIngredient(1)}/>
            <div className="total-price">Общая стоимость: {sumBurgerPrice()}</div>
        </div>
    );
}

export default App;

