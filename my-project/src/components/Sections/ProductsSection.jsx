 export default function ProductsSection() {
  const products = [
    {
      name: "Big Sofa",
      img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=60&w=500"
    },
    // add more products here with their image URLs
    {
      name: "Coffee Table",
      img: "https://images.unsplash.com/photo-1760163178873-7644a924519e?auto=format&fit=crop&q=60&w=500"
    },
    {
      name: "Wood Chair",
      img: "https://images.unsplash.com/photo-1699588772787-1eed3b726e0a?auto=format&fit=crop&q=60&w=500"
    },
    {
      name: "Proper Cupboard",
      img: "https://images.unsplash.com/photo-1556908221-f685cdb3b0ea?auto=format&fit=crop&q=60&w=500"
    },
   {
      name: "Twin Sofa",
      img: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=60&w=500"
    },
   {
      name: "Mini Kitchen",
      img: "https://plus.unsplash.com/premium_photo-1727183904698-7a7963066170?auto=format&fit=crop&q=60&w=500"
    },
   {
      name: "Kids Corner Desk",
      img: "https://plus.unsplash.com/premium_photo-1684173662116-0e66b542774b?auto=format&fit=crop&q=60&w=500"
    },
  {
      name: "Round Table",
      img: "https://plus.unsplash.com/premium_photo-1663036940561-269d1682803f?auto=format&fit=crop&q=60&w=500"
    },
  ];

  return (
    <section className="py-16 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="border p-4 rounded-lg hover:shadow-lg transition">
            <img
              src={p.img}
              alt={p.name}
              className="mx-auto mb-4 w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-semibold">{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
