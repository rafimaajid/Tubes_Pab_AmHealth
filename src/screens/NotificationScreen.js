import React, { useState, useEffect } from 'react';
import app from '../config/firebase';
import {getAuth} from "firebase/auth";
import {Box, Text, FlatList, Pressable, NativeBaseProvider} from "native-base"
import { StyleSheet, ActivityIndicator } from 'react-native';
import { getFirestore, collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';

const NotificationScreen = (props) => {
 const [notifications, setNotifications] = useState([]);
 const [markedAsRead, setMarkedAsRead] = useState(false);
 const [isLoading, setIsLoading] = useState(false);

 const calculateTime = (timestamp) => {
   const currentTime = new Date();
   const postTime = new Date(timestamp * 1000); // Convert to milliseconds

   const timeDifferenceInSeconds = Math.floor((currentTime - postTime) / 1000);

   if (timeDifferenceInSeconds < 60) {
       return `${timeDifferenceInSeconds} seconds ago`;
   } else if (timeDifferenceInSeconds < 3600) {
       const minutesAgo = Math.floor(timeDifferenceInSeconds / 60);
       return `${minutesAgo} minutes ago`;
   } else if (timeDifferenceInSeconds < 86400) {
       const hoursAgo = Math.floor(timeDifferenceInSeconds / 3600);
       return `${hoursAgo} hours ago`;
   } else {
       const daysAgo = Math.floor(timeDifferenceInSeconds / 86400);
       return `${daysAgo} days ago`;
   }
}

 useEffect(() => {
   // Anda bisa menggantikan data di bawah ini dengan data asli Anda
   setIsLoading(true)
   const interval = setInterval(() => {
      const auth = getAuth(app)
      const db = getFirestore(app)
      getDocs(query(collection(db, "notifications"), where("email", "==", auth.currentUser.email)))
         .then((snapshot) => {
            setNotifications(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})).sort((a,b) => a.time.seconds - b.time.seconds))
            setIsLoading(false)
         }) 
   }, 10000)
 }, []);

 const handleMarkAllAsRead = () => {
    setMarkedAsRead(true);

    const updatedNotifications = notifications.map(async notification => {
      if(!notification.isRead){
         const db = getFirestore(app)
         const setChangeNotification = await updateDoc(doc(db, `notifications/${notification.id}`), {isRead: true})
      }
      return {
         ...notification,
         time: {nanoseconds: notification.time.nanoseconds, seconds: notification.time.seconds},
         isRead: true,
      }
   });
   setNotifications(updatedNotifications.map(item => item._j));
 };

 const renderItem = ({ item }) => (
    <Box style={styles.item} key={item.id}>
      {/* <Image source={require('./assets/notification.png')} style={styles.notificationIcon} /> */}
      <Box style={styles.content}>
        <Text style={[styles.title, item.isRead && styles.readTitle]}>{item.title}</Text>
        <Text style={[styles.time, item.isRead && styles.readTime]}>{calculateTime(item.time.seconds)}</Text>
      </Box>
    </Box>
 );

 return (
   <NativeBaseProvider>
    <Box style={styles.container}>
      { isLoading ?
         <Box style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" color="#007bff" />
         </Box>
         :
         <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={item => item.id}
         />
      }
      <Pressable style={styles.markAllButton} onPress={handleMarkAllAsRead}>
        <Text style={styles.markAllText}>Mark all as read</Text>
      </Pressable>
    </Box>
    </NativeBaseProvider>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
 },
 item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
 },
 content: {
    marginLeft: 15,
 },
 title: {
    fontSize: 16,
    fontWeight: 'bold',
 },
 time: {
    fontSize: 14,
    color: '#666',
 },
 readTitle: {
    fontWeight: 'normal',
 },
 readTime: {
    color: '#999',
 },
 notificationIcon: {
    width: 30,
    height: 30,
 },
 markAllButton: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    marginTop: 10,
 },
 markAllText: {
    color: '#fff',
    fontSize: 16,
 },
});

export default NotificationScreen;