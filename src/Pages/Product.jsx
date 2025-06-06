import PageNav from "../components/PageNav";
import image from '../assets/images.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  return (
    <main>
      <PageNav />

      <section className="container mt-5">
        <div className="d-flex flex-column flex-md-row align-items-center gap-5">
          
          <div className="flex-shrink-0">
            <img src={image} alt="Product" className="img-fluid rounded shadow" style={{ maxWidth: '400px' }} />
          </div>

          <div>
            <h2 className="mb-3">About WorldWide</h2>
            <h5 className="text-muted mb-3">Designed for comfort and performance</h5>
            <p>
              Experience the perfect combination of quality and functionality. Our product is crafted 
              with premium materials and built to last. Whether you&rsquo;re working, relaxing, or on the move, 
              this product fits seamlessly into your life.
            </p>

            <ul className="list-unstyled mt-3">
              <li>✅ High durability</li>
              <li>✅ Sleek and modern design</li>
              <li>✅ Affordable and reliable</li>
              <li>✅ Available in multiple colors</li>
            </ul>

            <p className="fs-5 fw-bold mt-3">$49.99</p>

            <div className="d-flex gap-2 mt-3">
              {/* <button className="btn btn-primary">Buy Now</button> */}
              <button className="btn btn-outline-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
