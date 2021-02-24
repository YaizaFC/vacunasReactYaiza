import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/estilos.css';
import imagenes from '../assets/imagenes'
import axios from 'axios';

function Datos_globales() {
    //direccion de la API
    const baseUrl = "http://localhost:4004/vacunas/";
    const [data, setData] = useState([]);
    const [contador, setContador] = useState(0);
    const [vacunasPFizerTotales, setVacunasPFizerTotales] = useState(0);
    const [dosisEntregadas, setDosisEntregadas] = useState(0);
    const [dosisEntregadasP, setDosisEntregadasP] = useState(0);
    const [dosisEntregadasM, setDosisEntregadasM] = useState(0);
    const [dosisAdministradas, setDosisAdministradas] = useState(0);
    const [pautaCompleta, setPautaCompleta] = useState(0);
    const peticionGet = async () => {
        var vacunasPFizer = 0;
        var vacunasModerna = 0;
        var dosisAdm = 0;
        var pautaComp = 0;
        await axios.get(baseUrl)
            .then(response => {
                setData(response.data);
                response.data.forEach(vacuna => {
                    vacunasPFizer = vacunasPFizer + vacuna.dosisPfizer; //Contador de todas las vacunas Pfizer
                    vacunasModerna = vacunasModerna + vacuna.dosisModerna; //Contador de todas las vacunas Moderna
                    dosisAdm = dosisAdm + vacuna.dosisAdministradas;
                    pautaComp = pautaComp + vacuna.personasCompleta;

                });

                //setVacunasPFizerTotales(vacunasPFizer);
                setDosisEntregadasP(vacunasPFizer);
                setDosisEntregadasM(vacunasModerna);
                setDosisEntregadas(vacunasModerna + vacunasPFizer);
                setDosisAdministradas(dosisAdm);
                setPautaCompleta(pautaComp);

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

                <h1 class="titulo1">Situación Actual</h1>
                <img src={imagenes.img4} alt="imagen virus" class="imgVirus" ></img>

                <h3 class="titulo3 sep">Datos Globales</h3>
                <hr />
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#C5FFDA" /><text x="10%" y="50%" fill="#000000" dy=".3em">Vacunas Totales Entregadas en CCAA</text></svg>

                            <div class="card-body">
                                <img src={imagenes.img5} alt="imagen comunidad autonoma" class="inline imgCuadro1" ></img><p class="card-text grande inline">{dosisEntregadas}</p><img src={imagenes.img5} alt="imagen vacuna" class="inline imgCuadro1" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#C5FFDA" /><text x="30%" y="50%" fill="#000000" dy=".3em">Dosis Administradas</text></svg>

                            <div class="card-body">
                                <img src={imagenes.img6} alt="imagen vacuna" class="inline imgCuadro2" ></img><p class="card-text inline">{dosisAdministradas}</p><img src={imagenes.img6} alt="imagen vacuna" class="inline imgCuadro2" ></img>
                                <hr />
                                <p class="card-text">{Math.round((dosisAdministradas * 100) / dosisEntregadas)}% dosis recibidas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#C5FFDA" /><text x="15%" y="50%" fill="#000000" dy=".3em">Nº de personas con pauta Completa</text></svg>

                            <div class="card-body">
                                <img src={imagenes.img7} alt="imagen personas pauta completa" class="inline imgCuadro3" ></img><p class="card-text inline">{pautaCompleta}</p><img src={imagenes.img7} alt="imagen vacuna" class="inline imgCuadro3" ></img>
                                <hr />
                                <p class="card-text">{Math.round((pautaCompleta * 100) / dosisAdministradas)}% dosis administradas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="titulo3">Distribución por tipo de vacuna</h3>
                <hr />
                <table class="tablaDatosGlobales">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Dosis entregadas en CCAA<hr /></th>
                            <th>Nº personas con pauta completa<hr /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="dosisEntregadasPfizer">Pfizer</span></td>
                            <td>{dosisEntregadasP}</td>
                            <td>{pautaCompleta}</td>
                        </tr>
                        <tr>
                            <td><span class="dosisEntregadasModerna">Moderna</span></td>
                            <td>{dosisEntregadasM}</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><span class="noDatos">AstraZeneca / Oxford</span></td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><span class="noDatos">Janssen</span></td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><span class="noDatos">Sanofi Pasteur/GSK</span></td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <div>
                <p class="inline info">Informe de actividad diario. GIV – Gestión Integral de vacunación frente al COVID-19 en España</p>
                <img src={imagenes.img8} alt="Gobierno de españa - Ministerio de salud" class="right imgGobierno" />
            </div>
            <hr class="pie"/>
            <p class="info2">Yaiza Fritis Calvo - Despliegue de Aplicaciones Web - 2020/21</p>
        </div>

    );

}

export default Datos_globales;