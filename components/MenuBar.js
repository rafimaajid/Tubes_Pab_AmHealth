import {TouchableOpacity} from 'react-native';
import { View, Text, flex, HStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from 'native-base';

// const AppNavigator = () => {
//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRoutename="Home">
//           <Stack.Screen name="Profile" component = {MyProfile}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   )
// }

const MenuBar = () => {
    return (
      <NativeBaseProvider>
        <View 
        style={{
          flexDirection: 'row', 
          backgroundColor:'#FFFFFF', 
          elevation: 10, //garis pembatas
          paddingTop: 10, //jarak atas
          paddingBottom: 10, //jarak bawah
        }}>

        <TouchableOpacity
          style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <Icon name="home" size={25} color="#3AA346" />
        <Text style={{fontSize: 13}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <Icon name="calendar" size={25} color="#bdbdbd" />
        <Text style={{fontSize: 13}}>Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <Icon name="time" size={25} color="#bdbdbd" />
        <Text style={{fontSize: 13}}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <Icon name="person" size={25} color="#bdbdbd" />
        <Text style={{fontSize: 13}}>Profile</Text>
        </TouchableOpacity>
      </View>
      </NativeBaseProvider>
    )
  }
    

export default MenuBar;