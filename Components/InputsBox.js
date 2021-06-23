
import React from 'react';
import {Pressable, TextInput, StyleSheet, Text, View, SafeAreaView, Dimensions, Image} from 'react-native';
import { useFonts } from 'expo-font';

const ScreenWidth = parseInt(Dimensions.get("window").width)-16;

export default function InputsBox() {

    const [loaded] = useFonts({
        'pt-root-ui-bold': require('../assets/fonts/PT-Root-UI_Bold.ttf'),
        'pt-root-ui-light': require('../assets/fonts/PT-Root-UI_Light.ttf'),
        'pt-root-ui-medium': require('../assets/fonts/PT-Root-UI_Medium.ttf'),
        'pt-root-ui-regular': require('../assets/fonts/PT-Root-UI_Regular.ttf'),
    });

    const [firstName, setFirstName] = React.useState(false);
    const [lastName, setLastName] = React.useState(false);
    const [phone, setPhone] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [telegram, setTelegram] = React.useState(false);
    const [press, setPress] = React.useState(false);

    if (!loaded) {
        return null;
    }

    const allInputsFilledCheck = () =>{
        return (firstName.length >= 1 && lastName.length >= 1 && phone.length >= 1 && email.length >= 1 && telegram.length >= 1)
    }

    const connectToSocialNetworkRender = () => {
        if(telegram.length >= 1){
            return (<Image style={[{marginTop: 40},styles.gifs]} source={require('../assets/Gifs/blue.gif')} />)
        }
        else {
            return (<Text style={styles.connectText}>Connect</Text>)
        }

    }

    const renderButton =()=>{
        if(allInputsFilledCheck()){
            return (
            <View style={styles.buttonHolder}>
                <Pressable
                    style={({pressed , onPressIn}) =>
                        [{backgroundColor: onPressIn ? '#015593' : '#0088CC'},
                            {backgroundColor: pressed ? '#004473' : '#0088CC'},
                            styles.saveButton]
                    }
                    onPress={()=> setPress(true)}
                >

                    {press
                        ? <Image style={styles.gifs} source={require('../assets/Gifs/white.gif')} />
                        : <Text style={{fontSize: 16, fontFamily: 'pt-root-ui-medium', color: '#EBEDEE',height: 25,
                        width: 40}}>Save</Text>
                    }

                </Pressable>
            </View>
            )}
        else{
            return(
                <View style={styles.buttonHolder}>
                    <View style={[{backgroundColor: '#DDE1E2'}, styles.saveButton]}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'pt-root-ui-medium',
                            color: '#EBEDEE'}}>Save
                        </Text>
                    </View>
                </View>
            )
        }
    }

    return (
            <View style={styles.flexContainer}>
                <SafeAreaView>
                    <View style={[{borderBottomColor: firstName ? '#0088CC' : '#DDE1E2'},styles.inputBox]}>
                    <TextInput
                        onFocus={() => setFirstName(true)}
                        // onBlur={() => setFirstName(false)}
                        selectionColor='black'
                        style={styles.input}
                        onChangeText={setFirstName}
                        placeholder="First Name"
                    />
                    </View>
                    <View style={[{borderBottomColor: lastName ? '#0088CC' : '#DDE1E2'},styles.inputBox]}>
                    <TextInput
                        onFocus={() => setLastName(true)}
                        // onBlur={() => setLastName(false)}
                        selectionColor='black'
                        style={styles.input}
                        onChangeText={setLastName}
                        placeholder="Last Name"
                    />
                    </View>
                    <View style={[{borderBottomColor: phone ? '#0088CC' : '#DDE1E2'},styles.inputBox]}>
                    <TextInput
                        onFocus={() => setPhone(true)}
                        // onBlur={() => setPhone(false)}
                        selectionColor='black'
                        style={styles.input}
                        onChangeText={setPhone}
                        placeholder="Phone"
                        keyboardType="numeric"
                    />
                    </View>
                    <View style={[{borderBottomColor: email ? '#0088CC' : '#DDE1E2'},styles.inputBox]}>
                    <TextInput
                        onFocus={() => setEmail(true)}
                        // onBlur={() => setEmail(false)}
                        selectionColor='black'
                        style={styles.input}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Email"
                    />
                    </View>
                    <View style={[{borderBottomColor: telegram ? '#0088CC' : '#DDE1E2'},styles.inputSocialNetwork]}>
                    <TextInput
                        onFocus={() => setTelegram(true)}
                        // onBlur={() => setTelegram(false)}
                        selectionColor='black'
                        style={[{width: 250},styles.input]}
                        onChangeText={setTelegram}
                        placeholder="Telegram"
                    />

                     {connectToSocialNetworkRender()}
                    </View>
                </SafeAreaView>
                {renderButton()}
            </View>

    );
}

const styles = StyleSheet.create({

    flexContainer:{
        flexDirection: 'column',
        top: 170,
        backgroundColor: '#fafafa'
    },

    input: {
        fontSize: 18,
        marginTop: 39,
        fontFamily: 'pt-root-ui-regular',
        paddingBottom: 8,
    },

    inputBox:{
        borderBottomWidth: 1,
        width: ScreenWidth -16,
    },

    inputSocialNetwork:{
        borderBottomWidth: 1,
        width: ScreenWidth -16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    connectText:{
        fontSize: 16,
        color: '#0088CC',
        paddingTop: 40,
    },

    saveButton:{
        width: ScreenWidth -16,
        height: 48,
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
    },

    buttonHolder:{
        paddingTop: 63
    },

    gifs:{
        height: 25,
        width: 25
    }

});
