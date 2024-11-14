import { FlatList,TextInput } from "react-native";
import { Container, InputPesquisa, ContainerInputPesquisa, pesquisarIcone } from "./styles";
import { useState, useEffect } from "react";
import { CardCandidato } from "../../components/CardCandidato";
import candidatosData from "../../assets/json/candidatos.json"; 
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Candidatos() {

    const [candidatos, setCandidatos] = useState();

    useEffect(() => {
        setCandidatos(candidatosData);
    }, []);


    return (
        <Container>
            <ContainerInputPesquisa>
                <InputPesquisa placeholder="Digite o nome"/>
                <Icon name="search" size={30} 
                    color="#CCC" 
                    style={{ position: "absolute", right: 20, top: "50%", transform: [{ translateY: -15 }] }} 
                />
            </ContainerInputPesquisa>
            <FlatList
                data={candidatos}
                keyExtractor={(item) => item.SQ_CANDIDATO}
                renderItem={({ item }) => (
                    <CardCandidato  name={item.NM_CANDIDATO} />
                )}
            />
        </Container>
    )
}