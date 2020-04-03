import React from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Convertions() {
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
      />

      <FlatList 
        data={[1, 2, 3, 4]}
        showsVerticalScrollIndicator={false}
        keyExtractor={convertion => String(convertion)}
        renderItem={() => (
            <View style={styles.containerResult}>
                <View style={styles.titleContainer}>
                    <Text style={styles.resultTitle}>Dólar Comercial: </Text>
                    <Text>Valor atual: R$5,26</Text>
                </View>
  
                <Text style={styles.resultText}>
                    <Text style={styles.code}>USD </Text>
                    <Feather name="arrow-right" size={14} color="#1bd75e" />
                    <Text style={styles.code}> BRL </Text>R$5,26
                </Text>
  
                <Text style={styles.resultSubtitle}>Última atualização do valor: </Text>
                <Text style={styles.resultText}>03/04/2020 12:30:25</Text>
            </View>
        )}
      />

    </View>
  );
}
