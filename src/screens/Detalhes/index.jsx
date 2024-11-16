import { Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import { Container } from "./styles";

export default function Detalhes() {
    const route = useRoute();

    return (
        <Container>
            <Text>detalhes</Text>
        </Container>
    );
}
