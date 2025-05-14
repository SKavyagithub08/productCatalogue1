// src/components/ProductCard.js
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <Link href={`/product/${product.id}`}>
            <div className="cursor-pointer">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-48 object-contain mb-4"
                    />

                    <div className="flex-1">
                        <h3 className="text-md font-semibold mb-2 text-gray-800 truncate">
                            {product.title}
                        </h3>
                        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                    </div>
                </div>
            </div>
        </Link >
  );
}

