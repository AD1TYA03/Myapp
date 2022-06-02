

   
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
  position:'absolute',
  top:10,
  zIndex:100,
  flexDirection:'row',
 alignItems:'center',
  justifyContent:'space-between',
  width:"100%",
  paddingHorizontal:20,
  },
  logo:{
width:"100px",
height:"50px",
resizeMode:"contain",

// marginLeft:'30px',
  },
  menu:{
    width:"25px",
    height:"25px",
    resizeMode:"contain",
    // marginRight:'30px',
    
  },
});

export default styles;