import { View, Text , ImageBackground} from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../styledButton'


const carItem = (props) => {
    const {name , tagline ,taglineCTA , image}=props.cars;
  return (
    <View style={styles.carContainer}>
    <ImageBackground source={image} style={styles.image}/>
   <View style={styles.titles}>

<Text style={styles.title}>{name}</Text>
<Text style={styles.subtitle}>
{tagline}
{' '}
<Text style={styles.subtitleCTA}>
{taglineCTA}
</Text>
</Text>

<View style={styles.buttonContainer}> 
<StyledButton type ="primary" content="CUSTOM ORDER" onPress={()=>{
      console.log("custom order was pressed");
      }}/>
        <StyledButton type ="secondry" content="EXISTING INVENTORY" onPress={()=>{
      console.log("existing Enventory was pressed");
      console.log(image);
      }}/>
      </View>
   </View>

   </View>
  )
}

export default carItem