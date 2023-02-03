import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'; // Biblioteca utilizada para estilos e componentes de layout prontos, como se fosse um bootstrap específico para React, React Native, Next, etc.
import { THEME } from './src/styles/theme'; // Arquivo de temas criado com base na estrutura do Native Base com o intuito de já deixar declarado todos os estilos de cores, fontes e tamanhos no projeto
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; // Importação da fonte "Roboto" instalada através do comando: "expo install expo-font @expo-google-fonts/roboto"
import { Loading } from './src/components/Loading'; // Componente que criamos para Loading
import { SignIn } from './src/screens/SignIn'; // Componente que criamos para Login

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold}); // Comando para utilizar as fontes importadas, mas elas carregam de forma assincrona, por isso é preciso esperá-las carregarem

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      {/* Faz a barra de status dos ícones nativos do celular mudarem de cor para branco, o background para transparente e com que o aplicativo comece do canto superior da tela ao invés de para baixo da barra */}
      { fontsLoaded ? <SignIn/> : <Loading/> }
      {/* If ternário para verificar se as fontes já carregaram. Se houverem carregado, exibe o componente de Login. Se não houverem carregado, exibe o Loading. */}
    </NativeBaseProvider>    
  );
}

// As tags de componentes do React Native são específicas pro React Native, pois ele faz a tradução dessas tags para as tags específicas do IOS e do Android.
// Por exemplo, a tag View do React Native pode ser entendida como uma div do html e a tag Text como o p do html.