import { Stack } from "expo-router";
import AuthProvider,{ AuthContext } from "./context/Authontext";
import { useContext } from "react";

const AuthLayout = () =>{
  const context = useContext(AuthContext);

  return (
   
      <Stack screenOptions={{ headerShown: false }}>
        {context?.userToken ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="index" options={{headerShown:false}} />
        )}
      </Stack>
    
  );
}
export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthLayout />
    </AuthProvider>
  );
}
