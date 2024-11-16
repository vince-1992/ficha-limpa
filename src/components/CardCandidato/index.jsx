import imageMap  from '../../../imageMap';
import { Image } from 'react-native';
import { Container, TextCandidato } from './styles';
import { ContainerPartido } from '../ContainerPartido';

export function CardCandidato({ name, idCandidato, partido }) {
    return (
        <Container>
             <Image
                style={{ height: 60, width: 60 }}
                source={
                    imageMap[idCandidato] || require('../../../assets/img/user.jpg') // Imagem padrão
                }
            />
            <TextCandidato>{name || idCandidato}</TextCandidato>
            <ContainerPartido partido={partido} />
        </Container>
    );
}
