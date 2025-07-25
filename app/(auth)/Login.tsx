import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import { AuthContext } from "../context/Authontext";

// import Privacypolicyrafiki from "../assets/images/banner.svg"; // Assuming this is the correct path to your SVG
// cpcentral
const Login = () => {
  const { login } = React.useContext(AuthContext) || {};
  const [loading, setLoading] = React.useState(false);
  const handleLogin = () => {
    // Simulate a login action
    setLoading(true);
    setTimeout(() => {
      login?.("sampleUserToken");
      router.push("/(tabs)/Profile");
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container} >
      {/* <Privacypolicyrafiki width={200} height={200} style={{marginTop:50}}/> */}
      <View>
        <Text
          style={{
            fontSize: 34,
            fontWeight: "700",
            textAlign: "left",
            marginTop: 40,
            color: "#ffffffff",
          }}
        >
          Welcome back!
        </Text>

        <Text style={{ fontSize: 16,marginTop:5, color: "#b8bdc1ff" }}>
          {`We're so excited to see you again`}
        </Text>
      </View>
      {/* <View></View> */}
      

      <View style={{ width: "100%", gap: 20 ,justifyContent:"center",alignItems:"center"}}>
        {/* user input */}
          {/* <Label style={{color:"white"}}>Ennter Email</Label> */}
        <View style={styles.inputContainer}>
          <AntDesign style={styles.icon} name="user" size={20} />
          <TextInput
          placeholderTextColor={"#b8bdc1ff"}
            placeholder="Enter your username"
            keyboardType="default"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="eye" size={20} />
          <TextInput
          placeholderTextColor={"#b8bdc1ff"}
            placeholder="Enter your password"
            keyboardType="default"
            style={styles.input}
          />
        </View>
        <View style={{justifyContent:"flex-start",width:"95%"}}>
          <Text style={{color:"#007BFF",fontWeight:"600"}}>
            Forgot your password?
          </Text>
        </View>
      </View>
      <View style={{width:"95%",gap:20}}>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#007BFF"
            style={{ marginTop: 20 }}
          />
        ) : (
          <Pressable style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
        )}
            <View style={{alignItems:"center",width:"100%"}}>
          <Text style={{color:"#007BFF",fontWeight:"600"}}>
            Or,sign in with passkey
          </Text>
        </View>
      </View>

      </View>
   
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818ff",
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    gap: 50,
  },
  loginBtn: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#0c69f5ff',
    borderRadius: 50,
    width: "100%",
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize:20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aab8c273",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    width: "95%",
  },
  input: {
    padding: 10,
    paddingVertical: 12,
    width: "100%",
    color:"white",
    fontSize:18
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    color: "#b8bdc1ff", // optional, to match the button color
    tintColor: "#007BFF", // optional
  },
});

export default Login;