import React, { useState } from 'react';
import axios from 'axios';

const Table = ({ registros, handleEliminarRegistro, handleEditarRegistro, handleActualizarRegistros }) => {
  const registrosPorPagina = 10;
  const [filtro, setFiltro] = useState('');

  const [paginaActual, setPaginaActual] = useState(1);
  const mostrarPaginacion = registros.length > registrosPorPagina;
  const indiceInicial = (paginaActual - 1) * registrosPorPagina;
  const indiceFinal = indiceInicial + registrosPorPagina;
  const registrosActuales = registros.slice(indiceInicial, indiceFinal);
  const paginasTotales = Math.ceil(registros.length / registrosPorPagina);

  
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= paginasTotales) {
      setPaginaActual(nuevaPagina);
    }
  };

  const handleLimpiarRegistros = async () => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas limpiar todos los registros?');
    if (confirmacion) {
      try {
        // Lógica para eliminar todos los registros del servidor
        await axios.delete('http://140.10.3.28:3001/registros');
        // Actualizar el estado local de registros
        handleActualizarRegistros([]);
      } catch (error) {
        console.error('Error al limpiar registros:', error);
      }
    }
  };
  
  
  const registrosFiltrados = registros.filter((registro) => {
    return (
      registro.matricula.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.grupo.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.materia.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.carrera.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.nombreLaboratorio.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.createdAt.toLowerCase().includes(filtro.toLowerCase())
    );
  });
  
  const registrosMostrados = registrosFiltrados.slice(indiceInicial, indiceFinal);
  
  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          
          <input
            type="text"
            placeholder="Buscar..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {mostrarPaginacion && (
          <div className="pagination-info">
            Página {paginaActual} de {paginasTotales}
          </div>
        )}
      </div>

      <div className="table-container overflow-auto">
        <table 
            registros={registros}
            handleEliminarRegistro={handleEliminarRegistro}
            handleEditarRegistro={handleEditarRegistro}
            handleActualizarRegistros={handleActualizarRegistros}
        className="min-w-full border border-gray-300">
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
          {registrosMostrados.map((registro) => (
              <tr key={registro.id}>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.id}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.matricula}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.nombre}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.grupo}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.materia}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.carrera}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.nombreLaboratorio}</td>
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-tec hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => handleLimpiarRegistros()}
        >
          Limpiar Registros
        </button>
        {mostrarPaginacion && (
          <>
            <button
              className="bg-tec hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
            >
              Anterior
            </button>
            <button
              className="bg-tec hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === paginasTotales}
            >
              Siguiente
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Table;