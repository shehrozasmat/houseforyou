import React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100" style={{zIndex: 1050}}>
      <div className="container-fluid px-5">
        <a className="navbar-brand fw-bold fs-4" href="#" style={{fontFamily: 'Manrope'}}>
          House-4-You
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Strona główna</a></li>
            <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">O nas</a></li>
            <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Realizacje</a></li>
            <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Opinie</a></li>
            <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}; 