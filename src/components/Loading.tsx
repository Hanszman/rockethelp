import { Center, Spinner } from 'native-base'; // Componentes específicos do Native Base utilizados para facilitar a estrutura e a estilização da página, no caso para a construção do componente de Loading

export function Loading() {
    return (
        <Center flex={1} bg='gray.700'>
            <Spinner color='secondary.700'/>
        </Center>
    );
}