import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [formData, setFormData] = useState({
    input1: 'Matricula',
    input2: 'Nombre',
    input3: 'Grupo',
    input4: 'Materia',
  });
  const [carreras, setCarreras] = useState([]);
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    fetchCarreras();
  }, []);

  const fetchCarreras = async () => {
    try {
      const response = await axios.get('http://192.168.100.15:3000/carrera');
      setCarreras(response.data);
    } catch (error) {
      console.error('Error al obtener carreras:', error);
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setQrData(data);
  };

  const handleRepeatScan = () => {
    setQrData(null);
  };

  const handleFocus = async () => {
    if (cameraRef.current) {
      await cameraRef.current.resumePreview();
    }
  };

  const handleInputChange = (name, value) => {
    if (name === 'carrera') {
      setSelectedCarrera(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = () => {
    // Implement your logic for form submission using formData, selectedCarrera, and qrData
    // You can send this data to your server using axios.post, for example.
    // For demonstration purposes, an alert is shown here.
    Alert.alert('Form Submitted!', JSON.stringify({ formData, selectedCarrera, qrData }));
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Formulario</Text>
        <TextInput
          style={styles.input}
          placeholder="Matricula"
          value={formData.input1}
          onChangeText={(text) => handleInputChange('input1', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={formData.input2}
          onChangeText={(text) => handleInputChange('input2', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Grupo"
          value={formData.input3}
          onChangeText={(text) => handleInputChange('input3', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Materia"
          value={formData.input4}
          onChangeText={(text) => handleInputChange('input4', text)}
        />
        <Picker
  selectedValue={selectedCarrera}
  onValueChange={(itemValue, itemIndex) => setSelectedCarrera(itemValue)}
>
  <Picker.Item label="Selecciona una carrera" value={null} />
  {carreras.map((carrera) => (
    <Picker.Item key={carrera.id} label={carrera.nombre} value={carrera.id} />
  ))}
</Picker>
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.camera}
            onBarCodeScanned={handleBarCodeScanned}
            ref={cameraRef}
          >
            <View style={styles.qrFrame} onTouchStart={handleFocus} />
          </Camera>
        </View>
        {qrData && (
          <View style={styles.qrContainer}>
            <Text>Código QR leído:</Text>
            <TextInput
              style={styles.qrInput}
              value={qrData}
              editable={false}
            />
            <TouchableOpacity onPress={handleRepeatScan} style={styles.button}>
              <Text>Repetir Escaneo</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text>Submit Form</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    padding: 20,
  },
  qrInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 200, // Ajusta la altura según tu preferencia
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  qrFrame: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
});

export default App;
