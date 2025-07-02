import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/common/Header/SearchBar"

const Header = () => {
    return (
        <>
            <div className="bg-[#0F172A]">
                <div className="px-20 container mx-auto py-6">
                    <div className="flex items-center">
                        <div className="w-1/6">
                            <Link href='/'>
                                <Image src="/img/logo/logo.png" alt="logo" width={125} height={25} />
                            </Link>
                        </div>
                        <div className="w-4/6">
                            <SearchBar />
                        </div>
                        <div className="w-1/6 flex gap-5 justify-end">
                            <Link href='/cart' className="relative">
                                <span className="bg-[#EF4444] text-white rounded-full w-5 h-5 text-sm flex justify-center items-center absolute left-4">12</span>
                                <Image src='/img/icons/cart.png' width={32} height={32} alt="cart_icon" />
                            </Link>
                            <Link href='/cart'>
                                <Image src='/img/icons/profile.png' width={32} height={32} alt="cart_icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="px-20 container mx-auto py-2">
                    <div className="flex">
                        <div className="w-1/6">
                            <h6 className="flex gap-2 font-semibold">
                                <Image src='/img/icons/menu.png' width={16} height={16} alt="menu_icon" />
                                <span>Categories</span>
                            </h6>
                        </div>
                        <div className="w-3/6">
                            <ul className="flex gap-5 text-sm text-[#0F172A]">
                                <li>Electronics</li>
                                <li>
                                    Home Appliances
                                </li>
                                <li>
                                    Mother & Baby
                                </li>
                                <li>
                                    Automotive
                                </li>
                                <li>
                                    Sports Gear
                                </li>
                            </ul>
                        </div>
                        <div className="w-2/6 flex gap-4 justify-end">
                            <ul className="text-xs flex gap-3 items-center justify-end text-[#0F172A]">
                                <li className="flex gap-2">
                                    <Image className="shrink-0" src='/img/icons/track.png' alt="track_icon" width={12} height={12} />
                                    <span>TRACK ORDER</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image className="shrink-0" src='/img/icons/support.png' alt="track_icon" width={12} height={12} />
                                    <span>HELP CENTER</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image className="shrink-0" src='/img/icons/sell.png' alt="track_icon" width={12} height={12} />
                                    <span>SELL WITH US</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header