export default function ProductCard({product}) {
  return (
    <div className="product">
    <div>
      <p>{product.category}</p>
    </div>
    <div>
      <img src={product.img !== "N/A" ? product.img : "https://via.placeholder.com/400"} alt={product.title} />
    </div>
    <div>
      <span><b>Rs {product.price}</b></span>
      <h3>{product.title}</h3>
      <button className="btn btn-secondary px-5 mx-5 my-3">Add to Cart</button>
    </div>
    
  </div>
  )
}
