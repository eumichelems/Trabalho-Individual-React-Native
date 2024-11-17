import { Image, StyleSheet, Text, View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";

export const Cabecalho = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.imageHeader}
      />
      <LinearGradient
        colors={[
          "rgba(47, 42, 94, 0)",
          "rgba(47, 42, 94, 0.5)",
          "#2f2a5e", //comecei com cores sólidas no início
          "#2f2a5e",
          "#2f2a5e",
          "rgba(47, 42, 94, 0.8)",
          "rgba(47, 42, 94, 0)", //aqui apliquei a transparência na parte inferior
        ]}
        start={{ x: 0, y: 0 }} //pesquisando vi que o gradiente começa no topo por aqui
        end={{ x: 0, y: 1 }} // e aqui o gradiente vai para baixo, conforme eu queria
        style={styles.gradient}
      />
      <Text style={styles.name}>Calm</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.iconsContainer}>
          <View style={styles.premiumCircle}>
            <SimpleLineIcons name="present" size={18} color="black" />
          </View>
          <View style={styles.cenarioCircle}>
            <FontAwesome6 name="mountain-sun" size={15} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 90,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 500,
    overflow: "hidden",
  },

  name: {
    fontSize: 45,
    color: "#fff",
    fontFamily: "cursive",
    bottom: "79%",
  },

  imageHeader: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    top: 300,
    width: "150%",
    height: "45%",
  },

  iconsContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },

  premiumCircle: {
    marginLeft: 152,
    backgroundColor: "#e0c76d",
    bottom: 450,
    position: "absolute",
    width: 38,
    height: 38,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  cenarioCircle: {
    right: 170,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    bottom: 450,
    position: "absolute",
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
});
