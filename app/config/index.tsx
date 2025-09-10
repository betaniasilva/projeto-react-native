import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Arquivos de Configurações</Text>
      <Link rel="stylesheet" href={"/config/user"}> IR PARA CONFIGURAÇÕES DO USUARIO </Link>

    </View>
  );
}