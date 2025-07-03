import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/common/Header/SearchBar"
import CartCount from "@/components/common/Header/CartCount"

const Header = () => {
    return (
        <>
            <div className="bg-[#0F172A]">
                <div className="px-20 container mx-auto py-6">
                    <div className="flex items-center">
                        <div className="w-1/6">
                            <Link href='/'>
                                <Image src="/img/logo/logo.png" alt="logo" width={125} height={23} />
                            </Link>
                        </div>
                        <div className="w-4/6">
                            <SearchBar />
                        </div>
                        <div className="w-1/6 flex gap-5 justify-end">
                            <CartCount />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="px-20 container mx-auto py-2">
                    <div className="flex">
                        <div className="w-1/6">
                            <h6 className="flex gap-2 font-semibold">
                                <Image src='/img/icons/menu.png' width={16} height={24} alt="menu_icon" />
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
                                    <Image className="shrink-0" src='/img/icons/track.png' alt="track_icon" width={12} height={16} />
                                    <span>TRACK ORDER</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image className="shrink-0" src='/img/icons/support.png' alt="track_icon" width={12} height={16} />
                                    <span>HELP CENTER</span>
                                </li>
                                <li className="flex gap-2">
                                    <Image className="shrink-0" src='/img/icons/sell.png' alt="track_icon" width={12} height={16} />
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