import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE, SPACING } from "../theme/theme";

const HeaderBar = ({ title }: { title?: string }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>HeaderBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "poppins_semibold",
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
