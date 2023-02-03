import { Input as NativeBaseInput, IInputProps } from 'native-base'; // Componentes específicos do Native Base utilizados para facilitar a estrutura e a estilização da página, no caso para a construção do componente de Input. Foi renomeado com o alias "NativeBaseInput" para não conflitar com o nome do componente que criamos. O "IInputProps" serve para importar as propriedades do campo Input

export function Input({...rest}: IInputProps) { // O "...rest" operator consegue pegar qualquer propriedade passada por parâmetro pela chamada do componente. O "IInputProps" declara que todas essas propriedades do rest serão do tipo de propriedades do Input
    return (
        <NativeBaseInput
            bg='gray.700'
            h={14}
            w='full'
            size='md'
            borderWidth={0}
            fontSize='md'
            fontFamily='body'
            color='white'
            placeholderTextColor='gray.300'
            _focus={{
                borderWidth: 1,
                borderColor: 'green.500',
                bg: 'gray.700',
            }}
            {...rest}
        />
    );
}

// Os atributos com "_" são as pseudopropriedades que conseguimos manipular