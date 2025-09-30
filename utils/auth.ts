import AsyncStorage from "@react-native-async-storage/async-storage";

export interface User {
  id: string;
  name: string;
  email: string;
}

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const currentUserJson = await AsyncStorage.getItem("currentUser");
    return currentUserJson ? JSON.parse(currentUserJson) : null;
  } catch (error) {
    console.error("Erro ao obter usuário atual:", error);
    return null;
  }
};

export const isUserLoggedIn = async (): Promise<boolean> => {
  const user = await getCurrentUser();
  return user !== null;
};

export const logout = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem("currentUser");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const usersJson = await AsyncStorage.getItem("users");
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    return [];
  }
};
