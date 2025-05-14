// src/app/product/[id]/page.js
import ProductDetail from "@/components/ProductDetail";

async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="text-center py-20 text-red-500">Product not found.</div>;
  }

  return <ProductDetail product={product} />;
}
