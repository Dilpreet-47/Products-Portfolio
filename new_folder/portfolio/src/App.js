import React from "react";

const App = () => {
  return (
    <div className="flex flex-col mt-4 bg-rose-100">
      <header className="flex gap-4  items-center">
        <div className="m-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s"
            alt="Poonam Beauty Center Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <nav className="flex w-full">
          <ul className="flex gap-4 items-center justify-evenly w-full">
            <li>
              <a className="hover:border-b-2 border-blue-500 px-2 py-1" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-blue-500 px-2 py-1" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-blue-500 px-2 py-1" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-blue-500 px-2 py-1" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-blue-500 px-2 py-1" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mt-4 flex flex-col gap-12">
        <section className="w-full">
          <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s')] bg-cover bg-center w-full h-200 flex flex-col items-center justify-center text-white text-2xl gap-10">
            <h1 className="font-bold text-3xl text-center">
              Welcome to Poonam Beauty Center
            </h1>
            <p className="text-sm text-center max-w-xl">
              Our Motto is to bring you the luxury experience you deserve at prices that are truly affordable.
            </p>
            <a
              href="#services"
              className="text-sm rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 transition"
            >
              Explore Our Services
            </a>
          </div>
        </section>
        <section className="w-full m-4">
          <div className="flex flex-col gap-6 w-full items-center max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold">About Us</h2>
            <p className="text-center">
              At Poonam Beauty Center, our motto is to bring luxurious beauty products within everyone's reach, always at affordable prices. We stand by our commitment to uncompromising quality and exceptional affordability. Our shop offers a curated selection of premium beauty products, meticulously chosen to meet and surpass your expectations. We believe everyone deserves to experience the joy of high-quality beauty, and we're dedicated to delivering just that. We use only the finest products to ensure your complete satisfaction.
            </p>
          </div>
        </section>
        <section className="w-full m-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-4">Products</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4">
                <h3 className="font-medium">Skincare</h3>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4">
                <h3 className="font-medium">Haircare</h3>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4">
                <h3 className="font-medium">Makeup</h3>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4">
                <h3 className="font-medium">Nail Care</h3>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4">
                <h3 className="font-medium">Fragrance</h3>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4">
                <h3 className="font-medium">Bath &amp; Body Parts</h3>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded-lg py-4 col-span-2">
                <h3 className="font-medium">Men Groom</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col m-4 ">
          <div>
            <h2 className="font-semibold text-4xl">Get In Touch With Us:</h2>
            <div className="flex w-[50%] ">
              <div className="flex flex-col p-4 gap-4">
                <div className="group inline-block mt-10 ml-10">
                  <div className="w-10 h-10 border-2 border-blue-500 flex items-center justify-center transition-transform duration-300 transform rotate-45 group-hover:rotate-0 bg-white">
                    <i className="fa-solid fa-phone text-blue-500 text-xl transition-transform duration-300 transform -rotate-45 group-hover:rotate-0 "></i>
                  </div>
                </div>
                <p>Phone Number</p>
                <p>29384792347</p>
              </div>
              <div className="flex flex-col p-4 gap-4">
                <div className="group inline-block mt-10 ml-10">
                  <div className="w-10 h-10 border-2 border-blue-500 flex items-center justify-center transition-transform duration-300 transform rotate-45 group-hover:rotate-0 bg-white">
                    <i className="fa-solid fa-phone text-blue-500 text-xl transition-transform duration-300 transform -rotate-45 group-hover:rotate-0 "></i>
                  </div>
                </div>
                <p>Phone Number</p>
                <p>29384792347</p>
              </div>
              <div className="flex flex-col p-4 gap-4">
                <div className="group inline-block mt-10 ml-10">
                  <div className="w-10 h-10 border-2 border-blue-500 flex items-center justify-center transition-transform duration-300 transform rotate-45 group-hover:rotate-0 bg-white">
                    <i className="fa-solid fa-phone text-blue-500 text-xl transition-transform duration-300 transform -rotate-45 group-hover:rotate-0 "></i>
                  </div>
                </div>
                <p>Phone Number</p>
                <p>29384792347</p>
              </div>

            </div>
          </div>
          <div>

          </div>
        </section>
      </main>

    </div>
  );
};

export default App;