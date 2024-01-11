import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/Bacon.png';
import saladImage from '../../assets/Salad.png';
import meatImage from '../../assets/meat.png';

interface Ingredient {
    name: string;
    price: number;
    image: string;
}

 const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', Price: 80, image: meatImage},
    {name: 'Bacon', price: 60, image: baconImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage}
]

export default INGREDIENTS;