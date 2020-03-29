import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Linking  } from 'react-native';

import logoImage from '../../assets/logo.png';

import { 
  Container,
  Header, 
  HeaderButton, 
  Logo, 
  Incident, 
  Property, 
  Value, 
  Contact, 
  HeroTitle, 
  HeroDescription, 
  Actions,
  Action,
  ActionText
 } from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso: ${
    incident.title
  } com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  const handleSendEmail = useCallback(async () => {
    await MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }, []);

  const handleSendWhatsApp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <HeaderButton onPress={() => navigation.pop()}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </HeaderButton>
      </Header>

      <Incident>
        <Property style={{ marginTop: 0 }}>ONG:</Property>
        <Value>{incident.name} de {incident.city}/{incident.uf}</Value>

        <Property>CASO:</Property>
        <Value>{incident.title}</Value>

        <Property>VALOR:</Property>
        <Value>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Value>
      </Incident>

      <Contact>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>
      </Contact>

      <Actions>
        <Action onPress={handleSendWhatsApp}>
          <ActionText>WhatsApp</ActionText>
        </Action>

        <Action onPress={handleSendEmail}>
          <ActionText>E-mail</ActionText>
        </Action>
      </Actions>
    </Container>
  );
}
