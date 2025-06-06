import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "./HomePage.css"; // ✅ import the CSS you just created

const Homepage = () => {
  return (
    <main className="homepage-bg">
      <PageNav />

      <section className="container text-center mt-5">
        <h1 className="display-3 fw-bold">Welcome to WorldWise</h1>
        <p className="lead">Your smart travel companion — track your favorite places and plan your journeys with ease.</p>

       <Link
          to="/app"
          className="btn btn-success text-uppercase text-black mt-3 p-3"
        >
          Start tracking now
        </Link>

      </section>
    </main>
  );
};

export default Homepage;
