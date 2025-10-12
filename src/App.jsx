import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="flex flex-col md:flex-row justify-between bg-gray-100 p-4">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
            <li>
              <a href="#" className="hover:underline">  
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
          <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full h-auto"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full h-auto"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full h-auto"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full h-auto"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full h-auto"
            />
            <img
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full h-auto"
            />
        </div>
        <hr className="my-4 "/>
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-200 p-6 rounded shadow-sm">
          <div className="font-medium">Basic</div>
          <div>Rp 50.000</div>
        </div>

        <div className="bg-blue-100 p-6 rounded shadow-md">
          <div className="font-medium">Pro</div>
          <div>Rp 100.000</div>
        </div>

        <div className="bg-gray-200 p-6 rounded shadow-sm">
          <div className="font-medium">Premium</div>
          <div>Rp 200.000</div>
        </div>
      </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen gap-1">
          {/* Header */}
          <header className="bg-gray-300 p-4 md:col-span-4 text-center md:text-left">
            Header
          </header>

          {/* Sidebar */}
          <aside className="bg-gray-200 p-4 md:col-span-1">
            Sidebar
          </aside>

          {/* Content */}
          <main className="bg-white p-4 border md:col-span-3">
            Content
          </main>

          {/* Footer */}
          <footer className="bg-gray-300 p-4 md:col-span-4 text-center">
            Footer
          </footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border flex flex-col items-center gap-2 sm:flex-row sm:items-center">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
