import './App.css';
import {
  FaLaptopCode,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPlus,
  FaUniversity,
} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { BrowserRouter as Router } from 'react-router-dom';
import { estudios } from './components/estudios';
import { useEffect, useState } from 'react';
import { trabajos } from './components/trabajos';
import RingLoader from 'react-spinners/RingLoader';

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: "url('/images/fondo02.jpg')",
        }}
        className='bg-MediumGray font-plus bg-cover h-screen overflow-auto w-full'
      >
        <Home />
        <Navbar />
      </div>
    </Router>
  );
}
function Navbar() {
  return (
    <nav className='w-full h-20 sm:h-14 flex  justify-center items-center right-0 text-center bg-rojo bg-'>
      <p className='text-white'>
        Está es una web demostrativa realizada con React. Todos los derechos a{' '}
        <span className='text-uva'> Julián Andrés Rendón Parra</span>
      </p>
    </nav>
  );
}

function Home() {
  const [overlay, setOverlay] = useState({
    nombre: '',
    show: false,
    objeto: {},
  });

  return (
    <>
      <div className='flex flex-wrap justify-center items-stretch gap-4 pb-20'>
        {overlay.show ? (
          <Overlay
            objeto={overlay.objeto}
            overlay={overlay}
            setOverlay={setOverlay}
          />
        ) : (
          ''
        )}

        <div className='w-11/12 pt-4 sm:w-10/12 relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 items-center justify-items-center '>
          <div className='row-start-1 max-w-min items-start'>
            <div className=' absolute w-60 h-56 rounded-circle inset-auto bg-rojo filter blur-lg animate-pulse'></div>
            {/* <div className=' absolute w-60 h-56 rounded-circle inset-auto bg-rojo filter blur-lg '></div> */}
            <div
              style={{
                backgroundImage: "url('/images/perfil.jpg')",
              }}
              className='relative w-60 h-56 flex rounded-circle bg-cover md:w-60'
            ></div>
          </div>

          <div className='row-start-2 md:col-start-2 md:row-start-1 flex flex-col w-full '>
            <h1 className='text-2xl text-white  p-1 bg-rojo text-center select-none font-semibold w-full'>
              Julián Andrés Rendón Parra
            </h1>
            <p className='flex items-center pl-2 gap-x-3 text-rojo bg-white backdrop-filter backdrop-blur-sm bg-opacity-70'>
              <IoLocationSharp /> Las Palmas de Gran Canaria
            </p>
            <a
              href='tel:+34602067683'
              className='flex items-center pl-2 gap-x-3 text-white bg-MediumGray backdrop-filter backdrop-blur-sm bg-opacity-70'
            >
              <FaPhoneAlt /> +34 602 06 76 83
            </a>
            <a
              href='mailto:julianandres.rendon@gmail.com'
              className='flex items-center pl-2 gap-x-3 text-rojo bg-white backdrop-filter backdrop-blur-sm bg-opacity-70'
            >
              <HiMail /> julianandres.rendon@gmail.com
            </a>

            <a
              href=' https://github.com/JuliRendon'
              className='flex items-center pl-2 gap-x-3 text-white bg-MediumGray backdrop-filter backdrop-blur-sm bg-opacity-70'
            >
              <BsGithub /> JuliRendon
            </a>
            <a
              href=' https://www.linkedin.com/in/julirendon'
              className='flex items-center pl-2 gap-x-3 text-rojo bg-white backdrop-filter backdrop-blur-sm bg-opacity-70'
            >
              <FaLinkedinIn /> julirendon
            </a>
          </div>
        </div>
        <div className='w-11/12 sm:w-10/12 bg-white bg-opacity-70  backdrop-filter backdrop-blur p-4 flex rounded-lg flex-col gap-y-2'>
          <h1 className='text-xl font-semibold text-rojo'>Hola</h1>
          <p className='font-mono text-oscuro text-justify text-sm'>
            Mi nombre es Julián Andrés Rendón Parra, soy desarrollador full
            stack Jr. amante del desarrollo, el diseño y el marketing web. Mi
            principal experiencia se centra en el diseño de sitios en Wordpress,
            HTML, CSS y JS, su posicionamiento mediante SEO y SEM, medición de
            resultados con analytics, tagmanager y relacionados, además cuento
            con conocimientos de edición de imagen en photoshop y una
            creatividad destacables en un futuro Developer and Marketer. <br />
            En la culminación de mis estudios actuales como
            <b className='text-rojo'> desarrollardor full stack Jr</b> poseo la
            capacidad de realizar aplicaciones web con React en un entorno
            Node.js con SQL y diferentes librerías y herramientas como Express,
            FS, Material Ui, React Router Dom, Jest, Js Docs y tailwind, entre
            otras. <br />
            Cuento con una excelente capacidad de análisis de requerimientos, y
            lógica de programación para llegar a soluciones óptimas de problemas
            complejos, buscando siempre la mejora y optimización del sistema.
          </p>
        </div>

        <div className='flex flex-wrap gap-4 justify-evenly'>
          <div className='w-11/12 sm:w-10/12 bg-white bg-opacity-70 justify-self-stretch backdrop-filter backdrop-blur p-4 flex rounded-lg flex-col gap-y-2'>
            <h1 className='text-xl font-semibold flex items-center gap-x-2 text-rojo'>
              <FaUniversity /> Educación
            </h1>

            <p className='font-mono text-oscuro text-justify text-sm'>
              La mayor parte de mi formación ha sido realizada en Colombia y ha
              estado centrada en el marketing digital y el desarrollo web, sin
              embargo me he esmerado por validar mis conocimientos en españa,
              finalizando recientemente el Bootcamp de desarrollo web con
              tecnologías actuales y prácticas contemporáneas en uno de los
              frameworks más usados.
            </p>
            <ul className=' relative w-full pt-4 text-sm self-end flex flex-wrap justify-evenly text-center text-white gap-4 font-semibold leading-3'>
              {estudios.map((estudio) => {
                return (
                  <li
                    className='group transition sm:w-2/3 md:w-1/3 lg:w-1/5 duration-700 ease-in-out flex flex-col w-full items-center justify-center cursor-pointer rounded-tl-lg rounded-br-lg border-b-2 border-r-2 bg-rojo p-3 hover:bg-uva'
                    key={estudio.id}
                    onClick={() => {
                      setOverlay({
                        nombre: 'estudio',
                        show: true,
                        objeto: estudio,
                      });
                    }}
                  >
                    <span className='text-uva group-hover:text-rojo transition duration-700'>
                      {estudio.institucion}
                    </span>
                    <br />
                    <span className='leading-4'>{estudio.titulo}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='w-11/12 sm:w-10/12 bg-white bg-opacity-70 backdrop-filter backdrop-blur p-4 flex rounded-lg flex-col gap-y-2'>
            <h1 className='text-xl font-semibold flex items-center gap-x-2 text-rojo'>
              <FaLaptopCode /> Experiencia
            </h1>

            <p className='font-mono text-gray text-justify text-sm'>
              Mi recorrido profesional siempre ha estado muy enfocado en el
              desarrollo y el marketing digital de una u otra forma, donde
              siempre me he caracterizado por brindar lo mejor de mí, teniendo
              la certeza que cada uno de mis contratadores podrá dar las mejores
              recomendaciones.
            </p>
            <ul className=' relative w-full pt-4 text-sm self-end flex flex-wrap justify-evenly text-center text-white gap-4 font-semibold leading-3'>
              {trabajos.map((trabajo) => {
                return (
                  <li
                    className='group transition sm:w-2/3 md:w-1/3 lg:w-1/5 duration-700 ease-in-out flex flex-col w-full items-center justify-center cursor-pointer rounded-tl-lg rounded-br-lg border-b-2 border-r-2 bg-rojo p-3 hover:bg-uva'
                    key={trabajo.id}
                    onClick={() => {
                      setOverlay({
                        nombre: 'trabajo',
                        show: true,
                        objeto: trabajo,
                      });
                    }}
                  >
                    <span className='text-uva group-hover:text-rojo transition duration-700'>
                      {trabajo.lugar}
                    </span>
                    <br />
                    <span>{trabajo.cargo}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-11/12 sm:w-10/12'>
          <h1 className='text-2xl text-white  p-1 bg-rojo bg-opacity-20 text-center select-none font-semibold w-full'>
            Algunos diseños
          </h1>
          <div className='w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur flex rounded-lg flex-col gap-y-2'>
            <h1 className='text-center text-white text-xl'>Reservalo.online</h1>
            <h2 className='text-center text-rojo'>Perfect Renter</h2>
            <img
              className='p-2 object-cover  self-center w-full  xl:w-full cursor-pointer'
              src='/images/reservalo-online.png'
              alt='Bashkoficial.com'
              onClick={() =>
                setOverlay({
                  nombre: 'web',
                  show: true,
                  object: { web: 'http://reservalo.online/' },
                })
              }
            />
          </div>
          <div className='relative flex flex-wrap gap-3 justify-evenly items-center w-full'>
            <div className='w-full lg:w-96  bg-white bg-opacity-10 backdrop-filter backdrop-blur flex rounded-lg flex-col gap-y-2'>
              <h1 className='text-center text-white'>Bashkoficial.com</h1>
              <img
                className='p-2 object-cover  self-center w-full lg:w-96 xl:w-full cursor-pointer'
                src='/images/bashko1.png'
                alt='Bashkoficial.com'
                onClick={() =>
                  setOverlay({
                    nombre: 'web',
                    show: true,
                    object: { web: 'https://bashkoficial.com/' },
                  })
                }
              />
            </div>
            <div className='w-full lg:w-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur flex rounded-lg flex-col gap-y-2'>
              <h1 className='text-center text-white'>masajesgratis.com</h1>
              <img
                className='p-2 object-cover  self-center w-full lg:w-96 cursor-pointer'
                src='/images/masajesgratis.png'
                alt='masajesgratis.com'
                onClick={() =>
                  setOverlay({
                    nombre: 'web',
                    show: true,
                    object: { web: 'https://masajesgratis.com/' },
                  })
                }
              />
            </div>
            <div className='w-full lg:w-96  bg-white bg-opacity-10 backdrop-filter backdrop-blur flex rounded-lg flex-col gap-y-2'>
              <h1 className='text-center text-white'>getleanoficial.com</h1>
              <img
                className='p-2 object-cover  self-center w-full lg:w-96 cursor-pointer'
                src='/images/getlean.png'
                alt='masajesgratis.com'
                onClick={() =>
                  setOverlay({
                    nombre: 'web',
                    show: true,
                    object: { web: 'https://getleanoficial.com/' },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Overlay({ objeto, overlay, setOverlay }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, [setLoad]);

  if (overlay.nombre === 'estudio') {
    return (
      <div className='overlay  z-30 bg-DarkGray backdrop-filter backdrop-blur-sm bg-opacity-40 fixed w-full h-full left-0 top-0 flex justify-center items-center overflow-auto sm:overflow-hidden'>
        <div className='bg-rojo text-center rounded-lg shadow-md  bg-opacity-40 w-96 py-7 px-4 flex flex-col items-center relative'>
          <h1 className='text-white leading-4 text-xl'>{objeto.institucion}</h1>
          <p className='text-sm text-uva'>{objeto.lugar}</p>
          <h2 className='text-white underline'>{objeto.titulo}</h2>
          <p className='text-sm text-uva'>
            {objeto.modalidad}, {objeto.año}
          </p>
          <p className='text-white leading-5 text-justify'>
            {objeto.descripcion}
          </p>

          <button
            className='absolute bottom-2 text-white right-2 bg-MediumGray p-1 rounded-full hover:bg-white hover:text-rojo'
            onClick={() => {
              setOverlay({ nombre: '', show: false, objeto: {} });
            }}
          >
            <FaPlus className='transform rotate-45 ' />
          </button>
        </div>
      </div>
    );
  } else if (overlay.nombre === 'trabajo') {
    return (
      <div className='overlay  z-30 bg-DarkGray backdrop-filter backdrop-blur-sm bg-opacity-40 fixed w-full h-full left-0 top-0 flex justify-center items-center overflow-auto sm:overflow-hidden'>
        <div className='bg-rojo text-center rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-40 w-96 py-7 px-4 flex flex-col items-center relative'>
          <h1 className='text-white leading-5 text-xl'>{objeto.cargo}</h1>
          <p className='text-lg text-uva'>{objeto.lugar}</p>
          <h2 className='text-uva'>{objeto.año}</h2>
          <p className='text-white leading-5 text-justify'>
            {objeto.descripcion}
          </p>

          <button
            className='absolute bottom-2 text-white right-2 bg-MediumGray p-1 rounded-full hover:bg-white hover:text-rojo'
            onClick={() => {
              setOverlay({ nombre: '', show: false, objeto: {} });
            }}
          >
            <FaPlus className='transform rotate-45 ' />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='overlay  z-30 bg-DarkGray backdrop-filter backdrop-blur-sm bg-opacity-40 fixed w-full h-full left-0 top-0 flex justify-center items-center overflow-auto sm:overflow-hidden'>
        <div className='bg-uva flex text-center justify-center rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-40 h-full w-full  items-center relative'>
          {load ? (
            <RingLoader loading={load} size={120} color={'#f1544e'} />
          ) : (
            <iframe
              src={overlay.object.web}
              width='900%'
              height='90%'
              title={overlay.object.web}
              allow='fullscreen'
              frameborder='0'
            ></iframe>
          )}

          <button
            className='absolute bottom-4  text-white right-4 bg-rojo p-1 rounded-full hover:bg-white hover:text-rojo'
            onClick={() => {
              setOverlay({ nombre: '', show: false, objeto: {} });
            }}
          >
            <FaPlus className='text-5xl transform rotate-45 ' />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
