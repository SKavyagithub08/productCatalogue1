export default function ProductDetail({ product }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-12">
      <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
        <img src={product.image} alt={product.title} className="h-80 object-contain" />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-3 text-gray-800">{product.title}</h1>
        <p className="text-sm text-gray-500 capitalize mb-1">{product.category}</p>
        <p className="text-xl font-semibold text-indigo-600 mb-4">${product.price}</p>
        <p className="text-sm text-gray-700 mb-4">{product.description}</p>
        <div className="flex items-center gap-2 text-yellow-500 font-medium">
          ⭐ {product.rating.rate} / 5
          <span className="text-gray-500 text-sm">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
}
