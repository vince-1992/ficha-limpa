import { Container } from "./styles";
import { TextEmpty } from "./styles";

export function EmptyList(){
    return(
        <Container>
            <TextEmpty>Nenhum resultado para essa busca.</TextEmpty>
        </Container>
    )
}