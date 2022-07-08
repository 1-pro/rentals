import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const OnBoardScreen = () => {
  return <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <Image source={require('../../assets/onboardImage.jpg')}/>
  </SafeAreaView>;
};

const style = StyleSheet.create({});
export default OnBoardScreen;
  