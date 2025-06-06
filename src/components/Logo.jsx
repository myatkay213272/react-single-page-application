import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const Logo = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <Link to='/'>
        <img src={logo} alt="logo" width="40" height="40" />
      </Link>

      <Link to='/' className="text-decoration-none">
         <h2 className="mb-0 fs-4 text-success">WorldWise</h2>
      </Link>
     
    </div>
  );
};

export default Logo;
