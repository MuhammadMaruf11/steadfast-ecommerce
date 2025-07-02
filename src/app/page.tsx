import ProductDetails from "@/components/HomeComponents/ProductDetails";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function Home() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tops", href: "/tops" },
    { label: "T-Shirts", },
  ];
  return (
    <>
      <section className="bg-[#E2E8F0]">
        <Breadcrumb items={breadcrumbItems} />
      </section>
      <section className="bg-white">
        <ProductDetails />
      </section>
    </>
  );
}
