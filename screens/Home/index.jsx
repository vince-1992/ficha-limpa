import { useNavigation } from '@react-navigation/native';
import { ScreenContent } from 'components/ScreenContent';
import { Image, View } from "react-native";
import { Container, StyledButton, ButtonText, FullWidthImage } from "./styles";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { CopyRight } from "../../components/Copyright";


export default function Home() {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const navigation = useNavigation();


    return (
        <Container>
            {/* <FullWidthImage height="200px" source={require('../../assets/img/urna.png')} /> */}
            <View style={{ height: 50, width: "100%", backgroundColor: "#F6F6F6", borderRadius: 8, overflow: 'hidden', justifyContent: "center" }}>
                <Picker
                    style={{ color: "#A2A2A2" }}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                >
                    <Picker.Item label="Selecione uma opção" value="" />
                    <Picker.Item label="Prefeitos" value="pref" />
                    <Picker.Item label="Vereadores" value="ver" />
                </Picker>
            </View>


            <StyledButton onPress={() => navigation.navigate('Candidatos')}>
                <ButtonText>Buscar</ButtonText>
            </StyledButton>

            <CopyRight />
        </Container>
    )
}