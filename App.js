import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import AppHeader from "./AppHeader";
import db from "./localdb";
import PhonicSoundButton from "./phonicSound";
console.log(db["the"].chunks);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
      phones: [],
      goPressed: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <Image
          style={styles.img}
          source={{
            uri:
              "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]
              ? (this.setState({ chunks: db[word].chunks }),
                this.setState({ phones: db[word].phones }),
                this.setState({ goPressed: this.state.goPressed + 1 }))
              : Alert.alert("The word doesn't exist in the database");
          }}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phones[index]}
                buttonIndex={index}
                gop={this.state.goPressed}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1a9a0",
  },
  inputBox: {
    width: "80%",
    alignSelf: "center",
    height: 60,
    textAlign: "center",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 25,
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  displayText: {
    textAlign: "center",
    fontSize: 30,
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  ansButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 10,
  },
});
