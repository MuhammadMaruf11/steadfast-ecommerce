import Image from "next/image"
import Link from "next/link"
import QuantitySelector from "@/components/ui/QuantitySelector"
import { FC } from 'react';
import { ApiResponse } from "@/types";
import AddToCart from "@/components/HomeComponents/AddToCart";

const ProductDetails: FC<{ product: ApiResponse }> = ({ product }) => {
    const { thumbnail, name, product_detail, variations, rating_avg } = product.data;

    return (
        <div className="container mx-auto py-6 px-20">
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <div className="mb-4">
                        <Image priority
                            src={thumbnail}
                            width={380}
                            height={380}
                            alt="main_product"
                            className="rounded-lg"
                        />
                    </div>
                    <ul className="flex gap-1">
                        {variations?.map((item, index) => {
                            const { image } = item
                            return (
                                <li key={index}>
                                    <Image priority src={image} width={68} height={68} alt="product" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-span-5">
                    <div className="mb-4 max-w-[500px] font-medium">
                        <h2 className="text-xl">{name}</h2>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <p>{rating_avg}</p>
                            <ul className="flex gap-1">
                                <li>
                                    <Image priority src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image priority src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image priority src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image priority src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image priority src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                            </ul>
                            <p>2,254</p>
                            <Image priority className="shrink-0" src='/img/icons/down.png' width={12} height={7} alt="down_icon" />
                        </div>
                        <ul className="flex gap-3">
                            <li>
                                <Link href='/'>
                                    <Image priority src='/img/icons/favorite.png' width={30} height={30} alt="favorite_icon" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <Image priority src='/img/icons/share.png' width={30} height={30} alt="Share_icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="flex items-start gap-4">
                            <span className="text-[#00A788] text-2xl font-semibold">{product_detail?.discount_price}</span>
                            <span className="text-[#94A3B8]">{product_detail.regular_price}</span>
                        </h3>
                    </div>
                    <div className="flex gap-2 items-center mb-4">
                        <p className="text-sm text-[#475569]">Promotion</p>
                        <Image priority className="shrink-0" src='/img/symbol/promotion.png' width={154} height={25} alt="symbol" />
                    </div>
                    <h6 className="font-medium mb-2">
                        <span className="text-[#475569]">Available Color:</span>
                        <span className="text-[#171717]"> Navy Blue</span>
                    </h6>
                    <ul className="flex gap-1 mb-4">
                        {variations?.map((item, index) => {
                            const { image } = item
                            return (
                                <li key={index}>
                                    <Image priority src={image} width={56} height={56} alt="product" />
                                </li>
                            )
                        })}
                    </ul>
                    <h6 className="font-medium">
                        <span className="text-[#475569] mb-2">Select Size: </span>
                        <span className="text-[#171717]"> XS</span>
                    </h6>
                    <ul className="flex gap-3 mb-4">
                        <li className="flex items-center justify-center border border-[#E2E8F0] rounded-sm w-10 h-10 cursor-pointer">
                            XL
                        </li>
                        <li className="flex items-center justify-center border border-[#E2E8F0] rounded-sm w-10 h-10 cursor-pointer">
                            XS
                        </li>
                        <li className="flex items-center justify-center border border-[#E2E8F0] rounded-sm w-10 h-10 cursor-pointer">
                            S
                        </li>
                        <li className="flex items-center justify-center border border-[#E2E8F0] rounded-sm w-10 h-10 cursor-pointer">
                            M
                        </li>
                        <li className="flex items-center justify-center border border-[#E2E8F0] rounded-sm w-10 h-10 cursor-pointer">
                            L
                        </li>
                    </ul>
                    <h6 className="font-medium text-[#171717] mb-2">
                        Quantity
                    </h6>
                    <QuantitySelector />
                    <AddToCart product={product} />
                </div>
                <div className="col-span-3"></div>
            </div>
        </div>
    )
}

export default ProductDetails