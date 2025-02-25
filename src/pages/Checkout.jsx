import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-green-600">Checkout Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;