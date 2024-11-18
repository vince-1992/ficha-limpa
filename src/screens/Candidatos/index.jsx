import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput, TouchableOpacity } from "react-native";
import { Container, InputPesquisa, ContainerInputPesquisa } from "./styles";
import { useState, useEffect } from "react";
import { CardCandidato } from "../../components/CardCandidato";
import { useRoute } from '@react-navigation/native';
import candidatosData from "../../../assets/json/candidatos.json";
import candidatosDataCompleto from "../../../assets/json/candidatos-completa.json";
import Icon from 'react-native-vector-icons/FontAwesome';
import { EmptyList } from '~/components/EmptyList';

export default function Candidatos() {
    const navigation = useNavigation();

    const route = useRoute();
    const { opcao } = route.params;

    const [candidatos, setCandidatos] = useState([]);
    const [candidatosCompleta, setCandidatosCompleta] = useState([]);

    const [textoPesquisa, setTextoPesquisa] = useState("");

    useEffect(() => {
        // Filtra os candidatos de acordo com a opção inicial (prefeito ou vereador)
        const candidatosFiltrados = (opcao === "pref"
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
            ));

        const candidatosCompletoFiltrados = (opcao === "pref"
            ? candidatosDataCompleto.filter(
                candidato =>
                    candidato.DS_CARGO === "PREFEITO" &&
                    candidato.ANO_ELEICAO === 2024 &&
                    candidato.NM_UE === "ARACAJU"
            )
            : candidatosDataCompleto.filter(
                candidato =>
                    candidato.DS_CARGO === "VEREADOR" &&
                    candidato.ANO_ELEICAO === 2024 &&
                    candidato.NM_UE === "ARACAJU"
            ));

        // Remove duplicados com base no campo SQ_CANDIDATO
        const processarCandidatosUnicos = (candidatos) => {
            const candidatosUnicos = [];
            const idsUnicos = new Set();

            candidatos.forEach(candidato => {
                if (!idsUnicos.has(candidato.SQ_CANDIDATO)) {
                    idsUnicos.add(candidato.SQ_CANDIDATO);
                    candidatosUnicos.push(candidato);
                }
            });

            return candidatosUnicos;
        };

        // Atualiza os estados de candidatos
        setCandidatos(processarCandidatosUnicos(candidatosFiltrados));
        setCandidatosCompleta(processarCandidatosUnicos(candidatosCompletoFiltrados));
    }, [opcao]);

    // Filtra dinamicamente com base no texto digitado
    const candidatosExibidos = candidatos.filter(candidato =>
        candidato.NM_CANDIDATO.toLowerCase().includes(textoPesquisa.toLowerCase())
    );

    const candidatosExibidosCompleta = candidatosCompleta.filter(candidato =>
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
                showsVerticalScrollIndicator={false}
                data={candidatosExibidos} // Exibe somente os candidatos filtrados
                keyExtractor={(item) => item.SQ_CANDIDATO.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            // Passa o candidato selecionado e a lista completa para a tela de Detalhes
                            navigation.navigate('Detalhes', {
                                candidato: item,
                                candidatosCompletoObj: candidatosExibidosCompleta
                            });
                        }}
                    >
                        <CardCandidato
                            name={item.NM_CANDIDATO}
                            idCandidato={item.SQ_CANDIDATO}
                            partido={item.SG_PARTIDO}
                        />
                    </TouchableOpacity>
                )}
                ListEmptyComponent={EmptyList}
            />
        </Container>
    );
}
