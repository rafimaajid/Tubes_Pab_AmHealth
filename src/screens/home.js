import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, ScrollView, Text } from "native-base";
import { StyleSheet, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, Box, Heading } from 'native-base';
import MenuBar from '../../components/MenuBar';
import { SafeAreaView } from 'react-native-safe-area-context';

// const AppNavigator = () => {
//     return (
//         <NativeBaseProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRoutename="Home">
//           <Stack.Screen name="Profile" component = {MyProfile}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   )
// }

const Home = ({navigation}) => {
  return (
    <NativeBaseProvider>

      <View style={{flex:9, marginTop:5, marginLeft:15, marginRight:15, }}>

        <Text bold marginTop={2} fontSize={30}>
          Find Your Doctor
        </Text>
        <Text>Book an appointment with Doctor</Text>

        <TouchableOpacity onPress={() => navigation.navigate("DetailClinic")}>
        <Box bgColor={'#bdbd'} mt={5} h={150} borderRadius={'10'}>
          <Image source={{
            uri: "https://i.pinimg.com/564x/36/a7/54/36a754bb0683784d982d3c23c3cde7a2.jpg"
              }} alt="Hospital Animation" size="xl" />
          <Text bold fontSize={18} mt={35} textAlign={'center'}>AM Klinik</Text>
          <Text fontSize={12} textAlign={'center'}>Details Clinic</Text>
        </Box>
        </TouchableOpacity>

        <Heading textAlign='center' mt={5}>Top Favorite Doctors</Heading>

        <Box bgColor={'#bdbd'} mt={3} h={70} borderRadius={'10'} >
          <Text bold fontSize={18} ml={3} mt={1.5}>dr. Devianto Dwi P</Text>
          <Text ml={3} fontSize={12}>Spesialis Poli Umum</Text>
        </Box>

        <Box bgColor={'#bdbd'} mt={3} h={70} borderRadius={'10'} >
          <Text bold fontSize={18} ml={3} mt={1.5}>dr. Salsabilla Nur</Text>
          <Text ml={3} fontSize={12}>Spesialis Poli Umum</Text>
        </Box>

        <Box bgColor={'#bdbd'} mt={3} h={70} borderRadius={'10'} >
          <Text bold fontSize={18} ml={3} mt={1.5}>drg. Esti Indrias Putri</Text>
          <Text ml={3} fontSize={12}>Spesialis Poli Gigi</Text>
        </Box>

        <Box bgColor={'#bdbd'} mt={3} h={70} borderRadius={'10'} >
          <Text bold fontSize={18} ml={3} mt={1.5}>Bd. Khoirotun Masrifah, S.Tr.Keb</Text>
          <Text ml={3} fontSize={12}>Spesialis Poli KIA</Text>
        </Box>

      </View>
      
      
      <MenuBar/>

      </NativeBaseProvider>
    )
}

export default Home;