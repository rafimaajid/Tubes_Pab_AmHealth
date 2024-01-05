import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text } from "native-base";
import { StyleSheet, View, TextInput, TouchableOpacity,} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, Box, Heading, } from 'native-base';
import MenuBar from '../../components/MenuBar';

const DetailClinic = () => {
    return (
        <SafeAreaView>
            <ScrollView>
            <Heading textAlign={'center'} mt={5} mb={3}> Details Clinic</Heading>
            {/* image clinic ya kalo bisa */}
            <Image alignSelf="center" size="xl" source={{
                uri: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} alt="Klinik AM" size="xl" 
                style={{ width: 330, height: 200, borderRadius: 10 }}/>

            <Box bgColor={'white'} mr={5} ml={5} mt={30} mb={30} h={465} borderRadius={'20'}>
                <Heading mt={5} ml={5}>About</Heading>
                <Text ml={5} mr={5} textAlign={'justify'}>Azka Medika merupakan klinik kesehatan atau kecantikan yang menyediakan banyak layanan untuk masyarakat yang berada di sekitar.
                Klinik ini memiliki banyak layanan kesehatan, diantaranya yakni :
                {'\n'} 1. UGD 24 Jamur
                {'\n'} 2. Rawat Inap
                {'\n'} 3. Pemeriksaan Umum
                {'\n'} 4. Pemeriksaan Kehamilan & Imunisasi
                {'\n'} 5. Laboratorium
                {'\n'} 6. Khitan</Text>

                <Heading mt={30} ml={5}>Address</Heading>
                <Text ml={5} mr={5} textAlign={'justify'}>Azka Medika merupakan klinik yang berlokasi di Jawa Timur 61271, Kabupaten Sidoarjo, Kec. Candi, Durung Wetan, Durungbanjar,
                 Agal-Agil RT10 RW02</Text>

                 <Heading mt={30} ml={5}>Contact</Heading>
                <Text ml={5} mr={5} mb={5} textAlign={'justify'}>Wa:085335476174{'\n'}Telp: 03199701680</Text>
            </Box>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailClinic;