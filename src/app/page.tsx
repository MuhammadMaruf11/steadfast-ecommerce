import ProductDescription from "@/components/HomeComponents/ProductDescription";
import ProductDetails from "@/components/HomeComponents/ProductDetails";
import Breadcrumb from "@/components/ui/Breadcrumb";

async function getProductDetails() {
  const response = await fetch('http://157.230.240.97:9999/api/v1/product/iphone-15-plus', {
    cache: 'force-cache'
  })
  if (!response.ok) throw new Error('Failed to fetch product')
  return response.json()
}

export default async function Home() {
  const product = await getProductDetails();
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
        <ProductDetails product={product} />
      </section>
      <section className="bg-[#E2E8F0] py-4">
        <ProductDescription product={product} />
      </section>
    </>
  );
}
