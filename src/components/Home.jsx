import React from 'react'
import html from '../img/html.svg';
import css from '../img/css.svg';
import javascript from '../img/javascript.svg';
import react from '../img/react.svg';
import python from '../img/python.svg';
import sql from '../img/sql.svg';
import typescript from '../img/Typescript.svg';
import perfil from '../img/perfil.png';
import juego from '../img/tresEnlinea.png';
import '../style/style.css'
import Contacto from './Contacto';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   <>
    
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <img className="hero-imagen-desarrollador rounded-circle" src={perfil} alt="Foto de hector alfaro"></img>
        <h1>Hector Alfaro</h1>
        <h2>Frontend Developer</h2>
      </div>
      {/* hero */}
  <div className="hero-inferior d-md-flex flex-wrap justify-content-center align-items-center gap-4">
    <div className='imagen'>
      <img src={html} alt="HTML5" />
      <span className='nombre'>
        <span className='text'>HTML5</span>
      </span>
    </div>

    <div className='imagen'>
      <img src={css} alt="CSS3" />
      <span className='nombre'>
        <span className='text'>CSS3</span>
      </span>
    </div>

    <div className='imagen'>
      <img src={javascript} alt="JavaScript" />
      <span className='nombre'>
        <span className='text'>JavaScript</span>
      </span>
    </div>

    <div className='imagen'>
      <img src={react} alt="React" />
      <span className='nombre'>
        <span className='text'>React</span>
      </span>
    </div>

    <div className='imagen'>
      <img src={python} alt="Python" />
      <span className='nombre'>
        <span className='text'>Python</span>
      </span>
    </div>

    <div className='imagen'>
      <img src={sql} alt="SQL Server" />
      <span className='nombre'>
        <span className='text'>SQL Server</span>
      </span>
    </div>

    <div className='imagen'>
      <img src={typescript} alt="TypeScript" />
      <span className='nombre'>
        <span className='text'>TypeScript</span>
      </span>
    </div>
</div>

    </section>

    {/*  Sobre mi  */}
    <section className="sobre-mi seccion-oscura">
      <div className="contenedor">
        <h2 className="seccion-titulo">Sobre mí</h2>
        <p className="seccion-texto">Me apasiona el desarrollo web y estoy comprometido en aprender cada día más. Actualmente, soy estudiante de licenciatura en computación, lo que me brinda una base sólida para explorar este emocionante campo. Programar es mi pasión y encuentro una gran satisfacción en resolver desafíos y crear soluciones innovadoras.
                               </p>
      </div>
    </section>

    {/* proyectos */}
    <section id="proyectos" className="proyectos seccion-clara d-flex ">
      <h2>Proyectos</h2>
      <div className="project">
        <div className='project-img'>
          <img src={juego} alt="tres en lines" />
        </div>
        <div className="project-description">
          <h3>Tres en linea</h3>
          <span className="icon badge text-bg-secondary text-dark ">HTML5</span>
          <span className=" icon badge text-bg-secondary text-dark">CSS3</span>
          <span className=" icon badge text-bg-secondary text-dark">JavaScript</span>
          <span className="icon badge text-bg-secondary text-dark">React</span>
          <p className='descripcion-proyecto'>Proyecto de juego tres en linea construido en react</p>
          <p className='iconos'>
          <a href="https://tresenlinea.netlify.app/" target='_blank'><i className="bi bi-globe"></i></a>
          <a href="https://github.com/Xanderg19/TresEnLinea" target='_blank'><i className="bi bi-github"></i></a>
          </p>
        </div>
      </div>

         
      <Link className='btn-enlace' to='/proyectos'><button type="button" className="btn btn-info">
            Ver más proyectos
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button></Link>
    </section>
    {/* contacto */}
    <Contacto />
   </>
  )
}

export default Home
