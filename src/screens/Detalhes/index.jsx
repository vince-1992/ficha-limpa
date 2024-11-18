import imageMap from '../../../imageMap';
import { Alert, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import candidatosDataCompleto from "../../../assets/json/candidatos-completa.json";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { Container, Header, Title, Body, TitleText, WrapperTitleText, BtnPropostas, TextBtnPropostas } from './styles';

export default function Detalhes() {
    const route = useRoute();
    const { candidato } = route.params;
    const navigation = useNavigation();

    console.log(candidato);

    const [candidatosCompleto, setCandidatosCompleto] = useState([]);

    useEffect(() => {
        // Filtra o candidato completo baseado no SQ_CANDIDATO do candidato selecionado
        const candidatoCompleto = candidatosDataCompleto.find(
            (item) => item.SQ_CANDIDATO === candidato.SQ_CANDIDATO
        );

        setCandidatosCompleto(candidatoCompleto);  // Armazena o candidato completo
        console.log(candidatoCompleto);
    }, [candidato]);

    return (
        <Container>
            <Header>
                <Image
                    style={{ height: 60, width: 60 }}
                    source={
                        imageMap[candidato.SQ_CANDIDATO] || require('../../../assets/img/user.jpg')
                    }
                />
                <Title>{candidato.NM_CANDIDATO}</Title>
            </Header>

            <Body>
                <WrapperTitleText><TitleText>N.º do(a) candidato(a): </TitleText>{candidato.NR_CANDIDATO}</WrapperTitleText>
                <WrapperTitleText><TitleText>Partido: </TitleText>{candidato.SG_PARTIDO}</WrapperTitleText>
                <WrapperTitleText><TitleText>Coligação: </TitleText>{candidato.NM_COLIGACAO}</WrapperTitleText>

                {/* Renderização condicional de informações do candidato completo */}
                {candidatosCompleto && (
                    <>
                        <WrapperTitleText><TitleText>Fez prestação de contas: </TitleText>{candidatosCompleto.ST_PREST_CONTAS === "S" ? "Sim" : "Não"}</WrapperTitleText>
                        <WrapperTitleText><TitleText>Possui bens declarados: </TitleText>{candidatosCompleto.ST_DECLARAR_BENS === "S" ? "Sim" : "Não"}</WrapperTitleText>
                        <WrapperTitleText><TitleText>Possui cassação: </TitleText>{candidatosCompleto.CD_SITUACAO_CASSACAO === 1 ? "Sim" : "Não"}</WrapperTitleText>
                    </>
                )}

                <BtnPropostas onPress={() => Alert.alert("Atenção", "Disponível em breve.")}>
                    <TextBtnPropostas>Ver Propostas</TextBtnPropostas>
                </BtnPropostas>

                {/* <BtnPropostas onPress={() => navigation.navigate('Propostas', { candidatoID: candidato.SQ_CANDIDATO })}>
                    <TextBtnPropostas>Ver Propostas</TextBtnPropostas>
                </BtnPropostas> */}
            </Body>
        </Container>
    );
}
