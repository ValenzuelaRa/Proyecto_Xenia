"use client"
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const Table = ({ registros, handleEliminarRegistro }) => {
  const registrosPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceInicial = (paginaActual - 1) * registrosPorPagina;
  const indiceFinal = indiceInicial + registrosPorPagina;
  const registrosActuales = registros.slice(indiceInicial, indiceFinal);

  const paginasTotales = Math.ceil(registros.length / registrosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= paginasTotales) {
      setPaginaActual(nuevaPagina);
    }
  };

  const handleEliminarRegistroLocal = (id) => {
    // Elimina el registro localmente en el estado
    const nuevosRegistros = registros.filter((registro) => registro.id !== id);
    handleEliminarRegistro(nuevosRegistros);
  };

  const handleEliminarRegistroRemoto = async (id) => {
    try {
      // Envía la solicitud para eliminar el registro en el servidor
      await axios.delete(`http://192.168.100.15:3001/registro/${id}`);
      // Busca el registro con el id y elimínalo localmente
      const registroAEliminar = registros.find((registro) => registro.id === id);
      handleEliminarRegistroLocal(registroAEliminar);
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  return (
    <div>
    <div className="pagination-info">
      Página {paginaActual} de {paginasTotales}
    </div>
    <div className="table-container overflow-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-tec text-white">
          <tr>
            <th className="py-2 px-4 border border-black text-center">ID</th>
            <th className="py-2 px-4 border border-black text-center">Matrícula</th>
            <th className="py-2 px-4 border border-black text-center text-sm">Nombre</th>
            <th className="py-2 px-4 border border-black text-center text-sm">Grupo</th>
            <th className="py-2 px-4 border border-black text-center text-sm">Materia</th>
            <th className="py-2 px-4 border border-black text-center text-sm">Carrera</th>
            <th className="py-2 px-4 border border-black text-center text-sm">Nombre Laboratorio</th>
            <th className="py-2 px-4 border border-black text-center text-sm">Hora de Registro</th>
            
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr key={registro.id}>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.id}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.matricula}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.nombre}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.grupo}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.materia}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.carrera}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.nombreLaboratorio}</td>
              <td className="py-2 px-4 border border-black text-center text-xs">{registro.createdAt}</td>
              <td className="py-2 px-4 border border-black text-center">
                {/* Botón con icono para eliminar dentro de la fila */}
                <button onClick={() => handleEliminarRegistroRemoto(registro.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-gray-300 py-2 px-4 mr-2"
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <button
          className="bg-gray-300 py-2 px-4"
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === paginasTotales}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Table;
