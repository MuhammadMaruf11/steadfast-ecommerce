import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white">
            <div className="container px-20 mx-auto pt-16 pb-12">
                <div className="grid grid-cols-4">
                    <div className="max-w-72">
                        <Link href='/'>
                            <Image src='/img/logo/logo.png' alt="logo" width={254} height={48} />
                        </Link>
                        <p className="my-4">Experience our new platform &  Enjoy exiting deals and offers on your day to day</p>
                        <ul className="space-y-4">
                            <li className="flex gap-2">
                                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                                    <Image src='/img/icons/location.png' className="" alt="location_icon" width={16} height={16} />
                                </span>
                                <span>falcon@gmail.com</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                                    <Image src='/img/icons/call.png' className="" alt="call_icon" width={16} height={16} />
                                </span>
                                <span>falcon@gmail.com</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                                    <Image src='/img/icons/mail.png' className="" alt="mail_icon" width={16} height={16} />
                                </span>
                                <span>falcon@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-48">
                        <h5 className="text-lg text-[#94A3B8] mb-3">ABOUT</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href='/'>Contact Us</Link>
                            </li>
                            <li>
                                <Link href='/'>About Us</Link>
                            </li>
                            <li>
                                <Link href='/'>Careers</Link>
                            </li>
                            <li>
                                <Link href='/'>Press</Link>
                            </li>
                            <li>
                                <Link href='/'>Cancellation & Returns</Link>
                            </li>
                            <li>
                                <Link href='/'>Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-48">
                        <h5 className="text-lg text-[#94A3B8] mb-3">HELP</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href='/'>Payments</Link>
                            </li>
                            <li>
                                <Link href='/'>Shipping</Link>
                            </li>
                            <li>
                                <Link href='/'>My Orders</Link>
                            </li>
                            <li>
                                <Link href='/'>FAQs</Link>
                            </li>
                            <li>
                                <Link href='/'>Terms of Use</Link>
                            </li>
                            <li>
                                <Link href='/'>Security</Link>
                            </li>
                            <li>
                                <Link href='/'>Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-48 ms-auto">
                        <h5 className="text-lg text-[#94A3B8] mb-3">Need Support?</h5>
                        <Image src='/img/symbol/support.png' width={170} height={41} alt="support_symbol" />
                        <h5 className="text-lg text-[#94A3B8] mb-3">DOWNLOAD APP?</h5>
                        <Image src='/img/symbol/google.png' width={180} height={55} alt="support_symbol" />
                        <Image src='/img/symbol/apple.png' width={180} height={55} alt="support_symbol" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center mt-9">
                        <p>Follow us on</p>
                        <ul className="flex gap-2">
                            <li>
                                <Link href='/' className="">
                                    <Image src='/img/icons/facebook.png' className="" alt="call_icon" width={32} height={33} />
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="">
                                    <Image src='/img/icons/instagram.png' className="" alt="call_icon" width={32} height={33} />
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="">
                                    <Image src='/img/icons/twitter.png' className="" alt="call_icon" width={32} height={33} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center mt-9">
                        <h5 className="text-lg text-[#94A3B8] mb-3">PAYMENTS ACCEPTED</h5>
                        <Image src='/img/logo/payment-logo.png' className="" alt="call_icon" width={373} height={67} />
                    </div>
                </div>
            </div>
            <hr className="text-[#ffffff20]" />
            <div className="container mx-auto py-7">
                <p className="text-center">Falcon ©2025. Design by xyz</p>
            </div>
        </footer>
    )
}

export default Footer