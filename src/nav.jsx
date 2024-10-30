import React, { useState } from 'react';
import './navbar.css'; 
import StarBackground from './starBack'; // Importa el fondo

const Navbar = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const projects = [
        {
            title: 'PrestService',
            description: 'Proyecto java con SpringBot e implementación de Spring Security, trabaja en la gestión de servicios de una empresa, en colaboración con Laura Torres y Karol Ramirez.',
            link: 'https://github.com/Karol-Ramirez03/proservicehub.git',
            img: 'public/img/prest-removebg-preview.png',
            id:'img1'
        },
        {
            title: '¿Cuánto cuesta mi App?',
            description: 'Aplicativo web con Lit, donde los usuarios pueden cotizar la creación de sus páginas web según especificaciones. Proyecto en colaboración con Laura Torres y Karol Ramirez.',
            link: 'https://github.com/Karol-Ramirez03/costo-app',
            img: 'public/img/costoApp.png',
            id:'img2'
        },
        {
            title: 'Burger Fest',
            description: 'Proyecto HTML y CSS, basado en una interfaz sencilla de una tienda virtual de productos alimenticios.',
            link: 'https://yefersonmauriciodiazchogo21.github.io/hamburguesa_proyecto',
            img: 'public/img/hamburguesa.png',
            id:'img3'
        },
        {
            title: 'Otro',
            description: 'Proyecto HTML y CSS, basado en una interfaz sencilla de una tienda virtual de productos alimenticios.',
            link: '',
            img: '',
            id:'img4'
        },
        {
            title: 'Otro 2',
            description: 'Proyecto HTML y CSS, basado en una interfaz sencilla de una tienda virtual de productos alimenticios.',
            link: '',
            img: '',
            id:'img5'
        }
        
    ];

    const handleNextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const handlePreviousProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };
    
    return (
        <>
            <StarBackground /> {}
            <nav className="navbar">
                <div className="navbar-brand">
                    <h1>Yeferson Diaz</h1>
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">Profile</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="personal-info">
                <img class="perfil" src="public/img/porfile.png" alt="" />
                <h2 class="descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quae cumque ducimus harum facilis at labore veniam nam aspernatur dolores debitis autem pariatur vero laudantium suscipit nostrum, quidem nesciunt dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam mollitia  tempore et, quo perspiciatis iusto ullam odit, repellat architecto esse? Odio ea sed fuga recusandae, quasi accusamus facere dolorum!</h2>
            </div>
            <div class="about">
                <div class="mision-vision">
                    <div class="card-item">
                        <h1>Mision</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Aliquid sit fugiat <br /> tempora natus rerum assumenda. <br />Exercitationem nisi, atque illo soluta <br />sequi, deleniti deserunt totam,<br /> debitis repellendus at odit obcaecati assumenda!</p>
                    </div>
                    <div class="card-item">
                        <h1>Vision</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Aliquid sit fugiat <br /> tempora natus rerum assumenda. <br />Exercitationem nisi, atque illo soluta <br />sequi, deleniti deserunt totam,<br /> debitis repellendus at odit obcaecati assumenda!</p>
                    </div>
                </div>
                <div class="objetivos">
                    <div class="card-item item3">
                        <h1>Objetivos</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste facere aperiam tempore omnis necessitatibus ipsum! Incidunt dolorem recusandae aliquid vitae, debitis hic expedita magnam nam animi atque iusto sequi.</p>
                    </div>
                </div>
            </div>
            <div class="skills">
                <div class="skill-row">
                    <div class="card">
                        <div class="skill img">
                            <img src="public/img/python.webp" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Lenguaje de programación multiparadigma, que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="html" src="public/img/html.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="css" src="public/img/CSS.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Utilizado para diseñar y dar estilo a las páginas web, por ejemplo, alterando la fuente, color, tamaño y espaciado del contenido, etc...</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="javascript" src="public/img/JavaScript.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img src="public/img/vite.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Herramienta de compilación que proporciona una experiencia de desarrollo más rápida y ágil para proyectos web modernos.</p>
                        </div>
                    </div>
                    
                </div>
                <div class="skill-row">
                    <div class="card">
                        <div class="skill img">
                            <img id="react" src="public/img/react.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario que facilita el desarrollo de aplicaciones en una sola página. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="java"  src="public/img/java.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Java es un lenguaje de programación orientado a objetos y una plataforma informática que se utiliza para crear aplicaciones.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="spring"  src="public/img/spring-boot.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Marco de Java basado en microservicios de código abierto, especialmente útil para ingenieros de software que desarrollan aplicaciones web.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="posgre"  src="public/img/postgres.webp" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="skill img">
                            <img id="mysql"  src="public/img/mysql.png" alt="" />
                        </div>
                        <div class="skill texto">
                            <p>Es un sistema de gestión de bases de datos (DBMS, por sus siglas en inglés) de código abierto desarrollado por Oracle. </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="proyectos">
                <button className="arrow left" onClick={handlePreviousProject}>&#10094;</button>
                <div className="project-panel">
                    <div className="project">
                        <h3 class="titulo-proyecto">{projects[currentProject].title}</h3>
                        <p>{projects[currentProject].description}</p>
                        <a href={projects[currentProject].link} target="_blank">
                            {projects[currentProject].img && <img id={projects[currentProject].id} src={projects[currentProject].img} alt={projects[currentProject].title}  />}
                            <p class="click">Haz click en la imagen para saber mas...</p>
                        </a>
                    </div>
                </div>
                <button className="arrow right" onClick={handleNextProject}>&#10095;</button>
            </div>
            <footer>
                <h3>Contacta Conmigo:</h3>
                <div class="contacto">
                    
                    <div>
                        <a href="https://github.com/YefersonMauricioDiazChogo21" target="_blank">
                            <img id="github" src="public/img/github.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:yefersondiaz2001gmail.com" target='_blank'>
                            <img id="gmail" src="public/img/gmail.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://wa.me/3143807720" target='_blank'>
                            <img id="whatsapp" src="public/img/whatsapp.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/yeferson-mauricio-diaz-chogo-9645bb2a5/" target='_blank'>
                            <img id="linkedin" src="public/img/linkedin.png" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Navbar;