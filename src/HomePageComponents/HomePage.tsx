import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import Icon, { Icons } from '../Accessories/Icons';
import { AlertCon } from '../Accessories/Alert';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from "../Navigation/StackNav";

interface Data {
  id: string;
  name: string;
}

const HomePage = () => {
  const [data, setData] = useState<Data[]>([]);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<StackNavigation>();

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
        { }
      </View>
    );
  };
  return (
    <View>
      {data.map(data => (
        <View key={data.id}>
          <Text>name: {data.name}</Text>
        </View>
      ))}
      <Button
        title='click'
        onPress={() => { navigation.navigate('ReportPage') }} />
      <Icon type={Icons.FontAwesome} name='home' />
    </View>
  );
};

export default HomePage

const styles = StyleSheet.create({

})