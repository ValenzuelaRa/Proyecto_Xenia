"usa el cliente"
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from './components/styles';

const App = () => {
  const [tienePermiso, establecerPermiso] = useState(null);
  const [datosQr, establecerDatosQr] = useState(null);
  const [formularioDatos, establecerFormularioDatos] = useState({
    input1: 'Matricula',
    input2: 'Nombre',
    input3: 'Grupo',
    input4: 'Materia',
  });
  const [carreras, establecerCarreras] = useState([]);
  const [carreraSeleccionada, establecerCarreraSeleccionada] = useState(null);
  const referenciaCamara = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log('Estado de permisos:', status);
      establecerPermiso(status === 'granted');
    })();
  }, []);
  
  useEffect(() => {
    obtenerCarreras();
  }, []);

  const obtenerCarreras = async () => {
    try {
      const respuesta = await axios.get('http://192.168.100.15:3000/carrera');
      establecerCarreras(respuesta.data);
    } catch (error) {
      console.error('Error al obtener carreras:', error);
    }
  };

  const manejarEscaneoCodigoBarras = ({ type, data }) => {
    establecerDatosQr(data);
  };

  const manejarRepetirEscaneo = () => {
    establecerDatosQr(null);
  };

  const manejarEnfoque = async () => {
    if (referenciaCamara.current) {
      await referenciaCamara.current.resumePreview();
    }
  };

  const manejarCambioEntrada = (nombre, valor) => {
    if (nombre === 'carrera') {
      establecerCarreraSeleccionada(valor);
    } else {
      establecerFormularioDatos({
        ...formularioDatos,
        [nombre]: valor,
      });
    }
  };

  const manejarEnvio = async () => {
    try {
      const respuesta = await axios.post('http://192.168.100.15:3000/guardarInformacion', {
        matricula: formularioDatos.input1,
        nombre: formularioDatos.input2,
        grupo: formularioDatos.input3,
        materia: formularioDatos.input4,
        carrera: carreraSeleccionada,
        nombre_laboratorio: datosQr,
      });

      if (respuesta.data.success) {
        Alert.alert('Formulario enviado correctamente');
      } else {
        Alert.alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      Alert.alert('Error interno del servidor');
    }
  }

  if (tienePermiso === null) {
    return <View />;
  }

  if (tienePermiso === false) {
    return <Text>Sin acceso a la cámara</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View styles={styles.contenedorFormulario}>
        <Image 
          source={require('./assets/logo-ensenada.png')} // Ajusta la ruta según la ubicación de tu logo
          style={styles.logo}
        />
        <Text style={styles.tituloFormulario}>Registro de Asistencia</Text>
        <TextInput
          style={styles.entrada}
          placeholder="Matricula"
          value={formularioDatos.input1}
          onChangeText={(texto) => manejarCambioEntrada('input1', texto)}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Nombre"
          value={formularioDatos.input2}
          onChangeText={(texto) => manejarCambioEntrada('input2', texto)}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Grupo"
          value={formularioDatos.input3}
          onChangeText={(texto) => manejarCambioEntrada('input3', texto)}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Materia"
          value={formularioDatos.input4}
          onChangeText={(texto) => manejarCambioEntrada('input4', texto)}
        />
        <Picker
          style={styles.selector}
          selectedValue={carreraSeleccionada}
          onValueChange={(valorItem, indiceItem) => establecerCarreraSeleccionada(valorItem)}
        >
          <Picker.Item label="Selecciona una carrera" value={null} />
          {carreras.map((carrera) => (
            <Picker.Item key={carrera.id} label={carrera.nombre} value={carrera.id} />
          ))}
        </Picker>

        <View style={styles.contenedorCamara}>
          <Camera
            style={styles.camara}
            onBarCodeScanned={manejarEscaneoCodigoBarras}
            ref={referenciaCamara}
          >
            <View style={styles.marcoQr} onTouchStart={manejarEnfoque} />
          </Camera>
        </View>
        {datosQr && (
          <View style={styles.contenedorQr}>
            <Text>Código QR leído:</Text>
            <TextInput
              style={styles.entradaQr}
              value={datosQr}
              editable={false}
            />
            <TouchableOpacity onPress={manejarRepetirEscaneo} style={styles.boton}>
              <Text>Repetir Escaneo</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={manejarEnvio} style={styles.boton}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default App;
