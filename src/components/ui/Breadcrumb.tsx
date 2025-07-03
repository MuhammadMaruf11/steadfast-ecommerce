import Image from "next/image";
import Link from "next/link";

interface Crumb {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: Crumb[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="text-sm text-[#0F172A] flex items-center space-x-1 container mx-auto px-20 py-3">
            {items.map((item, index) => (
                <div className="flex items-center space-x-1" key={index}>
                    {index > 0 && <Image src='/img/icons/right.png' width={5} height={9} alt="right_icon" />}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:underline hover:text-blue-600 transition "
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-[#475569]">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
