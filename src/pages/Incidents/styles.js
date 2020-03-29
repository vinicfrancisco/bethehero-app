import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
    padding: ${Constants.statusBarHeight + 20}px 24px 0; 
`;

export const Header = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Logo = styled.Image``;

export const HeaderText = styled.Text`
    color: #737380;
    font-size: 15px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

export const Title = styled.Text`
    color: #13131A;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 16px;
    margin-top: 48px;
`;

export const Description = styled.Text`
    color: #737380;
    font-size: 16px;
    line-height: 24px;
`;

