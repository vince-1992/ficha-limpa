import { Container, TextCandidato } from "./styles"
import { ContainerPartido } from "../ContainerPartido";
import { Image } from "react-native";

export function CardCandidato({ name, idCandidato, partido }) {
    return (
        <Container>
            <Image
                style={{ height: 60, width: 60 }}
                source={{ uri: `../../../assets/img/candidatos/${idCandidato}_div.jpg` }}
                defaultSource={require('../../../assets/img/user.png')}
            />
            <TextCandidato>{name}</TextCandidato>
            <ContainerPartido partido={partido}/>
        </Container>
    );
}