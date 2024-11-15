import { Container, TextPartido } from "./styles"

export function ContainerPartido ({ partido }){
    return(
        <Container>
            <TextPartido>{partido}</TextPartido>
        </Container>
    )
}