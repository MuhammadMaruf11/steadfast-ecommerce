import CartComponents from "@/components/CartComponents/CartComponents"
import Breadcrumb from "@/components/ui/Breadcrumb";

const Cart = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "My Cart", },
    ];
    return (
        <>
            <section className="bg-[#E2E8F0]">
                <Breadcrumb items={breadcrumbItems} />
            </section>
            <section className="bg-[#E2E8F0] pb-32">
                <CartComponents />
            </section>
        </>
    )
}

export default Cart