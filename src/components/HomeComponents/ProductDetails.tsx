import Image from "next/image"
import Link from "next/link"

const ProductDetails = () => {
    return (
        <div className="container mx-auto py-6 px-20">
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <div className="mb-4">
                        <Image src='/img/products/main.png' width={380} height={380} alt="main_product" />
                    </div>
                    <ul className="flex gap-2">
                        <li>
                            <Image src='/img/products/sub.png' width={68} height={68} alt="sub_product" />
                        </li>
                        <li>
                            <Image src='/img/products/sub.png' width={68} height={68} alt="sub_product" />
                        </li>
                        <li>
                            <Image src='/img/products/sub.png' width={68} height={68} alt="sub_product" />
                        </li>
                        <li>
                            <Image src='/img/products/sub.png' width={68} height={68} alt="sub_product" />
                        </li>
                        <li>
                            <Image src='/img/products/sub.png' width={68} height={68} alt="sub_product" />
                        </li>
                    </ul>
                </div>
                <div className="col-span-5">
                    <div className="mb-4 max-w-[500px] font-medium">
                        <h2 className="text-xl">Men&apos;s Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt.</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <p>4.7</p>
                            <ul className="flex gap-1">
                                <li>
                                    <Image src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                                <li>
                                    <Image src='/img/icons/star.png' width={16} height={16} alt="star_icon" />
                                </li>
                            </ul>
                            <p>2,254</p>
                            <Image className="shrink-0" src='/img/icons/down.png' width={12} height={6} alt="down_icon" />
                        </div>
                        <ul className="flex gap-3">
                            <li>
                                <Link href='/'>
                                    <Image src='/img/icons/favorite.png' width={30} height={30} alt="favorite_icon" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <Image src='/img/icons/share.png' width={30} height={30} alt="Share_icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="flex items-start gap-4">
                            <span className="text-[#00A788] text-2xl font-semibold">৳1,139.33</span>
                            <span className="text-[#94A3B8]">৳1500</span>
                        </h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-[#475569]">Promotion</p>
                        <Image className="shrink-0" src='/img/symbol/promotion.png' width={154} height={25} alt="symbol" />
                    </div>
                    <h6 className="font-medium">
                        <span className="text-[#475569]">Available Color:</span>
                        <span className="text-[#171717]"> Navy Blue</span>
                    </h6>
                    <ul className="flex gap-3">
                        <li>
                            <Image className="" src='/img/products/img-1.png' width={56} height={56} alt="product" />
                        </li>
                        <li>
                            <Image className="" src='/img/products/img-2.png' width={56} height={56} alt="product" />
                        </li>
                        <li>
                            <Image className="" src='/img/products/img-3.png' width={56} height={56} alt="product" />
                        </li>
                        <li>
                            <Image className="" src='/img/products/img-4.png' width={56} height={56} alt="product" />
                        </li>
                    </ul>
                    <h6 className="font-medium">
                        <span className="text-[#475569]">Select Size: </span>
                        <span className="text-[#171717]"> XS</span>
                    </h6>
                    <ul className="flex gap-3">
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
                    <h6 className="font-medium text-[#171717]">
                        Quantity
                    </h6>
                </div>
                <div className="col-span-3"></div>
            </div>
        </div>
    )
}

export default ProductDetails