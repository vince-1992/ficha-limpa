import styled from "styled-components";

export const  Container = styled.View`
    background-color: #FFF;
    flex: 1;
    /* justify-content: center; */
    align-items: center;
    padding: 24px;
    padding-top: 25%;
    gap: 20px;
    position: relative;
`

export const StyledButton = styled.TouchableOpacity`
  /* background-color: ${(props) => props.bgColor || '#3498db'}; */
  background-color: #0d6efd;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;


export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FullWidthImage = styled.Image`
  width: 100%;
  height: ${(props) => props.height || 'auto'}; /* Altura pode ser dinâmica */
  margin-bottom: 10%;
`;