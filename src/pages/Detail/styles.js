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

export const HeaderButton = styled.TouchableOpacity``;

export const Incident = styled.View`
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    margin-top: 48px;
    padding: 24px;
`;

export const Property = styled.Text`
  color: #41414d;
  font-size: 14px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Value = styled.Text`
  color: #737380;
  font-size: 15px;
  margin-top: 8px;
`;

export const Contact = styled.View`
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 24px;
`;

export const HeroTitle = styled.Text`
    color: #13131a;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
`;

export const HeroDescription = styled.Text`
    color: #737380;
    font-size: 15px;
    margin-top: 16px;
`;

export const Actions = styled.View`
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
    justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
    align-items: center;
    background-color: #e02041;
    border-radius: 8px;
    height: 50px;
    justify-content: center;
    width: 48%;
`;

export const ActionText = styled.Text`
    color: #Fff;
    font-size: 15px;
    font-weight: bold;
`;