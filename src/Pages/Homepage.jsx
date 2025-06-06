import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "./HomePage.css";

const Homepage = () => {
  return (
    <main className="homepage-bg min-vh-100 d-flex flex-column">
      <PageNav />

      <section className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-3 fw-bold">Welcome to WorldWise</h1>
        <p className="lead">
          Your smart travel companion — track your favorite places and plan your journeys with ease.
        </p>

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
