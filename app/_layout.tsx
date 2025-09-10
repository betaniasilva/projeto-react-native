import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "../constants/Theme";
import { useCineFilaFonts } from "../hooks/useCineFilaFonts";

export default function RootLayout() {
  const fontsLoaded = useCineFilaFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.night }}>
        <ActivityIndicator size="large" color={Colors.pipoca} />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.night,
        },
        headerTintColor: Colors.textPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins_600SemiBold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'CineFila',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(auth)/login"
        options={{
          title: 'Entrar',
          presentation: 'card'
        }}
      />
      <Stack.Screen
        name="(auth)/register"
        options={{
          title: 'Criar Conta',
          presentation: 'card'
        }}
      />
    </Stack>
  );
}
