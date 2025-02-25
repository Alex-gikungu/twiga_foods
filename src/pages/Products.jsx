import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/products.css";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext"; // Import the CartContext

const products = [
  // Fresh Produce
  { id: 1, name: "Bananas", category: "Fruits", price: 50, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg", reviews: [{ user: "John", comment: "Great bananas!" }] },
  { id: 2, name: "Watermelons", category: "Fruits", price: 200, rating: 4.7, image: "https://media.istockphoto.com/id/1000868444/photo/watermelon-on-a-white-background-isolated.jpg?s=612x612&w=0&k=20&c=B_qrnFmM7KDXXEjFBYweoEyQgtSmkN1P79xCxmfabhw=", reviews: [{ user: "Jane", comment: "Very juicy!" }] },
  { id: 3, name: "Oranges", category: "Fruits", price: 80, rating: 4.3, image: "https://www.halegroves.com/images/l/HG24-2459.jpg?v=1", reviews: [{ user: "Alice", comment: "Sweet and fresh!" }] },
  { id: 4, name: "Mangoes", category: "Fruits", price: 100, rating: 4.6, image: "https://media.istockphoto.com/id/501240197/photo/mangoes.jpg?s=612x612&w=0&k=20&c=jWjslLKAvMjIdrAed8ogGIJg-x9f8rnIXQVZuNvtdDo=", reviews: [{ user: "Bob", comment: "Delicious!" }] },
  { id: 5, name: "Tomatoes", category: "Vegetables", price: 40, rating: 4.2, image: "https://media.gettyimages.com/id/1509700903/photo/tomatoes-in-plastic-crates.jpg?s=612x612&w=0&k=20&c=E_gQZCp-It0ScZu5rNrxQ2IcA4CxdZwFwGX3NBctEnQ=", reviews: [{ user: "Charlie", comment: "Fresh and red!" }] },
  { id: 6, name: "Onions", category: "Vegetables", price: 30, rating: 4.0, image: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2023-03/onions.jpg", reviews: [{ user: "David", comment: "Good quality!" }] },
  { id: 7, name: "Kales (Sukuma Wiki)", category: "Vegetables", price: 20, rating: 4.1, image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-kale-1296x728-feature.jpg?w=1155&h=1528", reviews: [{ user: "Eve", comment: "Very fresh!" }] },
  { id: 8, name: "Cabbages", category: "Vegetables", price: 50, rating: 4.4, image: "https://images.saymedia-content.com/.image/c_limit,cs_srgb,fl_progressive,q_auto:eco,w_700/MTc2MjY3NDQ4MDA4NjQ3ODUz/4-types-of-cabbage.jpg", reviews: [{ user: "Frank", comment: "Great for cooking!" }] },

  // Staple Foods
  { id: 9, name: "Maize Flour", category: "Grains and Flours", price: 120, rating: 4.5, image: "https://capwell.co.ke/wp-content/uploads/2020/02/soko-maize-meal.png", reviews: [{ user: "Grace", comment: "Good for ugali!" }] },
  { id: 10, name: "Wheat Flour", category: "Grains and Flours", price: 150, rating: 4.3, image: "https://capwell.co.ke/wp-content/uploads/2020/02/soko-home-baking-flour.png", reviews: [{ user: "Hank", comment: "Perfect for baking!" }] },
  { id: 11, name: "Rice", category: "Grains and Flours", price: 200, rating: 4.6, image: "https://m.media-amazon.com/images/I/81Kx35Z5TDL.jpg", reviews: [{ user: "Ivy", comment: "High quality rice!" }] },
  { id: 12, name: "Beans", category: "Legumes", price: 100, rating: 4.2, image: "https://m.media-amazon.com/images/I/71fdrKckWjL.jpg", reviews: [{ user: "Jack", comment: "Very nutritious!" }] },
  { id: 13, name: "Lentils", category: "Legumes", price: 150, rating: 4.4, image: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_200,q_auto:low,w_200/v1/TnT/2020/8_CIJF_Brown%20and%20Green%20Lentils/SPS_Legumes_Lentils-Hero_9968", reviews: [{ user: "Karen", comment: "Great for soups!" }] },

  // Cooking Essentials
  { id: 14, name: "Vegetable Cooking Oil", category: "Oils", price: 300, rating: 4.5, image: "https://d16zmt6hgq1jhj.cloudfront.net/product/4225/Fresh%20Fri%20Cooking%20Oil%20500Ml.jpg", reviews: [{ user: "Leo", comment: "Good for frying!" }] },
  { id: 15, name: "Olive Oil", category: "Oils", price: 500, rating: 4.7, image: "https://m.media-amazon.com/images/I/71CNHjEvlpL.jpg", reviews: [{ user: "Mia", comment: "Healthy and tasty!" }] },
  { id: 16, name: "Salt", category: "Spices and Seasonings", price: 20, rating: 4.0, image: "https://d16zmt6hgq1jhj.cloudfront.net/product/14119/Kaysalt%20Premium%20Iodated%20Salt%202Kg.jpeg", reviews: [{ user: "Noah", comment: "Essential for cooking!" }] },
  { id: 17, name: "Pepper", category: "Spices and Seasonings", price: 30, rating: 4.1, image: "https://yastatic.net/avatars/get-grocery-goods/2805921/97bd6071-1be2-4937-8347-367ce5de6e4a/464x464-webp", reviews: [{ user: "Olivia", comment: "Adds great flavor!" }] },
  { id: 18, name: "Mixed Spices", category: "Spices and Seasonings", price: 50, rating: 4.3, image: "https://m.media-amazon.com/images/I/81mYDLe7ZAL.jpg", reviews: [{ user: "Paul", comment: "Versatile and tasty!" }] },

  // Packaged Foods
  { id: 19, name: "Biscuits", category: "Snacks", price: 50, rating: 4.2, image: "https://dale-leisure.co.uk/images/product/l/lotus.jpg?t=1720083629", reviews: [{ user: "Quinn", comment: "Great with tea!" }] },
  { id: 20, name: "Chips", category: "Snacks", price: 80, rating: 4.4, image: "https://www.questnutrition.com/cdn/shop/products/qst-bstchp_480x480_cac8e605-0a4f-45a0-a308-6dcc6f364c3b.jpg?v=1675702405&width=1080", reviews: [{ user: "Rachel", comment: "Crunchy and tasty!" }] },
  { id: 21, name: "Tea", category: "Beverages", price: 100, rating: 4.5, image: "https://media.gettyimages.com/photos/lipton-tea-bags-regular-and-greentea-picture-id459259597?k=20&m=459259597&s=612x612&w=0&h=XlyLJOqyJ1cX2-Ni3WozQLwFZ08ubwdZBPrYSNBB3Os=", reviews: [{ user: "Sam", comment: "Perfect for mornings!" }] },
  { id: 22, name: "Coffee", category: "Beverages", price: 150, rating: 4.6, image: "https://media.gettyimages.com/id/1229904078/photo/nescafe-gold-espresso-coffee-seen-at-the-grocery-store.jpg?s=612x612&w=0&k=20&c=AAhoAttLiz_WyVEnn0KIuG7lETO2iv4U-tOThvOrFwA=", reviews: [{ user: "Tina", comment: "Rich and aromatic!" }] },
  { id: 23, name: "Fruit Juices", category: "Beverages", price: 200, rating: 4.7, image: "https://images-na.ssl-images-amazon.com/images/I/91ZAUWuiFQL.jpg", reviews: [{ user: "Uma", comment: "Refreshing and healthy!" }] },

  // Household Items
  { id: 24, name: "Detergents", category: "Cleaning Supplies", price: 250, rating: 4.3, image: "https://t3.ftcdn.net/jpg/07/66/75/90/360_F_766759066_Zx5ZdfKxHllwX2s6HyRLt9tbP2xsqeSj.jpg", reviews: [{ user: "Victor", comment: "Cleans effectively!" }] },
  { id: 25, name: "Disinfectants", category: "Cleaning Supplies", price: 300, rating: 4.4, image: "https://h7.alamy.com/comp/BME2R6/bottle-of-antiseptic-dettol-liquid-disinfectant-BME2R6.jpg", reviews: [{ user: "Wendy", comment: "Keeps surfaces clean!" }] },
  { id: 26, name: "Toilet Paper", category: "Personal Care", price: 150, rating: 4.5, image: "https://d16zmt6hgq1jhj.cloudfront.net/product/3054/Hannan%20Toilet%20Tissue%202%20Ply%20110%20Rolls.jpg", reviews: [{ user: "Xander", comment: "Soft and absorbent!" }] },
  { id: 27, name: "Soap", category: "Personal Care", price: 100, rating: 4.6, image: "https://images-na.ssl-images-amazon.com/images/I/61fdWm8j9dL.jpg", reviews: [{ user: "Yara", comment: "Leaves skin feeling fresh!" }] },
  { id: 28, name: "Toothpaste", category: "Personal Care", price: 80, rating: 4.2, image: "https://media.gettyimages.com/id/957766454/photo/stock-photo-of-boxes-of-colgate-toothpaste.jpg?s=612x612&w=0&k=20&c=y_Ht5jEf_h3yP0-FCw7fy5drsd_5X1r2D7X7YFYGJU4=", reviews: [{ user: "Zane", comment: "Great for oral hygiene!" }] },
];

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext); // Use the CartContext

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Our Products</h2>
        <ProductGrid products={products} addToCart={addToCart} /> {/* Pass addToCart */}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;