export default function ProductsSection() {
  const products = [
    "Coffee Table", "Wood Chair", "Proper Cupboard", "Big Sofa",
    "Twin Sofa", "Mini Kitchen", "Kids Corner Desk", "Round Table"
  ];

  return (
    <section className="py-16 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((name, i) => (
          <div key={i} className="border p-4 rounded-lg hover:shadow-lg">
            <img src={`https://via.placeholder.com/200x150?text=${encodeURIComponent(name)}`} alt={name} className="mx-auto mb-4"/>
            <h3 className="font-semibold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
