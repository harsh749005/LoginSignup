import { Button, Text, View } from "react-native";

import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Main Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          // Navigate to Home screen
          router.push("/Home");
        }}
      />
      <Button
        title="Go to Login"
        onPress={() => {
          router.push("/Login");
        }}
      />
      <Button
        title="Go to Profile"
        onPress={() => {
          router.push("/(tabs)/Profile");
        }}
      />
    </View>
  );
}
