import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/common/Header/SearchBar"

const Header = () => {
    return (
        <>
            <div className="bg-[#0F172A]">
                <div className="px-20 container mx-auto py-6">
                    <div className="flex">
                        <div className="w-1/6">
                            <Link href='/'>
                                <Image src="/img/logo/logo.png" alt="logo" width={125} height={25} />
                            </Link>
                        </div>
                        <div className="w-4/6">
                            <SearchBar />
                        </div>
                        <div className="w-1/6 flex gap-4 justify-end">
                            <Link href='/cart' className="relative">
                                <span className="bg-red-500 rounded-full w-5 h-5 text-sm flex justify-center items-center absolute left-4">12</span>
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

            </div>
        </>
    )
}

export default Header