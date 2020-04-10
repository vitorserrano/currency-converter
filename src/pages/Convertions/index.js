import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

import api from "../../services/api";

export default function Convertions() {
  const [conversions, setConversions] = useState([]);
  const [valueConversion, setValueConversion] = useState('1');

  async function loadConversions() {
    if (valueConversion === "") {
      return;
    }

    const response = await api.get("/all");
    const { data } = response;

    let array = []; 

    Object.entries(data).forEach(([key, value]) => {
      value.id = key;
      array.push(value);
    });

    const result = array.map((item) => {
      return { value: item.high * Number(valueConversion), ...item };
    });

    setConversions(result);
  }

  const currencyFormat = (value) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const dateFormat = (date) =>
    date.split('-').reverse().join('/');

  useEffect(() => {
    loadConversions();
  }, [valueConversion]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerLogo}>
          <Image source={logoImg} style={styles.logo} />
        </View>

      <Text style={styles.title}>Total de conversões: {conversions.length}</Text>
      </View>

      <Text style={styles.subtitle}>Conversão de Moedas</Text>
      <Text style={styles.description}>
        Informe um valor em R$ e será apresentado a conversão para outras
        moedas.
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Digite um valor"
        value={valueConversion}
        onChangeText={setValueConversion}
      />

      <FlatList
        data={conversions}
        keyExtractor={(conversion) => String(conversion.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: conversion }) => (
          <View style={styles.containerResult}>
            <View style={styles.titleContainer}>
              <Text style={styles.resultTitle}>{conversion.name}</Text>
              <View style={styles.currentValue}>
                <Text>Valor atual: </Text>
                <Text> {currencyFormat(conversion.high)} </Text>
              </View>
            </View>

            <Text style={styles.resultText}>
              <Text style={styles.code}>{conversion.id} </Text>
              <Feather name="arrow-right" size={14} color="#1bd75e" />
              <Text style={styles.code}>{conversion.codein} </Text>
              <Text>{currencyFormat(conversion.value)}</Text>
            </Text>

            <Text style={styles.resultSubtitle}>
              Última atualização do valor:
            </Text>
            <Text style={styles.resultText}>{moment(conversion.create_date).format('DD/MM/YYY hh:mm:ss')}</Text>
          </View>
        )}
      />
    </View>
  );
}
