'use client';

import { RootState } from "@/lib/store/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartCount = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <Link href='/cart' className="relative">
                {cartCount > 0 ? (
                    <span className="bg-[#EF4444] text-white rounded-full w-5 h-5 text-sm flex justify-center items-center absolute left-4 -top-2">
                        {cartCount}
                    </span>
                ) : <span className="bg-[#EF4444] text-white rounded-full w-5 h-5 text-sm flex justify-center items-center absolute left-4 -top-2">
                    0
                </span>}
                <Image src='/img/icons/cart.png' width={32} height={32} alt="cart_icon" />
            </Link>
            <Link href='/cart'>
                <Image src='/img/icons/profile.png' width={32} height={32} alt="cart_icon" />
            </Link>
        </>
    )
}

export default CartCount