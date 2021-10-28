import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigate = (name: any) => {
    navigate(name)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => handleNavigate('FirstExample')}>
        <Text style={styles.textItem}>
          First Animation :D
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handleNavigate('PanAnimation')}>
        <Text style={styles.textItem}>
          Pan Animations :D
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  item: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 3,
    borderColor: 'gray',
    backgroundColor: 'blue',
    marginBottom: 5
  },
  textItem: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})
