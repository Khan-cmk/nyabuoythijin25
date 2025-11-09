export default function NewInStoreSection() {
  const items = [
    { title: "Sofa", img: "https://via.placeholder.com/300x200" },
    { title: "Chair", img: "https://via.placeholder.com/300x200" },
    { title: "Cupboard", img: "https://via.placeholder.com/300x200" },
    { title: "Lamp", img: "https://via.placeholder.com/300x200" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">New In Store Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
