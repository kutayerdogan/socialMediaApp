import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [testData, setTestData] = useState<string>('Bağlantı test ediliyor...');

  useEffect(() => {
    initializeFirebase();
    testFirebaseConnection();
  }, []);

  const initializeFirebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(); // Gerekirse Firebase config buraya eklenebilir.
      console.log('Firebase initialized');
    }
  };

  const testFirebaseConnection = async () => {
    try {
      const testDocRef = firestore().collection('test').doc('connection-test');

      // Firestore'a test verisi yaz
      await testDocRef.set({
        message: 'Firebase bağlantısı başarılı!',
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      // Firestore'dan veriyi oku
      const document = await testDocRef.get();

      if (document.exists) {
        const data = document.data()?.message;
        setTestData(`Firebase bağlantısı başarılı! Veri: ${data}`);
      }
    } catch (error) {
      setTestData(`Firebase bağlantı hatası: ${error.message}`);
      console.error('Firebase bağlantı hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.testText}>{testData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  testText: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
  },
});

export default App;