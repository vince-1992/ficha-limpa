import styled from "styled-components";

export const  Container = styled.View`
    background-color: #FFF;
    flex: 1;
    padding: 24px;
    gap: 20px;
    position: relative;
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #0d6efd;
`
export const Body = styled.View`
    gap: 10px;

`
export const WrapperTitleText = styled.Text`
    font-size: 16px
`

export const TitleText = styled.Text`
    font-weight: semi-bold;
    color: #0d6efd;
`
export const BtnPropostas = styled.TouchableOpacity`
    padding: 10px;
    background-color: #0d6efd;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`

export const TextBtnPropostas = styled.Text`
    color: #FFF;
`