import AsyncStorage from '@react-native-community/async-storage';
export const almacenar = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('error:'+error)
    }
};
export const obtener = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        console.log('Variable Global->key:'+key+',valor:'+value);
        return value;
      }
    } catch (error) {
        console.log('error:'+error)
      // Error retrieving data
    }
  };
