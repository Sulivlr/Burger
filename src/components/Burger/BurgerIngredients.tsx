import React from 'react';

interface BurgerProps {
    ingredients: {
        map(element: (ingredient: any,
                      index: any) => React.JSX.Element): React.ReactNode;
        name: string;
        count: number;
    };

    onRemoveIngredient: (id: number) => void;
}

const Burger: React.FC<BurgerProps> = ({
                                           ingredients,
                                           onRemoveIngredient
                                       }) => {
    return (
        <div className="burger">
            {ingredients.map((ingredient, index) => (
                <div key={index} className="burger-ingredient">
                    <span>{ingredient.name}</span>
                    <button onClick={() => onRemoveIngredient(index)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Burger