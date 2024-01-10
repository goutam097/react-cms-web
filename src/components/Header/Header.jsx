import React from 'react'

const Header = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Service Area</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Employment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Home Care Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >News & Media</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header