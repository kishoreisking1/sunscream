import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

function Menu() {
  const products = [
    {
      image: product1,
      name: "SPF 50 Sunscreen",
      price: "$19.99",
    },
    {
      image: product2,
      name: "Vitamin C Serum",
      price: "$24.99",
    },
    {
      image: product3,
      name: "Face Moisturizer",
      price: "$17.99",
    },
    {
      image: product4,
      name: "Aloe Sun Gel",
      price: "$14.99",
    },
    {
      image: product5,
      name: "Hydrating Face Wash",
      price: "$12.99",
    },
    {
      image: product6,
      name: "Sun Protection Kit",
      price: "$39.99",
    },
  ];

  return (
    <div className="page">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;