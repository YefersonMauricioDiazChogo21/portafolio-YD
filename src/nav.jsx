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
            title: 'ElectricManager',
            description: 'Sistema de gestión con java, que permite el manejo y control completo sobre distintas funciones que controlan y almacenan datos para una tienda de servicios eléctricos escalable, cuenta con una conexión con MySQL y su respectiva Base de Datos',
            link: 'https://github.com/YefersonMauricioDiazChogo21/electricmanager',
            img: 'public/img/brigth-pro.png',
            id:'img4'
        },
        {
            title: 'LandingMaker',
            description: 'Este proyecto consiste en la replicación de 48 landing pages utilizando HTML y CSS. Cada página fue analizada y recreada para estudiar sus estructuras y elementos de diseño. En colaboracion con Maria Fernanada Gamez',
            link: 'https://github.com/MariaFernandaGamez/proyecto_Landing_Pages',
            img: 'public/img/landing.png',
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
            <nav  id="home" className="navbar">
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
                <img class="perfil" src="public/img/porfile.jpg" alt="" />
                <div>
                    <h2  class="descripcion">Eficiente, eficaz y empirico son las tres E que me caracterizan como programador, soy un desarrollador de software con énfasis en backend, me caracterizo por mi capacidad de aprendizaje rápido y retención de información, a lo largo de mi experiencia en este campo he fortalecido mis habilidades técnicas así como mi trabajo en equipo, comunicación asertiva y resolución de problemas. Aspiro a crecer como programador y enriquecer mis conocimiento para contribuir de manera significativa en el éxito de cada proyecto.</h2>
                </div>
            </div >

            <hr class="hr" id="about"  />
            <div class="about">
                <div class="mision-vision">
                    <div class="card-item item">
                        <h1 class="titulo-proyecto">Mision</h1>
                        <p>Al ofrecer mis servicios de manera presencial y remota, busco establecer relaciones sólidas y duraderas con las empresas, apoyando su crecimiento sostenible y ayudándolas a enfrentar los desafíos del entorno actual. En última instancia, mi misión es contribuir al éxito de cada organización con la que colaboro, dejando una huella significativa en la sociedad a través de la tecnología.</p>
                    </div>
                    <div class="card-item item">
                        <h1 class="titulo-proyecto" >Vision</h1>
                        <p>Ser un referente en soluciones tecnológicas integrales que transformen y potencien a las organizaciones, anticipando sus necesidades en un entorno en constante cambio. Aspiro a crear un ecosistema donde cada proyecto realizado sea una pieza clave en la construcción de un futuro más innovador, ético y sostenible, inspirando a otros a ver la tecnología como una fuerza de cambio positivo en la sociedad.</p>
                    </div>
                </div>
                <div class="objetivos">
                    <div class="card-item item3">
                        <h1 class="titulo-proyecto">Objetivos</h1>
                        <p>
                            º Con micapacidad para enfrentar desafíos tecnológicos, deseo brindar servicios personalizados de alta calidad.
                            <br />
                            
                            º Implementar soluciones tecnológicas innovadoras en todos los proyectos, levando una actualización sobre nuevas tendencias y tecnologías que aporten al crecimiento sostenible.
                            <br />
                            º Ampliar la oferta de servicios remotos en un 50% en los próximos dos años, facilitando el acceso a soluciones tecnológicas a empresas en diferentes regiones, sin perder la cercanía y el soporte continuo.</p>
                    </div>
                </div>
            </div>
            <hr class="hr skill-row1" id="skill"  />
            <div id="skill" class="skills">
                <div class="skill-row">
                    <div class="card">
                        <div class="skill img">
                            <img id="python" src="public/img/python.webp" alt="" />
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
                            <img id="vite" src="public/img/vite.png" alt="" />
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
            <hr class="hr " id="projects"   />
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
            <footer id="contact">
                <h2>Contacta Conmigo:</h2>
                <h3>Yeferson Mauricio Diaz Chogo</h3>
                <h4>Junior Developer</h4>
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
                <div>
                    <p>Creado con React y mucho &#10084;</p>
                </div>
            </footer>
        </>
    );
};

export default Navbar;