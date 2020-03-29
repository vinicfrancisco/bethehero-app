import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { Container, Property, Value, MoreDetailsButton, MoreDetails } from './styles';

export default function Incident({ incident }) {
    const navigation = useNavigation();

  return (
    <Container> 
      <Property>ONG:</Property>
      <Value>{incident.name}</Value>

      <Property>CASO:</Property>
      <Value>{incident.title}</Value>

      <Property>VALOR:</Property>
      <Value>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Value>

      <MoreDetailsButton onPress={() => navigation.push('Detail', { incident })}>
        <MoreDetails>Ver mais detalhes</MoreDetails>
        <Feather name="arrow-right" size={16} color="#E02041" />
      </MoreDetailsButton>
    </Container>
  );
}
