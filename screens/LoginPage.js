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
  ScrollView
} from "react-native";

import { TextInput, Button, Checkbox,DataTable } from "react-native-paper";

// DÜz fetch değil axios kullan!!!



const Login = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
        <View style={styles.container2}>
          {/* View içinde flexDirection: ‘row’ şeklinde yatay olarak kullanırsak içerisindekileri DİKEY hizalaması için alignItems: ‘center’ kullanmamız gerekiyor, yani JustifyContent ile yer değiştirmiş oluyor */}
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://www.beyzel.com/uploads/images/202105/img_x300_609f14689c3c44-03417118-65287011.jpg',
              }}
              style={{
                width: 128,
                height: 128,
                top: 12,
                marginLeft: 10,
                marginBottom: 15,
              }}
            />
            <Text style={{alignSelf: 'flex-end', fontSize: 30}}> + </Text>
          </View>
            <View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="Araç Plakası"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={
                    Platform.OS === 'web'
                      ? styles.inputweb
                      : {
                          height: 43,
                          marginLeft: 10,
                          padding: 1,
                          width: '45%',
                          backgroundColor: '#fff',
                        }
                  }
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />

                <TextInput
                  style={
                    Platform.OS === 'web'
                      ? styles.inputweb
                      : {
                          height: 43,
                          padding: 1,
                          marginLeft: 10,
                          width: '47.5%',
                          backgroundColor: '#fff',
                        }
                  }
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={Platform.OS === 'web' ? styles.inputweb : styles.input}
                  mode="outlined"
                  label="xxx"
                  theme={{
                    roundness: 10,
                    colors: {primary: '#FC7424', placeholder: '#808080'},
                  }}
                />
              </View>

              
            </View>
        </View>
      </ScrollView>
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
    zIndex: 1,
  },

  Logo: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom:20,
  },

  input: {
 height: 48, //problem
  },

  inputweb: {
    height: 50,
    alignSelf: "center",
    width: "40%",
    padding: 7,
    backgroundColor: "#fff",
  },
});
