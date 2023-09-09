import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
  <>
  <div>
        <nav className= {`navbar navbar-expand-lg navbar-${props.theam} bg-${props.theam}`}>
          <div className="container-fluid">
            <div className="navbar-brand"><h2>TAZA KHABAR</h2></div>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="./home">Latest News</Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="./WallStreet">International News</Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="./Tech">Tech News</Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="./apple">APPle Fanse</Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="./space">Space exploration</Link>
                        </li>

                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Differen 
                          </Link>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/">Action</Link></li>
                            <li><Link className="dropdown-item" to="/">Another action</Link></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                          </ul>
                        </li>


                        <div className={`form-check form-switch text-${props.theam === "light" ? "dark" : "light"}`}>
                          <input className="form-check-input" type="checkbox" onClick={props.click} role="switch" id="flexSwitchCheckDefault"/>
                          <label className="form-check-label" for="flexSwitchCheckDefault">click</label>
                        </div>

                    </ul>
                </div>
          </div>
        </nav>  
  </div>
  </>
  )
}

export default Navbar