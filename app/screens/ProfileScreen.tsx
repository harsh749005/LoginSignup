import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AuthContext } from "../context/Authontext";
import { router } from "expo-router";
const ProfileScreen = () => {
  const context = React.useContext(AuthContext);
  const userToken = context?.userToken;
  const [loading, setLoading] = React.useState(false);
  const handleLogout = () => {
    // Call the logout function from context
    context?.logout();
    setLoading(true);
    setTimeout(() => {
      router.push("/Login");
    }, 1000); // Redirect to Login after logout
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Profile Screen</Text>
        {userToken ? (
          <Text style={styles.text}>User Token: {userToken}</Text>
        ) : (
          <Text style={styles.text}>No user token found</Text>
        )}
      </View>
      {loading ? (
        <ActivityIndicator size="small" color="#007BFF" />
      ) : (
        <Pressable
          // disabled={loading}
          onPress={() => {
            handleLogout();
          }}
        >
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
  },
  logout: {
    padding: 10,
    backgroundColor: "#e02413ff",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
