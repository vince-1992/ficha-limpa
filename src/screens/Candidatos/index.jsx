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
    const [textoPesquisa, setTextoPesquisa] = useState("");

    useEffect(() => {
        // Filtra os candidatos de acordo com a opção inicial (prefeito ou vereador)
        const candidatosFiltrados = opcao === "pref"
            ? candidatosData.filter(
                  candidato =>
                      candidato.DS_CARGO === "PREFEITO" &&
                      candidato.ANO_ELEICAO === 2024 &&
                      candidato.NM_UE === "ARACAJU"
              )
            : candidatosData.filter(
                  candidato =>
                      candidato.DS_CARGO === "VEREADOR" &&
                      candidato.ANO_ELEICAO === 2024 &&
                      candidato.NM_UE === "ARACAJU"
              );

        setCandidatos(candidatosFiltrados);
    }, [opcao]);

    // Filtra dinamicamente com base no texto digitado
    const candidatosExibidos = candidatos.filter(candidato =>
        candidato.NM_CANDIDATO.toLowerCase().includes(textoPesquisa.toLowerCase())
    );

    return (
        <Container>
            <ContainerInputPesquisa>
                <InputPesquisa
                    placeholder="Digite o nome"
                    value={textoPesquisa}
                    onChangeText={setTextoPesquisa} // Atualiza o texto de pesquisa
                />
                <Icon
                    name="search"
                    size={30}
                    color="#CCC"
                    style={{
                        position: "absolute",
                        right: 20,
                        top: "50%",
                        transform: [{ translateY: -15 }],
                    }}
                />
            </ContainerInputPesquisa>

            <FlatList
                data={candidatosExibidos} // Exibe somente os candidatos filtrados
                keyExtractor={(item) => item.SQ_CANDIDATO.toString()}
                renderItem={({ item }) => (
                    <CardCandidato
                        name={item.NM_CANDIDATO}
                        idCandidato={item.SQ_CANDIDATO}
                        partido={item.SG_PARTIDO}
                    />
                )}
            />
        </Container>
    );
}
