import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import AppHeader from './AppHeader';
import { Audio } from 'expo-av';
export default class PhonicSoundButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
            pressedButtonIndex:'',
            goPressed:0
        }
    }
    
    playSound = async (soundChunk) => {
        var soundLink = 'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' + soundChunk + '.mp3'
        await Audio.Sound.createAsync({
            uri:soundLink
        },
        {
            shouldPlay:true
        })
    }
    render() {
        return (
            <TouchableOpacity style = {
                this.props.buttonIndex===this.state.pressedButtonIndex && this.props.gop===this.state.goPressed?
                [styles.ansButton,{backgroundColor:'white'}]:[styles.ansButton,{backgroundColor:'red'}]
            } onPress={()=>{
                this.playSound(this.props.soundChunk)
                this.setState({
                    pressedButtonIndex:this.props.buttonIndex,
                    goPressed:this.props.gop
                })
            }}>
                <Text style = {
                     this.props.buttonIndex===this.state.pressedButtonIndex && this.props.gop===this.state.goPressed ?
                     [styles.buttonText,{color:'red'}]:[styles.buttonText,{color:'white'}]
                }>{this.props.wordChunk}</Text>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    ansButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        borderRadius: 10,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent:'center',
        marginTop:3,
        color:'white'
      },
});