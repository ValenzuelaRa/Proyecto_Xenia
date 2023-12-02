"use client";
// pages/page.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';

const Page = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await axios.get('http://140.10.3.28:3001/registro');
        setRegistros(response.data);
      } catch (error) {
        console.error('Error al obtener registros:', error);
      }
    };

    fetchRegistros();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 max-w-5xl w-full">
        <h2 className="text-3xl font-semibold mb-8">Registro de asistencia</h2>
        <Table registros={registros} />
      </div>
    </main>
  );
};

export default Page;
