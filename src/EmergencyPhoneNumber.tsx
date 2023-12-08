import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';

type PhonebookItem = {
  id: number;
  name: string;
  numberphone: string;
}


const EmergencyPhoneNumber = () => {

  const Phonebook: PhonebookItem[] = [
    { id: 1, name: 'แจ้งเหตุด่วน เหตุร้าย', numberphone: '911' },
    { id: 2, name: 'แจ้งเหตุเพลิงไหม้', numberphone: '199' },
    { id: 3, name: 'ศูนย์ปราบปรามโจรกรรมรถ', numberphone: '1192' },
    { id: 4, name: 'สายด่วนช่วยเหลือสังคม', numberphone: '1300' },
    { id: 5, name: 'มูลนิธิป่อเต็กตึ๊ง (ศูนย์วิทยุกรุงเทพ)', numberphone: '1418' },
    { id: 6, name: 'หน่วยแพทย์กู้ชีวิต วชิรพยาบาล', numberphone: '1554' },
    { id: 7, name: 'ศูนย์เอราวัณ กรุงเทพ', numberphone: '1646' },
    { id: 8, name: 'เจ็บป่วยฉุกเฉิน(ทั่วประเทศ)', numberphone: '1669' },
    { id: 9, name: 'กรมป้องกันและบรรเทาสาธารณภัย', numberphone: '1784' },
    { id: 10, name: 'จส.100', numberphone: '1137' },
    { id: 11, name: 'ตำรวจท่องเที่ยว', numberphone: '1155' },
    { id: 12, name: 'ตำรวจทางหลวง', numberphone: '1193' },
    { id: 13, name: 'กองปราบปราม', numberphone: '1195' },
    { id: 14, name: 'อุบัติเหตุทางน้ำ', numberphone: '1196' },
    { id: 15, name: 'ขสมก.', numberphone: '1348' },
    { id: 16, name: 'การทางพิเศษแห่งประเทศไทย', numberphone: '1543' },
    { id: 17, name: 'สายด่วนกรมทางหลวง', numberphone: '1586' },
    { id: 18, name: 'ศูนย์บริการข่าวสารท่องเที่ยว', numberphone: '1672' },
    { id: 19, name: 'การประปานครหลวง', numberphone: '1125' },
  ];

  const sunmitCall = (phoneNumber : string) => {
    const telTo = `tel:${phoneNumber}`;
    Linking.openURL(telTo);
  };

  return (
    <NativeBaseProvider>
    <ScrollView style={styles.container}>
      <View >
        {Phonebook.map(phoneData => (
          <TouchableOpacity key={phoneData.id} style={styles.phonebookContainer} onPress={() => {sunmitCall(phoneData.numberphone)}}>
            <View>
              <Text style={styles.fontTitles}>
                {phoneData.name}
              </Text>
              <Text style={styles.fontNumberPhone}>
                {phoneData.numberphone}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    </NativeBaseProvider>
  )
}

export default EmergencyPhoneNumber

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  phonebookContainer: {
    borderWidth: 1,
    marginTop: 10,
  },
  fontTitles: {
    fontFamily: 'NotoSansThai_SemiCondensed-SemiBold',
    fontSize: 18,
  },
  fontNumberPhone: {
    fontFamily: 'NotoSansThai-Regular',
    fontSize: 18,
    color: 'red',

  },
});