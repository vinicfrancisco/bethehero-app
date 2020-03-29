import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px;
`;

export const Property = styled.Text`
    color: #41414D;
    font-size: 14px;
    font-weight: bold;
`;

export const Value = styled.Text`
    color: #737380;
    font-size: 15px;
    margin-bottom: 24px;
    margin-top: 8px;
`;

export const MoreDetailsButton = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const MoreDetails = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`;