import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';

export const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon
        type="font-awesome-5"
        name="bars"
        size={22}
        color="black"
        onPress={() => navigation.toggleDrawer()}
      />

      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Eunomart</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 55,
    padding: 10,
    paddingHorizontal: 20,
    paddingLeft: 12,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2.5,
    borderWidth: 0,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    textTransform: 'uppercase',
    color: '#000',
    textAlign: 'center',
  },
});
