import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const Appointment = ({navigation}) => {

    const [data, setData] = useState([
        {
            namaPoli: 'Poli Umum', 
            namaDokter: 'dr. Devianto Dwi P',
        },
        {
            namaPoli: 'Poli Umum', 
            namaDokter: 'dr. Ferry Santoso',
        },
        {
            namaPoli: 'Poli Umum', 
            namaDokter: 'dr. Maya Ayu E',
        },
        {
            namaPoli: 'Poli Umum', 
            namaDokter: 'dr. Sheilla Fauziah Alex',
        },
        {
            namaPoli: 'Poli Umum', 
            namaDokter: 'dr. Tanto Iswahyudi',
        },
        {
            namaPoli: 'Poli Gigi', 
            namaDokter: 'drg. Esti Indrias Putri',
        },
        {
            namaPoli: 'Poli KIA', 
            namaDokter: 'Bidan. Khoirotun Masrifah, S.Tr. Keb',
        },
    ]);

    //data khusus filter
    const [dataTampil, setDataTampil] = useState(data)

    const [filter, setFilter] = useState([
        {namaFilter: 'Poli Umum', tipe:'namaPoli'},
        {namaFilter: 'Poli Gigi', tipe:'namaPoli'},
        {namaFilter: 'Poli KIA', tipe:'namaPoli'},
    ]);

    //function untuk filter
    function filterData (item)
    {
        let dataHasilFilter = [...data]

        if(item.tipe=='namaPoli')
        {
          dataHasilFilter = dataHasilFilter.filter(x => x.namaPoli == item.namaFilter);
        }
        if(item.tipe==data)
        {
          dataHasilFilter = dataHasilFilter.filter(x => x.data == item.data);
        }

        setDataTampil(dataHasilFilter);
    }

    return (

      <View style={{flex: 1}}>
        <Text style={{marginTop: 40, marginVertical: 10, marginHorizontal:20, textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>AM Health</Text>
        <Text style={{marginHorizontal:20}}>Selamat datang di AM Health!</Text> 
        <Text style={{marginHorizontal:20}}>Aplikasi mobile yang memudahkan Anda untuk membuat janji temu dengan dokter.</Text>
        <View style={{marginHorizontal:15, marginBottom: 5}}>
        <FlatList
          horizontal
          data={filter}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                marginTop: 10,
                backgroundColor: '#4FBE00',
                elevation: 1,
                height: 30,
                paddingHorizontal: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => filterData(item)}
              >
              <Text>{item.namaFilter}</Text>
            </TouchableOpacity>
          )}
        />  
      </View>

        <FlatList
          data={dataTampil}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={{
                marginHorizontal:20,
                marginTop: 10,
                backgroundColor: 'white',
                elevation: 2,
                paddingVertical: 10,
                paddingLeft: 10,
              }}
              onPress={() => navigation.navigate("DATE1")}
            >
              <Text style={{fontWeight: 'bold'}}>{item.namaDokter}</Text>
              <Text>{item.namaPoli}</Text>
            </TouchableOpacity>
          )} 
        />
      </View>
    );
};

export default Appointment;