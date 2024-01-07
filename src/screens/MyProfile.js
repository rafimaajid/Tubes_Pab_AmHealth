import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider, Text, Heading, Box, ScrollView, Avatar, Divider, Button } from 'native-base';

const MyProfile = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
      <ScrollView>
        <Heading textAlign="center" mt="10">
          My Profile
        </Heading>
        <Avatar bg="purple.600" alignSelf="center" size="2xl" mt="5" source={{
        uri: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }}>
        </Avatar>
        
        <Box bgColor={'white'} mr={5} ml={5} mt={8} h={380} borderRadius={'20'} >    
            <Box ml={5} mr={5} mt={7}>
            <Text bold fontSize={"lg"} mb={1}>
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
            <Text bold fontSize={"lg"} mb={1}mt={2}>
              Phone Number
            </Text>
            <Text mb={1}>
              08123345879687
            </Text>
            <Divider/>
            <Text bold fontSize={"lg"} mb={1}mt={2}>
              Gmail
            </Text>
            <Text mb={1}>
              annisalma2217@gmail.com
            </Text>
            <Divider/>
            <Text bold fontSize={"lg"} mb={1}mt={2}>
              Date Of Birth
            </Text>
            <Text mb={1}>
              17 July 2000
            </Text>
            <Divider/>
            </Box>
        </Box>

        <Box alignItems={'center'} mt={5}>
          <Button w={200} borderRadius={15} onPress={() => navigation.navigate("EditProfile")}>
            Edit Profile
          </Button>
        </Box>

        <Box alignItems={'center'} mt={3} mb={9}>
          <Button w={200} borderRadius={15}>
            Log out
          </Button>
        </Box>

        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default MyProfile;
