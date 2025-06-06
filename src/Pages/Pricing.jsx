import PageNav from "../components/PageNav";
import image2 from '../assets/night-city.jpg';

const Pricing = () => {
  return (
    <main>
      <PageNav />

      <section className="container mt-2 p-3">
        
        <div className="d-flex flex-column flex-md-row align-items-center gap-5 mb-5">
          <div className="flex-shrink-0">
            <img 
              src={image2} 
              alt="Night City" 
              className="img-fluid rounded shadow" 
              style={{ maxWidth: '500px' }} 
            />
          </div>

          <div>
            <h2 className="mb-3">Simple Pricing, No Surprises</h2>
            <p className="text-muted mb-0">
              Choose the plan that suits your needs. Whether you&rsquo;re an individual or a team,
              we offer transparent pricing with no hidden fees.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Basic Plan */}
          <div className="col-md-6">
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <h6 className="card-subtitle mb-2 text-muted">$19/month</h6>
                <ul className="list-unstyled mt-2">
                  <li>✔️ Access to core features</li>
                  <li>✔️ Email support</li>
                  <li>✔️ 10GB storage</li>
                </ul>
                <button className="btn btn-outline-primary mt-3">Choose Basic</button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="col-md-6">
            <div className="card h-100 border-success">
              <div className="card-body">
                <h5 className="card-title">Pro</h5>
                <h6 className="card-subtitle mb-2 text-muted">$49/month</h6>
                <ul className="list-unstyled mt-2">
                  <li>✔️ All Basic features</li>
                  <li>✔️ Priority support</li>
                  <li>✔️ Unlimited storage</li>
                </ul>
                <button className="btn btn-success mt-3">Choose Pro</button>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
};

export default Pricing;
