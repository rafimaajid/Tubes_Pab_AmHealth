import { Heading, Center,View, Alert, Button, Text, TouchableOpacity, Modal } from "react-native";
import { Header } from "../../components";
import React from "react";
import view from "native-base/src/theme/components/view";

//ini adalah program popup confim, untuk menyesuaikan dengan codingan yang ada
const transparent = 'rgba(0,0,0,0.5)';

const Confirm = () => {
    const [openModal, setOpenModal] = React.useState(false);

    function renderModal(){
        return (
            <Modal visible={openModal} animationType="slide" transparent={true}>
                <view 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: transparent,
                }}>
                    <View 
                    style={{
                        backgroundColor: 'white',
                        padding: 15,
                        width:'90%',
                        height: 150,
                        borderRadius: 10,
                    }}>
                        <TouchableOpacity onPress={() => setOpenModal(false)}>
                            <Text style={{color: 'black'}}>close</Text>
                        </TouchableOpacity>
                        <Text style={{color: 'black', fontSize:18, marginTop: 15}}>
                            Appoinrment Success
                        </Text>
                    </View>
                </view>
            </Modal>
        );
    }

    return (
        <View
        style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text
            style={{
                fontSize: 40,
                textTransform: 'capitalize',
                textAlign: 'center',
                fontWeight: '600',
                color: 'black',
            }}>
                popUp Confirm
            </Text>
            <TouchableOpacity
            style={{
                marginTop: 20,
                backgroundColor: '#3E8E00',
                borderRadius: 8,
                padding: 10,
            }}
            ></TouchableOpacity>
        </View>
    )
    
};

export default Confirm;
