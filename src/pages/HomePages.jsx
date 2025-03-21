import React from 'react'
import Navigationbar from '../components/Navbar/Navbar';
//npm install bootstrap si no lo tienen instalado
// verificar si está instalado
//vnpm list react-bootstrap
//npm install @fortawesome/react-fontawesome --save
//npm install @fortawesome/free-solid-svg-icons --save
//npm install eslint-plugin-storybook --save-dev
//npm list eslint-plugin-storybook

const HomePages = () => {
    let nombre= "DreamTeam";

    //midulive

  return (
    <>
<Navigationbar/>
    <div className="containerInput mx-auto d-flex align-items-center">
        <h1>Home {nombre}</h1>
    </div>
    </>
  )
}

export default HomePages
