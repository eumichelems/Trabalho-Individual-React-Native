import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Cabecalho } from "./src/components/Cabecalho";
import { BotaoPremium } from "./src/components/BotaoPremium";
import { Saudacao } from "./src/components/Saudacao";
import { CalmaDiaria } from "./src/components/CalmaDiaria";
import { Recomendacao } from "./src/components/Recomendacao";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Cabecalho />
        <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 20 }}>
          <BotaoPremium />
        </View>
        <Saudacao />
        <CalmaDiaria />
        <Recomendacao />
      </ScrollView>

      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton}>
          <Entypo name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Octicons name="moon" size={24} color="#fff" />
          <Text style={styles.navText}>Sono</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Foundation name="magnifying-glass" size={24} color="#fff" />
          <Text style={styles.navText}>Descobrir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="#fff"
          />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="star" size={24} color="#fff" />
          <Text style={styles.navText}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3A74",
  },

  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1d2051",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#60698e",
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
});
