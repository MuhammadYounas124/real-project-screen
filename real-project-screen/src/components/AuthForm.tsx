import { useState } from 'react';
import '../styles/App.scss';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<'signup' | 'login'>('signup');

  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center position-relative">
    <div className="overlay"></div>
    <div className="row w-100 align-items-center z-2">
      <div className="col-md-6 d-flex flex-column justify-content-center text-white px-5 min-vh-100">
        <div className="content-box">
          <h1 className="fw-bold">
            We solve digital problems with an outstanding creative flare
          </h1>
          <p className="mt-3 w-75">
            We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center min-vh-100">
        <div className="form-box shadow bg-light">
  
            <ul className="nav nav-tabs justify-content-center mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
                  onClick={() => setActiveTab('signup')}
                >
                  Sign Up
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
              </li>
            </ul>

            {activeTab === 'signup' ? (
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your email" required />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Your password" required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-info text-white btn-custom">Create an Account</button>
                </div>
                <div className="divider"><span>or</span></div>
                <div className="d-grid">
                  <button type="button" className="btn btn-primary btn-custom">Login via Twitter</button>
                </div>
              </form>
            ) : (
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your email" required />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Your password" required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-custom">Login</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
