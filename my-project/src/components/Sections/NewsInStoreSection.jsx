export default function NewInStoreSection() {
    const items = [
        {
            title: "Sofa",
            img: "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?auto=format&fit=crop&q=60&w=500"
        },
        {
            title: "Chair",
            img: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?auto=format&fit=crop&q=60&w=500"
        },
        {
            title: "Cupboard",
            img: "https://plus.unsplash.com/premium_photo-1674773520163-c93eeb8cc2f7?auto=format&fit=crop&q=60&w=500"
        },
        {
            title: "Lamp",
            img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=60&w=500"
        },
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
