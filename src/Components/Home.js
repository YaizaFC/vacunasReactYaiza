import React from 'react';
//para trabajar con imagenes
//primero la tengo que importar de dnde esta
import imagenes from'../assets/imagenes'
const inicio = () => {
    return(
        <div className="App bg-home">
            <h1>GIV COVID-19</h1>
            <h1>Gestión integral de la vacunacion COVID-19</h1>
            <hr class="hrHome" />
            <h3>Informe de actividad</h3>

            <p>Informe para comunicación</p>

            <p class="datos">Yaiza Fritis Calvo - Despliegue de Aplicaciones Web - 2020/2021</p>

            <img src={imagenes.img8} alt="Gobierno de españa - Ministerio de salud" class="right imgGobierno abajo" />
        </div>
    )
}

export default inicio;