import { View, Text, StyleSheet } from "react-native";

export const Saudacao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Boa tarde, Multiverso</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "roboto",
    bottom: 150,
    right: 60,
  },
});
