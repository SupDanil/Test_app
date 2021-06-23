
import React, {useEffect,useState} from 'react';
import {Image,StyleSheet, Text, View, TouchableOpacity, Alert, Platform} from 'react-native';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

export default function ImageLoader() {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    const [loaded] = useFonts({
        'pt-root-ui-bold': require('../assets/fonts/PT-Root-UI_Bold.ttf'),
        'pt-root-ui-light': require('../assets/fonts/PT-Root-UI_Light.ttf'),
        'pt-root-ui-medium': require('../assets/fonts/PT-Root-UI_Medium.ttf'),
        'pt-root-ui-regular': require('../assets/fonts/PT-Root-UI_Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View>
            <View style={styles.flexContainer}>

                {image === null ? <View style={styles.imageCircle}/> :  <Image source={{ uri: image }} style={styles.imageCircle} />}
                <TouchableOpacity
                    style={styles.touchZone}
                    onPress={pickImage}
                >
                <Text style={styles.uploadPhotoText}>Upload photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer:{
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        top: 160
    },

    imageCircle:{
        backgroundColor: '#fafafa',
        width: 64,
        height: 64,
        borderRadius:50,
        borderWidth: 2,
        borderColor: '#0088CC',
    },

    uploadPhotoText:{
        color: '#0088CC',
        fontFamily: 'pt-root-ui-medium',
        fontSize: 16,
        paddingTop: 25,
        paddingLeft: 16,
    },

});
