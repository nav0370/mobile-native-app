import { Dimensions, StatusBar, StyleSheet } from "react-native";
import theme from "../../theme";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
  analyticsCardWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  avatarImg: {
    width: height * 0.06,
    height: height * 0.06,
    borderRadius: (height * 0.08) / 2,
  },
  headerSection: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.04,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  fontRegular: {
    fontFamily: theme.font.fontRegular,
    fontSize: 16,
    color: "#4c4e52",
  },
  fontBold: {
    fontFamily: theme.font.fontSemiBold,
  },
  logo: { height: 65, width: 65, borderRadius: 33 },
  name: {
    fontFamily: theme.font.fontMedium,
    fontSize: 22,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  profileSection: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    justifyContent: "center",
  },
  statsContainer: {
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    width: width / 3,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: { alignItems: "center", marginVertical: 8 },
  heading: {
    textAlign: "center",
    fontFamily: theme.font.fontSemiBold,
    fontSize: 20,
  },
  description: {
    fontFamily: theme.font.fontMedium,
    color: "#80838a",
  },
  optionMain: {
    fontFamily: theme.font.fontSemiBold,
    fontSize: 18,
    marginBottom: 10,
  },
  options: {
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    borderWidth: 0.8,
    borderRadius: 5,
    paddingVertical: 6,
    marginVertical: 10,
    alignItems: "center",
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
});

export default styles;
