import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import CarItem from './components/carItems/index';
import CarsList from './components/carsList';


export default function App() {
  return (
    <View style={styles.container}>
     {/* <CarItem name ={"Tesla X"} tagline={"Starting at Awkat se bahar"} image={require('./assets/images/ModelX.jpeg')}
       taglineCTA={"Touchless Delivery"}

     />   */}
   <CarsList/>

      
    

      
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

