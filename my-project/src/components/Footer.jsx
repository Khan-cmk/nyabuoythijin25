export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <p>© 2025 wefurn. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
