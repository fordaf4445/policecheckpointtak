import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button, Linking } from 'react-native';
import React from 'react';


type PhonebookItem = {
  id: number;
  name: string;
  numberphone: string;
}

const ReportLostCard = () => {

  const Phonebook: PhonebookItem[] = [
    { id: 1, name: 'ธนาคารกสิกรไทย', numberphone: '02-888-8888' },
    { id: 2, name: 'ธนาคาร ธอส', numberphone: '02-645-9000' },
    { id: 3, name: 'ธนาคารกรุงไทย', numberphone: '02-111-1111' },
    { id: 4, name: 'ธนาคารไทยพานิชย์', numberphone: '02-777-7777' },
    { id: 5, name: 'ธนาคารออมสิน', numberphone: '1115' },
    { id: 6, name: 'ธนาคาร UOB', numberphone: '02-285-1555' },
    { id: 7, name: 'ธนาคารกรุงศรี', numberphone: '1572' },
    { id: 8, name: 'ธนาคารเกียรตินาคิน', numberphone: '02-165-5555' },
    { id: 9, name: 'ธนาคารทหารไทย', numberphone: '1588' },
    { id: 10, name: 'ธนาคาร TISCO', numberphone: '02-633-6000' },
    { id: 11, name: 'ธนาคารกรุงเทพ', numberphone: '1333' },
    { id: 12, name: 'ธนาคารอิสลาม', numberphone: '02-206-2766' },
    { id: 13, name: 'ธนาคารธนชาต', numberphone: '1770' },
    { id: 14, name: 'ธนาคาร CIMD THAI', numberphone: '02-626-7777' },
    { id: 15, name: 'Citibank', numberphone: '1588' },
    { id: 16, name: 'ธนาคารไทยเครดิต', numberphone: '02-6975454' },
  ];

  const sunmitCall = (phoneNumber : string) => {
    const telTo = `tel:${phoneNumber}`;
    Linking.openURL(telTo);
  };

  return (
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

  )
}

export default ReportLostCard;

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