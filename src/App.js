import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos:</h1>
      <Testimonio 
        nombre='Juana Salinas'
        pais='Argentina'
        imagen='emma'
        cargo='Ingeniro'
        empresa='Spotify'
        testimonio='You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.'/>

<Testimonio 
        nombre='Carla valdez'
        pais='Argentina'
        imagen='sarah'
        cargo='Ingeniro'
        empresa='Spotify'
        testimonio='You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.'/>
    

      <Testimonio 
        nombre='Manuel Perez'
        pais='Argentina'
        imagen='shawn'
        cargo='Ingeniro'
        empresa='Spotify'
        testimonio='You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.'/>
      </div>
     
    </div>
  );
}

export default App;
