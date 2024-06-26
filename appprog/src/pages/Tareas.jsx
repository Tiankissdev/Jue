
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-regular-svg-icons';
import './Tareas.css'; // Importa los estilos específicos de Tareas

const Tareas = () => {
  return (
    <div className="tareas-container">
      <Navbar />
      <div className="body-container">
        <div className="content">
          <div className="title-container">
            <h1 className="title">Tareas</h1>
          </div>
          <div className="button-container">
            <FontAwesomeIcon icon={faSquarePlus} className="icon" style={{ fontSize: '28px', color: '#000' }} />
            <FontAwesomeIcon icon={faSquareMinus} className="icon" style={{ fontSize: '28px', color: '#000', marginLeft: '10px' }} />
          </div>
          <div className="task-cards">
            {/* Aquí van las tarjetas de tareas */}
            <TaskCard
              title="Tarea 1"
              description="Descripción de la Tarea 1."
            />
            <TaskCard
              title="Tarea 2"
              description="Descripción de la Tarea 2."
            />
            <TaskCard
              title="Tarea 3"
              description="Descripción de la Tarea 3."
            />
          </div>
        </div>
      </div>
      <Footer className='footer'/>
    </div>
  );
};

export default Tareas;
