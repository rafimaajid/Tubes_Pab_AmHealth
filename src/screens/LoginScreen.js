import React, { useState } from 'react';
import { Text, Box, Input, Pressable, NativeBaseProvider,Image } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import app from '../config/firebase';
import "react-native-gesture-handler"

const LoginScreen = (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false)
   const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
   };
   const navigation = useNavigation();

const handleLogin = async () => {
   if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields', [{ text: 'OK' }]);
      return;
   }
   if (!isValidEmail(email)) {
      Alert.alert('Error', 'Isi nama pengguna dengan benar', [{ text: 'OK' }]);
      return;
   }
   setIsLoading(true)

   const auth = getAuth(app)
   try{
      const signIn = await signInWithEmailAndPassword(auth, email, password)
      if(signIn.user){
         // Panggil API login disini menggunakan informasi pengguna yang diisi
         Alert.alert('Login Berhasil', 'Selamat datang di aplikasi AmHealth', [{ text: 'OK' }]);
         
         // Pindah ke halaman OTP setelah login berhasil
         navigation.navigate('Home');
      }
   }catch (err){
      Alert.alert('Login Gagal', "Email/Password salah", [{ text: 'OK' }]);
   }
};

const handleSignUp = () => {
   navigation.navigate('Register');
};

return (
   <NativeBaseProvider>
   <Box style={styles.container}>
      <Image
         source={require('../assets/amhealth.png')} // Menunjukkan path ke gambar dari folder assets
         alt="Logo"
         style={styles.logo} // Tambahkan gaya logo sesuai kebutuhan
      />
      <Text style={styles.subtitle}>Email</Text>
      <Input
      onChangeText={text => setEmail(text)}
      value={email}
      backgroundColor="#eee"
      marginBottom="6"
      placeholder="Masukkan email anda"
      />
      <Text style={styles.subtitle}>Kata Sandi</Text>
      <Input
      onChangeText={text => setPassword(text)}
      value={password}
      backgroundColor="#eee"
      marginBottom="6"
      placeholder="Masukkan kata sandi Anda"
      secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Masuk</Text>
      </Pressable>
      <Pressable style={styles.signUpButton} onPress={handleSignUp}>
      <Text style={styles.signUpButtonText}>Signup</Text> 
      <Text style={styles.haveAccountText}>Didn't have an account ?</Text>

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
button: {
   backgroundColor: '#006400',
   paddingHorizontal: 16,
   paddingVertical: 12,
   borderRadius: 4,
   marginBottom: 12,
},
buttonText: {
   fontSize: 18,
   color: '#fff',
   textAlign: 'center',
},
signUpButton: {
   borderRadius: 2,
   borderColor: '#006400',
   paddingHorizontal: 8,
   paddingVertical: 6,
},
signUpButtonText: {
   fontSize: 12,
   color: '#006400',
   textAlign: 'center',
},
haveAccountText: {
   marginTop: 10, // Sesuaikan dengan kebutuhan desain Anda
   fontSize: 12,
   color: '#111',
},
});

export default LoginScreen;