import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Sun, Moon } from 'lucide-react';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ${
                darkMode ? 'dark bg-black text-white' : 'bg-white text-gray-900'
            }`}
        >
            <div className="w-full max-w-4xl p-6">
                <header className="p-4 flex justify-between items-center shadow-md dark:border dark:border-white">
                    <h1 className="text-xl font-bold">Daniel Mira | Portafolio</h1>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`px-4 py-2 rounded-md flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </header>
                <main>
                    {/* Home Section */}
                    <section id="home" className="mb-8 pt-3">
                        <h2 className="text-3xl font-bold mb-4">Hola, soy Daniel Mira</h2>
                        <p>
                            Soy desarrollador Full Stack con experiencia en React, TypeScript, Node.js y ciberseguridad.
                            Me apasiona crear soluciones innovadoras y seguras para el mundo digital.
                        </p>
                    </section>

                    {/* About Section */}
                    <section id="about" className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
                        <p>
                            Tengo conocimientos sólidos en desarrollo frontend y backend, y disfruto aprender continuamente para
                            mejorar mis habilidades técnicas. Además, tengo experiencia en herramientas de ciberseguridad como
                            Kali Linux, Nmap, y Nessus.
                        </p>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg shadow-md dark:border dark:border-white">
                                <h3 className="text-xl font-bold">Plataforma de Empleo</h3>
                                <p>Aplicación para gestión de vacantes y postulaciones con React, Node.js y PostgreSQL.</p>
                                <a href="#" className="hover:underline">
                                    Ver proyecto
                                </a>
                            </div>
                            <div className="p-4 rounded-lg shadow-md dark:border dark:border-white">
                                <h3 className="text-xl font-bold">Dashboard de Monitoreo</h3>
                                <p>Herramienta de visualización de datos en tiempo real con React y WebSockets.</p>
                                <a href="#" className="hover:underline">
                                    Ver proyecto
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                        <p>
                            Si quieres colaborar en algún proyecto o tienes alguna pregunta, no dudes en contactarme.
                        </p>
                        <form className="mt-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full mb-4 p-2 border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Correo Electrónico"
                                className="w-full mb-4 p-2 border rounded-md"
                            />
                            <textarea
                                placeholder="Mensaje"
                                className="w-full mb-4 p-2 border rounded-md"
                            ></textarea>
                            <button
                                type="submit"
                                className={`px-4 py-2 shadow-md rounded-md hover:cursor-pointer ${darkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                            >
                                Enviar
                            </button>
                        </form>
                    </section>
                </main>

                <footer className="p-1.5 text-center ">
                    <p>© {new Date().getFullYear()} Daniel Mira. Todos los derechos reservados.</p>
                </footer>
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
