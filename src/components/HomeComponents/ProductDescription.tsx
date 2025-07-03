import { ApiResponse } from "@/types";
import Image from "next/image"
import { FC } from "react";


const ProductDescription: FC<{ product: ApiResponse }> = ({ product }) => {

    const { description } = product.data;

    return (
        <div className="px-20 container mx-auto">
            <div className="max-w-6xl bg-white  p-6 rounded-sm">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="from-[#475569] to-[#47556980] bg-linear-to-b bg-clip-text text-transparent">
                    {description}
                </p>
                <button className="w-32 mt-8 flex items-center justify-center gap-2 mx-auto cursor-pointer">
                    <span>See More</span>
                    <Image src='/img/icons/down.png' width={12} height={7} alt="down_icon" />
                </button>
            </div>
        </div>
    )
}

export default ProductDescription