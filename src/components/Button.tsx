import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base'; // Componentes específicos do Native Base utilizados para facilitar a estrutura e a estilização da página, no caso para a construção do componente de Button. Foi renomeado com o alias "NativeBaseButton" para não conflitar com o nome do componente que criamos. O "IButtonProps" serve para importar as propriedades do campo Button

type Props = IButtonProps & { // O "Props" recebe as propriedades de tipo do "IButtonProps", além das propriedades que estão sendo passadas, como o "title", por exemplo
    title: string;
}

export function Button({ title, ...rest }: Props) { // Propriedade "title" recebida com o tipo "Props". O "...rest" operator consegue pegar qualquer propriedade passada por parâmetro pela chamada do componente
    return (
        <NativeBaseButton
            bg='green.700'
            h={14}
            fontSize='sm'
            rounded='sm'
            _pressed={{ bg: 'green.500' }}
            {...rest}
        >
            <Heading color='white' fontSize='sm'>
                {title}
            </Heading>
        </NativeBaseButton>
    );
}

// Os atributos com "_" são as pseudopropriedades que conseguimos manipular