export default function NewsletterSection() {
  return (
    <section className="bg-emerald-900 text-white py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Get more discount off your order</h2>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
        />
        <button className="bg-emerald-700 px-6 py-2 rounded-r-md hover:bg-emerald-800">
          Subscribe
        </button>
      </div>
    </section>
  );
}
