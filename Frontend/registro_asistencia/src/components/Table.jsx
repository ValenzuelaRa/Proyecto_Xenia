"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSync, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';

const Table = ({ registros, handleActualizarRegistros }) => {
  const registrosPorPagina = 10;
  const [filtroLaboratorio, setFiltroLaboratorio] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const laboratorios = ['LC1', 'LC2', 'LC3', 'LC4', 'LC5', 'LC6', 'LR'];

  useEffect(() => {
    cargarRegistros();
  }, [filtroLaboratorio, fechaSeleccionada, paginaActual]);

  const cargarRegistros = async () => {
    try {
      const response = await axios.get('http://192.168.100.15:3001/registro', {
        params: {
          laboratorio: filtroLaboratorio,
          page: paginaActual,
          pageSize: registrosPorPagina,
          fecha: fechaSeleccionada,
        },
      });

      handleActualizarRegistros(response.data);
    } catch (error) {
      console.error('Error al cargar registros:', error);
    }
  };

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= paginasTotales) {
      setPaginaActual(nuevaPagina);
      cargarRegistros();
    }
  };

  const handleFiltrarPorLaboratorio = (nombreLaboratorio) => {
    setFiltroLaboratorio(nombreLaboratorio === 'Todos' ? null : nombreLaboratorio);
    cargarRegistros();
  };

  const handleFiltrarPorFecha = () => {
    cargarRegistros();
  };

  const registrosFiltrados = registros.map((registro) => ({
    ...registro,
    fechaRegistroApp: new Date(registro.fechaRegistroApp).toLocaleString('es-MX', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
  }));

  const registrosMostrados = registrosFiltrados
    .filter((registro) => {
      const nombreLaboratorio = registro.nombreLaboratorio;
      const laboratorioMapping = {
        'Laboratorio de Computo 1': 'LC1',
        'Laboratorio de Computo 2': 'LC2',
        'Laboratorio de Computo 3': 'LC3',
        'Laboratorio de Computo 4': 'LC4',
        'Laboratorio de Computo 5': 'LC5',
        'Laboratorio de Computo 6': 'LC6',
        'Laboratorio de Redes': 'LR',
      };

      return filtroLaboratorio === null || nombreLaboratorio.includes(filtroLaboratorio);
    })
    .slice((paginaActual - 1) * registrosPorPagina, paginaActual * registrosPorPagina);

  const paginasTotales = Math.ceil(registrosFiltrados.length / registrosPorPagina);
  const mostrarPaginacion = registrosFiltrados.length > registrosPorPagina;

  const handleGenerarPDF = () => {
    const doc = new PDFDocument();
    const stream = doc.pipe(blobStream());

    doc.text(`Registros para la fecha: ${fechaSeleccionada}`, 20, 20);

    const registrosDelDia = registrosFiltrados.filter((registro) => {
      const registroFechaObj = new Date(registro.fechaRegistroApp);
      return (
        registroFechaObj.toISOString().split('T')[0] === fechaSeleccionada
      );
    });

    registrosDelDia.forEach((registro, index) => {
      const yPosition = 40 + index * 15;
      doc.text(`Registro ${index + 1}: ${JSON.stringify(registro)}`, 20, yPosition);
    });

    doc.end();

    stream.on('finish', () => {
      const blob = stream.toBlob('application/pdf');
      const url = URL.createObjectURL(blob);

      window.open(url, '_blank');
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <div className="flex items-center">
          <select
            value={filtroLaboratorio || 'Todos'}
            onChange={(e) => handleFiltrarPorLaboratorio(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Todos">Todos</option>
            {laboratorios.map((lab, index) => (
              <option key={index} value={lab}>
                {lab}
              </option>
            ))}
          </select>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onClick={() => console.log('Buscar clicado')}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div>
          <button
            className="bg-tec hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              cargarRegistros();
            }}
          >
            <FontAwesomeIcon icon={faSync} />
          </button>
          <button
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={handleGenerarPDF}
        >
          Generar PDF
        </button>
        </div>
        <div className="flex items-center">
          <input
            type="date"
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onClick={handleFiltrarPorFecha}
          >
            Filtrar por Fecha
          </button>
        </div>
        {mostrarPaginacion && (
          <div className="pagination-info">
            Página {paginaActual} de {paginasTotales}
          </div>
        )}
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
              <th className="py-2 px-4 border border-black text-center text-sm">Fecha y Hora de Registro</th>
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
                <td className="py-2 px-4 border border-black text-center text-xs">{registro.fechaRegistroApp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
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
              className="bg-tec hover.bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
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

