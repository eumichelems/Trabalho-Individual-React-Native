import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

export function Recomendacao() {
  const handlePressAudio1 = () => {
    Linking.openURL(
      "https://open.spotify.com/intl-pt/track/7s7A3TATvZvA2cvY3cAGgv?si=a8f4943a2e404290"
    );
  };
  const handlePressVideo = () => {
    Linking.openURL("https://www.youtube.com/watch?v=psU7jLzN7RE");
  };
  const handlePressAudio2 = () => {
    Linking.openURL(
      "https://open.spotify.com/intl-pt/track/5pCsp12wih6L24FRcLPEtN?si=073a6436880343cc"
    );
  };
  const handlePressAudio3 = () => {
    Linking.openURL(
      "https://open.spotify.com/intl-pt/track/4dmhA5sMBdrrJmItFc7c1N?si=9b2462f795a84786"
    );
  };
  return (
    <View style={styles.recomendacoesContainer}>
      <Text style={styles.recomendacoesHeader}>Recomendado para você</Text>

      <TouchableOpacity
        style={styles.recomendacaoCard}
        onPress={handlePressAudio1}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.recomendacaoImage}
        />
        <View style={styles.recomendacaoTextContainer}>
          <Text style={styles.recomendacaoTitle}>
            At The Mercy Of The Waves
          </Text>
          <Text style={styles.recomendacaoSubtitle}>Música • 5 min</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.recomendacaoCard}
        onPress={handlePressVideo}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/914910/pexels-photo-914910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.recomendacaoImage}
        />
        <View style={styles.recomendacaoTextContainer}>
          <Text style={styles.recomendacaoTitle}>7 dias para dormir bem</Text>
          <Text style={styles.recomendacaoSubtitle}>Vídeo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.recomendacaoCard}
        onPress={handlePressAudio2}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2133/man-person-cute-young.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.recomendacaoImage}
        />
        <View style={styles.recomendacaoTextContainer}>
          <Text style={styles.recomendacaoTitle}>
            Relaxamento para sono profundo
          </Text>
          <Text style={styles.recomendacaoSubtitle}>
            Relaxe a mente e os músculos para um sono tranquilo
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.recomendacaoCard}
        onPress={handlePressAudio3}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.recomendacaoImage}
        />
        <View style={styles.recomendacaoTextContainer}>
          <Text style={styles.recomendacaoTitle}>A cachoeira</Text>
          <Text style={styles.recomendacaoSubtitle}>
            História para dormir • 27 min
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  recomendacoesContainer: {
    padding: 20,
  },
  recomendacoesHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  recomendacaoCard: {
    flexDirection: "row",
    backgroundColor: "rgba(30, 34, 90, 0.8)",
    borderRadius: 10,
    marginBottom: 15,
    padding: 20,
  },
  recomendacaoImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  recomendacaoTextContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },

  recomendacaoTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: "80%",
  },
  recomendacaoSubtitle: {
    color: "#D1D9E6",
    fontSize: 12,
    maxWidth: "80%",
  },
});
