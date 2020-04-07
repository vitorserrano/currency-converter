import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

import api from '../../services/api';

export default function Convertions() {
  const [conversions, setConversions] = useState([]);
  const [valueConversion, setValueConversion] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadConversions() {
    if (loading) {
      return;
    }

    setLoading(true);

    const response = await api.get('/all');
    const { data } = response;

    let array = conversions;

    Object.entries(data).forEach(([key, value]) => {
      value.id = key;
      value.toConvert = valueConversion * value.high;

      array.push(value);    
    });
    
    setConversions(array);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadConversions();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.containerLogo}>
                <Image source={logoImg} style={styles.logo} />
            </View>

            <Text style={styles.title}>Total de conversões: 5</Text>
        </View>

        <Text style={styles.subtitle}>Conversão de Moedas</Text>
        <Text style={styles.description}>
            Informe um valor em R$ e será apresentado a conversão para outras moedas.
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
        keyExtractor={conversion => conversion.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadConversions}
        onEndReachedThreshold={0.2}
        renderItem={({ item: conversion }) => (
            <View style={styles.containerResult}>
                <View style={styles.titleContainer}>
                    <Text style={styles.resultTitle}>{conversion.name}</Text>
                    <View style={styles.currentValue}>
                        <Text>Valor atual: </Text> 
                        <Text> {Intl.NumberFormat('pt-BR', { 
                                    style: 'currency', 
                                    currency: 'BRL' 
                                  }
                                ).format(conversion.high)}
                        </Text>
                    </View>
                </View>
  
                <Text style={styles.resultText}>
                    <Text style={styles.code}>{conversion.id} </Text>
                    <Feather name="arrow-right" size={14} color="#1bd75e" />
                    <Text style={styles.code}>{conversion.codein} </Text>
                    {Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                      }
                    ).format(conversion.toConvert)}
                </Text>
  
                <Text style={styles.resultSubtitle}>Última atualização do valor: </Text>
                <Text style={styles.resultText}>{conversion.create_date}</Text>
            </View>
        )}
      />

    </View>
  );
}
