// import propostaMap from '../../../propostaMap';
// import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
// import Pdf from 'react-native-pdf';


export default function Propostas() {
    // const file = propostaMap[candidatoID];

    return (

        <View></View>
        // <Pdf
        //     source={file}
        //     onLoadComplete={(numberOfPages, filePath) => {
        //         console.log(`number of pages: ${numberOfPages}`);
        //     }}
        //     onPageChanged={(page, numberOfPages) => {
        //         console.log(`current page: ${page}`);
        //     }}
        //     onError={(error) => {
        //         console.log(error);
        //     }}
        // />
    );
}


// export default function Propostas() {
//     const route = useRoute();
//     const { candidatoID } = route.params;

//     // Obter o caminho do PDF para o candidato
//     const pdfSource = propostaMap[candidatoID];

//     if (!pdfSource) {
//         // Renderizar uma mensagem ou componente alternativo
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.errorText}>Proposta não disponível para o candidato selecionado.</Text>
//             </View>
//         );
//     }

//     // Renderizar o WebView se o PDF existir
//     return (
//         <WebView
//             style={{ flex: 1 }}
//             source={pdfSource} // Caminho do PDF
//         />
//     );
// }

