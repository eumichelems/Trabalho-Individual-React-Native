import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

export const BotaoPremium = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <FontAwesome6 name="star" size={25} color="#FFf" />
          <View style={styles.iconSeta}>
            <AntDesign name="right" size={29} color="#fff" />
          </View>
        </View>
        <Text style={styles.texto}>Desbloqueie tudo com o Calm Premium</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f2a5e",
    borderRadius: 10,
    borderColor: "#60698e",
    borderWidth: 2,
    paddingVertical: 15,
    margin: 20,
    bottom: "100%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconSeta: {
    alignItems: "center",
    left: 290,
    bottom: 25,
  },

  iconCircle: {
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#be9f3a",
    padding: 5,
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  texto: {
    flexWrap: "wrap",
    maxWidth: "60%",
    color: "#fff",
    fontSize: 19,
    fontFamily: "roboto",
    textAlign: "left",
    right: 40,
  },
});
