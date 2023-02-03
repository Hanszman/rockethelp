import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base'; // Componentes específicos do Native Base utilizados para facilitar a estrutura e a estilização da página
import { Envelope, Key } from 'phosphor-react-native'; // Biblioteca de icones instalada com o comando: "npm install --save phosphor-react-native"
import Logo from '../assets/logo_primary.svg'; // Logotipo da aplicação, mas para que o React Native entenda um componente svg, é necessário criar a pasta @types com o arquivo svg, alterar o conteúdo do arquivo metro.config.js, além de instalar o pacote: "npm install react-native-svg-transformer --save-dev"
import { Input } from '../components/Input'; // Componente que criamos para Input
import { Button } from '../components/Button'; // Componente que criamos para Button

export function SignIn() {
    const [name, setName] = useState('Victor');
    const [password, setPassword] = useState('');
    const { colors } = useTheme(); // Hook do Native Base utilizado para aplicar os estilos do arquivo theme

    return (
        <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
            {/* As propriedades passadas pelos componentes do Native Base são como as do css, mas algumas vezes abreviadas, como por exemplo: pt (padding-top), mb (margin-bottom), bg (background), px (padding no eixo x, ou seja, horizontal ou right+left), etc. Além disso, os números passados por parâmetros representam a quantidade de pixels mostradas lá no site do Native Base, exemplo: 6 = 24px */}
            {/* <Logo/> */}
            {/* Precisei remover a logo pois estava gerando erros no ambiente web */}
            <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input
                mb={4}
                placeholder='E-mail'
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
                onChangeText={setName}
            />
            <Input
                mb={8}
                placeholder='Senha'
                InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
                secureTextEntry
                onChangeText={setPassword}
            />
            {/* O InputLeftElement foi passado utilizando a propriedade do IInputProps e serviu para colocar o ícone no input. Estes ícones foram importados da biblioteca phosphor */}

            <Button title='Entrar' w='full'/>
        </VStack>
    );
}