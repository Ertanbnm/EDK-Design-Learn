import { placeholder } from "@babel/types";
import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { TextInput, Button, Checkbox } from "react-native-paper";
import { SocialIcon } from "react-native-elements";

// DÜz fetch değil axios kullan!!!

const getPost = () => {
  return fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((json) => {
      if (json.movies[0].title == "Star Warsss") {
        console.log("var");
      } else {
          console.log("yok");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const Register = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Logo}>
          <Image
            source={{
              uri: "https://hdsotomasyon.com/wp-content/uploads/2018/04/logo-mavi.png",
            }}
            style={{ width: 230, height: 70 }}
          />
        </View>

        <View>

        <TextInput
            style={Platform.OS === "web" ? styles.inputweb : styles.input}
            mode="outlined"
            label="İsim Soyisim"
            theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
          />

          <TextInput
            style={Platform.OS === "web" ? styles.inputweb : styles.input}
            mode="outlined"
            label="E-mail"
            theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
          />
          <View style={styles.borderStyle}>
            <TextInput
              style={Platform.OS === "web" ? styles.inputweb : styles.input}
              mode="outlined"
              label="Şifre"
              theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
            />
            <TextInput
              style={Platform.OS === "web" ? styles.inputweb : styles.input}
              mode="outlined"
              label="Tekrar Şifre"
              theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
            />
          </View>

          <View
            style={
              Platform.OS === "web"
                ? {
                    alignSelf: "center",
                    width: "40%",
                    flexDirection: "row",
                    alignItems: "center",
                  }
                : {
                    marginLeft: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }
            }
          >
            <TouchableOpacity
              onPress={() => {
                setChecked(!checked);
              }}
            >
              <Checkbox
                color="#067dc1"
                status={checked ? "checked" : "unchecked"}
              />
            </TouchableOpacity>

            <Text>Gizlilik Politikasını kabul ediyorum.</Text>
          
          </View>

          <View
            style={
              Platform.OS === "web"
                ? styles.GirisYapButtonWeb
                : styles.GirisYapButton
            }
          >
            <Button
              icon="login"
              mode="contained"
              color="#067dc1"
              style={{ height: 50, justifyContent: "center", borderRadius: 10 }} // justifyContent: "center" ortalar.
              contentStyle={{ height: 50, justifyContent: "center" }} // eğer bunu eklemezsen butona tıklayınca tıklama alanın kücük gözükür.
              onPress={getPost}
            >
              Kayıt Ol
            </Button>
          </View>
        </View>

        
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //  alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  Logo: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom:20,
  },

  input: {
    height: 48,
    marginRight: 27,
    marginLeft: 27,
    padding: 3,
    backgroundColor: "#fff",
  },

  inputweb: {
    height: 50,
    alignSelf: "center",
    width: "40%",
    padding: 7,
    backgroundColor: "#fff",
  },

  GirisYapButton: {
    margin: 5,
    marginRight: 27,
    marginLeft: 27,
    padding: 3,
  },

  GirisYapButtonWeb: {
    margin: 5,
    alignSelf: "center",
    width: "40%",
    padding: 10,
  },

  borderStyle: {
    borderRadius: 25,
    overflow: "hidden",
  },
});
