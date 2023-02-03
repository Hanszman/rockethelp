import { VStack, Heading } from 'native-base'; // Componentes específicos do Native Base utilizados para facilitar a estrutura e a estilização da página

export function SignIn() {
    return (
        <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
            {/* As propriedades passadas pelos componentes do Native Base são como as do css, mas algumas vezes abreviadas, como por exemplo: pt (padding-top), mb (margin-bottom), bg (background), px (padding no eixo x, ou seja, horizontal ou right+left), etc. Além disso, os números passados por parâmetros representam a quantidade de pixels mostradas lá no site do Native Base, exemplo: 6 = 24px */}
            <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
                Acesse sua conta
            </Heading>
        </VStack>
    );
}