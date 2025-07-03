'use client'

import { removeAllCart, removeFromCart, updateQuantity } from "@/lib/features/cart";
import { RootState } from "@/lib/store/store";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@/components/ui/Checkbox";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import QuantitySelector from "../ui/QuantitySelector";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const [agree, setAgree] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const handleRemove = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const removeAll = () => {
        dispatch(removeAllCart());
    };

    if (!hasMounted) return null;

    return (
        <div className="px-20 container mx-auto">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 bg-white  p-6 rounded-sm">
                    {cartItems.length === 0 ? (
                        <h2 className="flex justify-center items-center w-full h-full text-4xl">Your cart is empty.</h2>
                    ) : (
                        <>
                            <div className="flex items-center justify-between">
                                <h2 className="text-[#0F172A] text-3xl font-semibold">My Cart ({cartCount})</h2>
                                <div className="flex items-center gap-4 text-[#475569]">
                                    <Checkbox
                                        id="terms"
                                        label="Select All"
                                        checked={agree}
                                        onChange={(val) => setAgree(val)}
                                    />
                                    <button onClick={removeAll}
                                        disabled={agree == false} className={`border-none outline-none ${agree == false
                                            ? "text-gray-400 cursor-not-allowed"
                                            : "text-red-500 hover:text-red-700"
                                            }`}>
                                        Clear All
                                    </button>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="border-b pb-4">
                                        <div className="flex gap-4">
                                            <Image src={item.image} alt={item.name} width={150} height={150} priority className="object-cover" />
                                            <div className="flex-1">
                                                <div className="flex item-center justify-between  mb-8">
                                                    <h6 className="font-semibold text-lg text-[#0F172A]">{item.name}</h6>
                                                    <h5 className="text-xl font-bold text-gray-700">৳ {item.price * item.quantity}</h5>
                                                </div>
                                                <div className="flex item-center gap-4">
                                                    <QuantitySelector value={cartCount} onChange={(val) => dispatch(updateQuantity({ id: item.id, quantity: val }))} />
                                                    <button
                                                        onClick={() => handleRemove(item.id)}
                                                        className='font-semibold cursor-pointer'
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
                <div className="col-span-4 bg-white  p-6 rounded-sm">
                    <h3 className="text-2xl mb-4">Order summary</h3>
                    <div className="flex justify-between font-semibold text-[#475569] mb-4">
                        <span>Price ({cartCount} items)</span>
                        <span>{cartCount * totalPrice}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[#475569] mb-4">
                        <span>Shipping fee</span>
                        <span className="text-[#3B82F6] text-sm">To be added</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[#475569] mb-4">
                        <span>Sub Total </span>
                        <span>{cartCount * totalPrice}</span>
                    </div>
                    <Button disabled={cartItems.length === 0} className={`w-full rounded-sm ${cartItems.length === 0 ? 'cursor-not-allowed!' : 'cursor-pointer'}`}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
