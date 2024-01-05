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

const EditProfile = () => {

    return (
      <NativeBaseProvider>
        <SafeAreaView>
          <ScrollView>
          <Heading textAlign="center" mt="10">
            Edit My Profile
          </Heading>
          <Avatar bg="purple.600" alignSelf="center" size="2xl" mt="5" source={{
          uri: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}>
          <Avatar.Badge bg="green.500"/>
          </Avatar>
      
          <Box bgColor={'white'} mr={5} ml={5} mt={8} h={370} borderRadius={'20'} >
          <Box ml={5} mr={5} mt={7}>
              <Text bold fontSize={"lg"} mb={2}>
                Name
              </Text>
              <Text mb={1}>
                Annisa Nur Salsabilla
              </Text>
              <Divider/>
              <Text bold fontSize={"lg"} mb={8}mt={2}>
                Address
              </Text>
              <Divider/>
              <Text bold fontSize={"lg"} mb={2}mt={2}>
                Phone Number
              </Text>
              <Text mb={1}>
                08123345879687
              </Text>
              <Divider/>
              <Text bold fontSize={"lg"} mb={2}mt={2}>
                Gmail
              </Text>
              <Text mb={1}>
                annisalma2217@gmail.com
              </Text>
              <Divider/>
              <Text bold fontSize={"lg"} mb={2}mt={2}>
                Date Of Birth
              </Text>
              <Text mb={1}>
                17 July 2000
              </Text>
              <Divider/>
              </Box>
          </Box>
  
          <Box alignItems={'center'} mt={5}>
            <Button w={200} borderRadius={15}>
              Save
            </Button>
          </Box>
          
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
    );
  }
  
  export default EditProfile;