import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useStore } from "../store/store";
import { COLORS } from "../theme/theme";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import HeaderBar from "../components/HeaderBar";

const Home = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState();
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState();

  const sortCoffee = (search: string) => {
    if (search === "All") setSortedCoffee(CoffeeList);
    else
      setSortedCoffee(CoffeeList.filter((item: any) => item.name === search));
  };

  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    const uniqueCategory = new Set();
    for (const coffee of CoffeeList) {
      uniqueCategory.add(coffee.name);
    }
    setCategories(["All", ...uniqueCategory]);
    sortCoffee("All");
  }, [CoffeeList]);

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <HeaderBar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
});

export default Home;
