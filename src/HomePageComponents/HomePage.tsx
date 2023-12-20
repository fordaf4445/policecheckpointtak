import { StyleSheet, Text, View , Button  } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import Icon,{Icons} from '../Accessories/Icons';
import {Alert} from '../Accessories/Alert';

interface Data {
  id: string;
  name: string;
}

const HomePage = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const unsubscribe = firestore()
    .collection('Data')
    .onSnapshot((querySnapshotData) => {
      const DataUser: Data[] = querySnapshotData.docs.map(doc => ({
        id: doc.id,
        name: doc.data()?.name,
      }));
      setData(DataUser);
    }, (error) => {
      console.log('Error fetching data:', error);
    });

    return () => {
      unsubscribe();
    };
  }, [])
  
  if (!data) {
    return (
      <View>
        {}
      </View>
    );
  };
  return (
    <View>
      <Alert isVisible={true} textPrimary='แจ้งเตือน' textSecondary='คุณต้องการออกระบบใช่หรือไม่ ?'
      />
      {data.map( data => (
        <View key={data.id}>
          <Text>name: {data.name}</Text>
        </View>
      ))}
      <Button
      title='click'
      onPress={() => {}}/>
      <Icon type={Icons.FontAwesome} name='home' />
    </View>
  );
};

export default HomePage

const styles = StyleSheet.create({

})