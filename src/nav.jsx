import React from 'react';
import './navbar.css'; 
import StarBackground from './starBack'; // Importa el fondo

const Navbar = () => {
    
    return (
        <>
            <StarBackground /> {/* Agrega el fondo estrellado */}
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
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing <br />elit. Adipisci quae cumque ducimus harum facilis at <br />labore veniam nam aspernatur dolores debitis autem <br />pariatur vero laudantium suscipit nostrum, quidem <br />nesciunt dicta. Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Veritatis numquam mollitia <br /> tempore et, quo perspiciatis iusto ullam odit, repellat <br /> architecto esse? Odio ea sed fuga recusandae, <br />quasi accusamus facere dolorum!</h2>
            </div>
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
            <div class="proyectos">
                <button class="arrow left">&#10094;</button>
                <div class="project-panel">
                    <div class="project project1">
                        <h3>Proyecto 1</h3>
                        <p>Descripción del proyecto 1...</p>
                    </div>
                    <div class="project project2">
                        <h3>Proyecto 2</h3>
                        <p>Descripción del proyecto 2...</p>
                    </div>
                    <div class="project project3">
                        <h3>Proyecto 3</h3>
                        <p>Descripción del proyecto 3...</p>
                    </div>
                </div>
                
                <button class="arrow right">&#10095;</button>
            </div>
            <footer>
                <div class="contacto">
                    <img id="github" src="public/img/github.png" alt="" />
                    <img id="gmail" src="public/img/gmail.png" alt="" />
                    <img id="whatsapp" src="public/img/whatsapp.png" alt="" />
                    <img id="linkedin" src="public/img/linkedin.png" alt="" />
                </div>
            </footer>
        </>
    );
};

export default Navbar;