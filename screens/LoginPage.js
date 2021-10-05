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
} from "react-native";

import { TextInput, Button, Checkbox } from "react-native-paper";


// DÜz fetch değil axios kullan!!!

const getPost = () => {
  return fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((json) => {
      if (json.movies[0].id == 1) {
        console.log("Okey giriş yap")
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const Login = () => {
  const [checked, setChecked] = useState(false)

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
            style={styles.input}
            mode="outlined"
            label="E-mail"
            theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
          />
          <View style={styles.borderStyle}>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Şifre"
              theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setChecked(!checked);
            }}
          >
            <View
              style={{
                marginLeft: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox
                color="#067dc1"
                status={checked ? "checked" : "unchecked"}
              />
              <Text>Beni Hatırla</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.GirisYapButton}>
            <Button
              icon="login"
              mode="contained"
              color="#067dc1"
              style={{ height: 50, justifyContent: "center", borderRadius: 10 }} // justifyContent: "center" ortalar.
              contentStyle={{ height: 50, justifyContent: "center" }} // eğer bunu eklemezsen butona tıklayınca tıklama alanın kücük gözükür.
              onPress={getPost}
            >
              Giriş Yap
            </Button>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  justifyContent: "center",
                  color: "#067dc1",
                  marginTop: 20,
                }}
              >
                Sosyal Ağ ile Oturum Aç
              </Text>
              <View style={{flexDirection:'row', marginTop:50}}>
                <Text style={{marginLeft:10}}>1</Text>
                <Text style={{marginLeft:20}}>2</Text>
                <Text style={{marginLeft:20}}>3</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //  alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },

  Logo: {
    alignItems: "center",
    paddingTop: 55
  },

  input: {
    height: 50,
    marginRight: 20,
    marginLeft: 20,
    padding: 7,
    backgroundColor: "#fff",
  },

  GirisYapButton: {
    margin: 5,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
  },

  borderStyle: {
    borderRadius: 25,
    overflow: "hidden",
  },
});
