import { useNavigation } from '@react-navigation/native';
import { Image, View, Alert } from "react-native";
import { Container, StyledButton, ButtonText, FullWidthImage } from "./styles";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { CopyRight } from "../../components/Copyright";


export default function Home() {
    const [opcaoPolitico, setOpcaoPolitico] = useState("");
    const navigation = useNavigation();

    const handlePress = () => {
        if (opcaoPolitico === "") {
            Alert.alert("Atenção", "Selecione uma opção antes de continuar.")
        } else {
            navigation.navigate('Candidatos', { opcao: opcaoPolitico });
        }
    };

    return (
        <Container>
            <Image
                style={{ width: '100%', height: 200 }}
                source={require('../../../assets/img/urna.png')}
            />
            {/* <FullWidthImage height="200px" source={require('../../../assets/img/urna.png')} /> */}
            <View style={{ height: 50, width: "100%", backgroundColor: "#F6F6F6", borderRadius: 8, overflow: 'hidden', justifyContent: "center" }}>
                <Picker
                    style={{ color: "#A2A2A2" }}
                    selectedValue={opcaoPolitico}
                    onValueChange={(itemValue) => setOpcaoPolitico(itemValue)}
                >
                    <Picker.Item label="Selecione uma opção" value="" />
                    <Picker.Item label="Prefeitos" value="pref" />
                    <Picker.Item label="Vereadores" value="ver" />
                </Picker>
            </View>


            <StyledButton onPress={handlePress}>
                <ButtonText>Buscar</ButtonText>
            </StyledButton>

            <CopyRight />
        </Container >
    )
}