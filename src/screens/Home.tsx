import { VStack, HStack, IconButton, useTheme, Text, Heading } from 'native-base'; // Componentes específicos do Native Base utilizados para facilitar a estrutura e a estilização da página
import { SignOut } from 'phosphor-react-native'; // Biblioteca de icones instalada com o comando: "npm install --save phosphor-react-native"
import Logo from '../assets/logo_primary.svg'; // Logotipo da aplicação, mas para que o React Native entenda um componente svg, é necessário criar a pasta @types com o arquivo svg, alterar o conteúdo do arquivo metro.config.js, além de instalar o pacote: "npm install react-native-svg-transformer --save-dev"

export function Home() {
    const { colors } = useTheme(); // Hook do Native Base utilizado para aplicar os estilos do arquivo theme

    return (
        <VStack flex={1} pb={6} bg='gray.700'>
            <HStack
                w='full'
                justifyContent='space-betweeen'
                alignItems='center'
                bg='gray.600'
                pt={12}
                pb={5}
                px={6}
            >
                {/* <Logo/> */}
                {/* Precisei remover a logo pois estava gerando erros no ambiente web. Por isso coloquei o texto abaixo: */}
                <Heading color='white'>RocketHelp</Heading>
                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]}/>}
                />
            </HStack>
            <Text color='gray.200'>
                3
            </Text>
        </VStack>
    );
}