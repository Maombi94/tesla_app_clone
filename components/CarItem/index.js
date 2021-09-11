import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons'

const CarItem = () => {
    return (
      <View style={styles.CarContainer}>
          <ImageBackground 
            source={require("../../assets/background.png")}
            style={styles.backgroundImage}
            />
        <View style={styles.header}>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24}/>
           <Text style={styles.headerTitle}>Tesla car </Text>
          <FontAwesomeIcon  style={styles.icon} icon={faToolbox} size={24} />
        </View>

        <View style={styles.batterySection}>
          <Image source={require("../../assets/icon.png")}
                 style={styles.batteryImage}
           />
           <Text style={styles.batteryText}> 150 mi</Text>
        </View>
          
      </View>
    );
};

export default CarItem;