import React from "react";


interface Props {
    name: string;
    price: number;
    image: string;
    onAddIngredient: React.MouseEventHandler;
}

const Ingredient: React.FC<Props> = ({
                                         name,
                                         image,
                                         onAddIngredient
                                     }) => {
    return (
        <div className="ingredient">
            <img src={image} alt={name}/>
            <button onClick={onAddIngredient}>{name}</button>
        </div>
    );
};

export default Ingredient
