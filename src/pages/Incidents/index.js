import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import api from '../../services/api';

import Incident from './components/Incident';

import logoImage from '../../assets/logo.png';

import {
  Container,
  Header,
  Logo,
  HeaderText,
  Title,
  Description
} from './styles';

export default function Incidents() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    try {
      if (loading) {
        return;
      }

      if (total > 0 && Incidents.length === total) {
        return;
      }

      setLoading(true);

      const response = await api.get('incidents', { 
        params : { page }
      });

      setTotal(response.headers['x-total-count']);
      setData([...data, ...response.data]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Falha ao carregar dados');
    }
  } 

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <HeaderText>
          Total de:
          <HeaderText bold>{`${total} casos`}</HeaderText>
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>

      <Description>Escolha um dos casos abiaxo e salve o dia</Description>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={incident => String(incident.id)}
        contentContainerStyle={{ marginTop: 32 }}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => <Incident incident={item} />}
      />
    </Container>
  );
}
