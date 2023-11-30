
import React from 'react';
import { View } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './styles';

const CamaraScanner = ({ referenciaCamara, manejarEscaneoCodigoBarras, manejarEnfoque }) => {
  return (
    <View style={styles.contenedorCamara}>
      <Camera
        style={styles.camara}
        onBarCodeScanned={manejarEscaneoCodigoBarras}
        ref={referenciaCamara}
      >
        <View style={styles.marcoQr} onTouchStart={manejarEnfoque} />
      </Camera>
    </View>
  );
};

export default CamaraScanner;
