
import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import ImageLoader from "./Components/ImageLoader";
import InputsBox from "./Components/InputsBox";

export default function App() {

    const [loaded] = useFonts({
        'pt-root-ui-bold': require('./assets/fonts/PT-Root-UI_Bold.ttf'),
        'pt-root-ui-light': require('./assets/fonts/PT-Root-UI_Light.ttf'),
        'pt-root-ui-medium': require('./assets/fonts/PT-Root-UI_Medium.ttf'),
        'pt-root-ui-regular': require('./assets/fonts/PT-Root-UI_Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

  return (
      <ScrollView>
          <View style={styles.container}>
              <View style={styles.textHolder}>
                  {/*Did this because the point over the letter i disappears*/}
                    <Text style={{fontSize: 24, fontFamily: 'pt-root-ui-bold'}}>Edit Prof</Text>
                    <Text style={{fontSize: 24, fontFamily: 'pt-root-ui-bold'}}>ile</Text>
                </View>
                <Image
                    style={styles.arrowLeft}
                    source={require('./assets/profile/shape.png')}
                />
                <ImageLoader />
                <InputsBox />
            </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#fafafa',
    alignItems: 'flex-start',
      paddingLeft: 16,
      flexDirection: 'column',
    justifyContent: 'flex-start',
      height: 1000
  },

    text: {
     fontFamily: 'pt-root-ui-bold'
  },

    arrowLeft:{
        backgroundColor: '#fafafa',
        top: 50,
        width: 20,
        height: 16,
        paddingLeft: 16,
    },

    textHolder:{
        position: 'absolute',
        top: 100,
        fontSize: 24,
        flexDirection: 'row',
        paddingLeft: 16,
        fontFamily: 'pt-root-ui-bold'
    }
});
