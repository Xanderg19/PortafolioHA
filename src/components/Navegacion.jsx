import React from 'react'
import '../style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/Ha.png';
import { Link, Outlet } from 'react-router-dom'


const Navegacion = () => {
  return (
    <>
     <nav className="navbar navbar-expand-md  navbar-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-toggler">
        <Link to='/' className="navbar-brand">
        <img src={logo} width="60"  alt="Logo de la página web"></img>
        </Link>
       
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className="nav-item lista">
            <Link className="nav-link " to='/'>Home</Link>
          </li>
          <li className="nav-item lista">
            <a className="nav-link" href="#proyectos">Proyectos</a>
          </li>
          <li className="nav-item lista">
            <a className="nav-link" href='https://drive.google.com/file/d/1EE4NKS1J2HB5AroHd6bml59HfNBelrmd/view?usp=sharing' target='_blank'>CV</a>
          </li>
          <li className="nav-item lista">
        
          <a href="https://www.linkedin.com/in/hector-alexander-guevara-alfaro-b16715207/" className="nav-link" > <i className="bi bi-linkedin"></i></a>
          </li>
          <li className="nav-item lista">
          <a href="https://github.com/Xanderg19" className="nav-link" > <i className="bi bi-github"></i></a>
          </li>
          <li className="nav-item lista">
          <a href="mailto:halfaro018@gmail.com" className="nav-link" > <i className="bi bi-envelope"></i></a>
          </li>
          <li className="nav-item lista">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <Outlet />
   </>
  
  

  
  )
}

export default Navegacion
