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
                <img src="public/img/python.webp" alt="" />
                <img src="public/img/html.png" alt="" />
                <img src="public/img/CSS.png" alt="" />
                <img src="public/img/JavaScript.png" alt="" />
                <img src="public/img/vite.png" alt="" />
                <img src="public/img/react.png" alt="" />
                <img src="public/img/java.png" alt="" />
                <img src="public/img/spring-boot.png" alt="" />
                <img src="public/img/postgres.webp" alt="" />
                <img src="public/img/mysql.png" alt="" />
                
            </div>
            <div class="proyectos">

            </div>
            <div class="contacto">

            </div>
        </>
    );
};

export default Navbar;