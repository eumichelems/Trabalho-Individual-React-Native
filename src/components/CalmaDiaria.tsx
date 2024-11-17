import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const CalmaDiaria = () => {
  const handlePressAudio = () => {
    Linking.openURL(
      "https://open.spotify.com/episode/62BCMIiLVOEzevy9FFv55c?si=0528a6f164844e34"
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{
          uri: "https://images.pexels.com/photos/620530/pexels-photo-620530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <TouchableOpacity style={styles.textContainer} onPress={handlePressAudio}>
        <Image
          style={styles.fotoPerfil}
          source={{
            uri: "https://images.pexels.com/photos/6957965/pexels-photo-6957965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View style={styles.texts}>
          <Text style={styles.texto}>Daily Calm</Text>
          <Text style={styles.cardSubtitle}>Meditações • Marina Gutemberg</Text>
          <Text style={styles.cardDate}>27 de set • Meditação</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.customContainer}>
        <View style={styles.customContent}>
          {/* <Text style={styles.topText}>Personalize suas recomendações</Text> */}
          <Text style={styles.mainText}>Como você está se sentindo?</Text>
          <View style={styles.iconContainer}>
            <FontAwesome6 name="face-smile" size={30} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "flex-start",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#60698e",
  },
  imagem: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    bottom: 170,
  },

  textContainer: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    alignItems: "center",
    flexDirection: "row",
  },

  texts: {
    justifyContent: "center",
  },

  texto: {
    marginTop: 10,
    color: "#fff",
    fontSize: 20,
    marginBottom: 4,
  },

  cardSubtitle: {
    color: "#A1A1B1",
    fontSize: 14,
    marginTop: 1,
    marginBottom: 1,
  },

  cardDate: {
    color: "#A1A1B1",
    fontSize: 12,
    marginTop: 4,
  },

  fotoPerfil: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 1,
    marginRight: 15,
  },

  customContainer: {
    backgroundColor: "#2f2a5e",
    borderColor: "#60698e",
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    paddingVertical: 15,
    bottom: 40,
  },

  customContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    padding: 10,
  },
  topText: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 5,
  },
  mainText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    left: 50,
  },
  iconContainer: {
    flexDirection: "row",
    backgroundColor: "#be9f3a",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    right: 260,
    width: 40,
    height: 40,
  },
});
