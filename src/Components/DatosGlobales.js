import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/estilos.css';
import axios from 'axios';

function Datos_globales() {
    //direccion de la API
    const baseUrl = "http://localhost:4004/vacunas/";
    const [data, setData] = useState([]);
    const [contador, setContador] = useState(0);
    const [vacunasPFizerTotales, setVacunasPFizerTotales] = useState(0);
    const [vacunasModernaTotales, setVacunasModernaTotales] = useState(0);
    const peticionGet = async () => {
        var vacunasPFizer = 0;
        var vacunasModerna = 0;
        await axios.get(baseUrl)
            .then(response => {
                setData(response.data);
                response.data.forEach(vacuna => {
                    console.log(vacuna.dosisPfizer);
                    vacunasPFizer = vacunasPFizer + vacuna.dosisPfizer; //Contador de todas las vacunas Pfizer
                    vacunasModerna = vacunasModerna + vacuna.dosisModerna; //Contador de todas las vacunas Moderna
                });


                console.log(vacunasPFizer);
                console.log(vacunasModerna);

                setVacunasPFizerTotales(vacunasPFizer);
                setVacunasModernaTotales(vacunasModerna);

            }).catch(error => {
                console.log(error);
            })
    }//peticionGet


    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="10%" y="50%" fill="#eceeef" dy=".3em">Vacunas Totales Entregadas</text></svg>

                            <div class="card-body">
                                <p class="card-text">{vacunasPFizerTotales + vacunasModernaTotales}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">{vacunasPFizerTotales + vacunasModernaTotales}</text></svg>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">{vacunasPFizerTotales + vacunasModernaTotales}</text></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Datos_globales;