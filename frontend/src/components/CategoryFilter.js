import React from "react";
import { Button } from "styledElements/Buttons";
import { useDispatch } from "react-redux";

export const CategoryFilter = () => {
    dispatch = useDispatch()

    const onCategoryClick = (category) => {
        dispatch()
    }
    return (
        <>
        <Button onClick={() => onCategoryClick("Instrument")}>Instruments</Button>
        <Button onClick={() => onCategoryClick("Vehicle")}>Vehicles</Button>
        <Button onClick={() => onCategoryClick("Clothing")}>Clothing</Button>
        <Button onClick={() => onCategoryClick("Electronics")}>Electronics</Button>
        <Button onClick={() => onCategoryClick("Art")}>Art</Button>
        <Button onClick={() => onCategoryClick("Toys")}>Toys</Button>

</>
    )
}