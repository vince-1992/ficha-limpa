import { FlatList, TextInput } from "react-native";
import { Container, InputPesquisa, ContainerInputPesquisa } from "./styles";
import { useState, useEffect } from "react";
import { CardCandidato } from "../../components/CardCandidato";
import { useRoute } from '@react-navigation/native';
import candidatosData from "../../../assets/json/candidatos.json";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Candidatos() {
    const route = useRoute();
    const { opcao } = route.params;
    const [candidatos, setCandidatos] = useState([]);

    useEffect(() => {
        if (opcao === "pref") {
            setCandidatos(candidatosData.filter(candidato => candidato.DS_CARGO === "PREFEITO" && candidato.ANO_ELEICAO === 2024 && candidato.NM_UE === "ARACAJU"));
        } else {
            setCandidatos(candidatosData.filter(candidato => candidato.DS_CARGO === "VEREADOR" && candidato.ANO_ELEICAO === 2024 && candidato.NM_UE === "ARACAJU"));
        }
    }, [opcao]);

    return (
        <Container>
            <ContainerInputPesquisa>
                <InputPesquisa placeholder="Digite o nome" />
                <Icon 
                    name="search" 
                    size={30} 
                    color="#CCC" 
                    style={{ position: "absolute", right: 20, top: "50%", transform: [{ translateY: -15 }] }} 
                />
            </ContainerInputPesquisa>
            <FlatList
                data={candidatos}
                keyExtractor={(item) => item.SQ_CANDIDATO.toString()}
                renderItem={({ item }) => (
                    <CardCandidato name={item.NM_CANDIDATO} idCandidato={item.SQ_CANDIDATO} partido={item.SG_PARTIDO}/>
                )}
            />
        </Container>
    );
}
