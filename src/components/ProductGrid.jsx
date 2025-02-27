import { useState, useMemo, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "../styles/productgrid.css";

const ProductGrid = ({ products = [], addToCart = () => {}, cart = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAddToCart = (product) => {
    if (typeof addToCart === "function") {
      console.log("Product added:", product); // Debugging log
      addToCart(product);
    } else {
      console.error("addToCart is not a function");
    }
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "all" || product.category === category) &&
        (priceRange === "all" || (
          priceRange === "low" ? product.price < 50 :
          priceRange === "medium" ? product.price >= 50 && product.price <= 100 :
          priceRange === "high" ? product.price > 100 : true
        ))
      )
      .sort((a, b) => 
        sortBy === "newest" ? new Date(b.dateAdded) - new Date(a.dateAdded) :
        sortBy === "lowest" ? a.price - b.price :
        sortBy === "highest" ? b.price - a.price : 0
      );
  }, [products, searchTerm, category, priceRange, sortBy]);

  // Calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="filters-container text-center mb-3">
        <input
          type="text"
          className="form-control w-25 d-inline-block mx-2"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search products"
        />

        <select
          className="form-control w-25 d-inline-block mx-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="all">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Grains and Flours">Grains and Flours</option>
          <option value="Legumes">Legumes</option>
          <option value="Oils">Oils</option>
          <option value="Spices and Seasonings">Spices and Seasonings</option>
          <option value="Snacks">Snacks</option>
          <option value="Beverages">Beverages</option>
          <option value="Cleaning Supplies">Cleaning Supplies</option>
          <option value="Personal Care">Personal Care</option>
        </select>

        <select
          className="form-control w-25 d-inline-block mx-2"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          aria-label="Filter by price range"
        >
          <option value="all">All Prices</option>
          <option value="low">Below kes50</option>
          <option value="medium">kes50 - kes100</option>
          <option value="high"> Above kes100</option>
        </select>

        <select
          className="form-control w-25 d-inline-block mx-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort products"
        >
          <option value="newest">Newest First</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
        </select>
      </div>

      {/* Product Cards Grid */}
      <div className="row mt-4 products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card product-card">
                <div className="image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="price">${product.price}</p>

                  {/* Rating Stars */}
                  <div className="rating">
                    {[...Array(5)].map((_, index) =>
                      index < product.rating ? (
                        <FaStar key={index} className="star filled" />
                      ) : (
                        <FaRegStar key={index} className="star" />
                      )
                    )}
                  </div>

                  <button
                    className="btn btn-success mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="view-details"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-3">No products match the selected filters.</p>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              X
            </button>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <p><strong>Price:</strong> kes{selectedProduct.price}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>

            {/* User Ratings & Reviews */}
            <h4>User Ratings & Reviews</h4>
            {selectedProduct.reviews.length > 0 ? (
              selectedProduct.reviews.map((review, index) => (
                <div key={index} className="review">
                  <p><strong>{review.user}:</strong> {review.comment}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) =>
                      i < review.rating ? (
                        <FaStar key={i} className="star filled" />
                      ) : (
                        <FaRegStar key={i} className="star" />
                      )
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;