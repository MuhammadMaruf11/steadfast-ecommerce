'use client'

import { addToCart } from "@/lib/features/cart";
import { ApiResponse } from "@/types";
import { FC } from "react";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";

const AddToCart: FC<{ product: ApiResponse }> = ({ product }) => {
    const { id, thumbnail, name, product_detail } = product.data;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {
            id: id.toString(),
            name: name,
            price: parseFloat(product_detail.discount_price || product_detail.regular_price),
            quantity: 1,
            image: thumbnail,
        };

        dispatch(addToCart(cartItem));
    };

    return (
        <Button onClick={handleAddToCart} className="w-94 h-12 rounded-sm  mt-4">Add to Cart</Button>
    )
}

export default AddToCart