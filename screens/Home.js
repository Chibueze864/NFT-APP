import { useState } from "react";
import { SafeAreaView, FlatList, Text, View, StyleSheet } from "react-native";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";
const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value.length) {
      return setNftData(NFTData);
    }
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.viewOne}>
        <View style={styles.viewTwo}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={styles.viewThree}>
          <View style={styles.viewFour} />
          <View style={styles.viewFive} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewOne: {
    flex: 1,
  },
  viewTwo: {
    zIndex: 0,
  },
  viewThree: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  viewFour: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  viewFive: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
