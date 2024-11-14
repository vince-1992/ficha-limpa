import { Container, TextCandidato } from "./styles"

export function CardCandidato({ name }){
    return(
        <Container>
            <TextCandidato>{name}</TextCandidato>
        </Container>
    )
}