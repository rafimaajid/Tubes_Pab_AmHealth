import React, { useState } from 'react';
import {Box, Text, Input, Pressable, NativeBaseProvider, Image} from "native-base"
import { StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from '../config/firebase';
import "react-native-gesture-handler"


const RegisterScreen = (props) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false)
   const navigation = useNavigation();

const isValidName = (name) => {
   return /^[A-Za-z\s]+$/.test(name);
};
const isValidEmail = (email) => {
   const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return re.test(String(email).toLowerCase());
};
const isValidPhoneNumber = (phoneNumber) => {
   const re = /^[0-9]+$/;
   return re.test(phoneNumber);
};

const handleRegistration = async () => {
   if (!email || !phoneNumber || !name || !password) {
      Alert.alert('Error', 'Please fill all fields', [{ text: 'OK' }]);
      return;
   }
   if (!isValidName(name)) {
      Alert.alert('Error', 'Nama pengguna tidak boleh mengandung angka', [{ text: 'OK' }]);
      return;
   }
   if (!isValidEmail(email)) {
      Alert.alert('Error', 'Alamat email tidak valid', [{ text: 'OK' }]);
      return;
   }
   if (!isValidPhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Nomor telepon harus berupa angka', [{ text: 'OK' }]);
      return;
   }
   setIsLoading(true)

   const auth = getAuth(app)
   const db = getFirestore(app)

   const registerToProvider = await createUserWithEmailAndPassword(auth, email, password)
   if(registerToProvider){
      const addUserToDB = await addDoc(collection(db, "users"), {
         name: name,
         email: email,
         phone: phoneNumber
      });
      if(addUserToDB){
         // Panggil API registrasi disini menggunakan informasi pengguna yang diisi
         Alert.alert('Pendaftaran Berhasil', 'Silakan cek email Anda untuk aktivasi akun', [{ text: 'OK' }]);
         navigation.navigate('Login');
      }
   }
};

return (
   <NativeBaseProvider>
   <Box style={styles.container}>
      <Image
         source={require('../assets/amhealth.png')} // Menunjukkan path ke gambar dari folder assets
         alt="Logo"
         style={styles.logo} // Tambahkan gaya logo sesuai kebutuhan
      />
      <Text style={styles.subtitle}>Nama</Text>
      <Input
      backgroundColor="#eee"
      marginBottom="6"
      onChangeText={text => setName(text)}
      value={name}
      placeholder="Masukkan nama Anda"
      />
      <Text style={styles.subtitle}>Nomor Telepon</Text>
      <Input
      backgroundColor="#eee"
      marginBottom="6"
      onChangeText={text => setPhoneNumber(text)}
      value={phoneNumber}
      placeholder="Masukkan nomor telepon Anda"
      />
      <Text style={styles.subtitle}>Email</Text>
      <Input
      backgroundColor="#eee"
      marginBottom="6"
      onChangeText={text => setEmail(text)}
      value={email}
      placeholder="Masukkan alamat email Anda"
      />
      <Text style={styles.subtitle}>Kata Sandi</Text>
      <Input
      backgroundColor="#eee"
      marginBottom="6"
      onChangeText={text => setPassword(text)}
      value={password}
      placeholder="Masukkan kata sandi Anda"
      secureTextEntry
      />
      <Pressable isDisabled={isLoading} style={styles.button} onPress={handleRegistration}>
      <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
   </Box>
   </NativeBaseProvider>
);
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 32,
      paddingVertical: 128,
   },
   title: {
      fontSize: 32,
      color: '#111',
      marginBottom: 12,
   },
   logo: {
      width: 300,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',      
      marginBottom: 40,
   },
   subtitle: {
      fontSize: 18,
      color: '#111',
      marginBottom: 12,
   },
   input: {
      backgroundColor: '#eee',
      borderRadius: 4,
      marginBottom: 12,
   },
   button: {
      backgroundColor: '#006400',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 4,
   },
   buttonText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
   },
});

export default RegisterScreen;