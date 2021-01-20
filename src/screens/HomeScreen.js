import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { Rating } from "react-native-ratings";
import BottomNavigation from "../components/BottomNavigation";
import PopularFoodItem from "../components/PopularFoodItem";

export default function HomeScreen({ navigation }) {
  const popularSearchItems = [
    { title: "Burger", icon: require("../assets/icons/ic_burger.png"), id: 1 },
    {
      title: "Fastfood",
      icon: require("../assets/icons/ic_fastfood.png"),
      id: 2,
    },
    {
      title: "Proteins",
      icon: require("../assets/icons/ic_protein.png"),
      id: 3,
    },
    { title: "Salad", icon: require("../assets/icons/ic_salad.png"), id: 4 },
  ];

  const popularFood = [
    {
      id: 1,
      title: "Grilled salmon",
      image: [
        require("../assets/images/grilled_salmon.png"),
        require("../assets/images/plate1.png"),
        require("../assets/images/plate2.png"),
      ],
      isFavorite: true,
      averageRating: 4,
      totalReviews: 200,
      amount: 96.0,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: "Pasta with ham",
      image: [
        require("../assets/images/plate2.png"),
        require("../assets/images/plate1.png"),
        require("../assets/images/grilled_salmon.png"),
      ],
      isFavorite: true,
      averageRating: 4.9,
      totalReviews: 200,
      amount: 70.0,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const bestFood = [
    {
      id: 1,
      title: "Burrito",
      image: require("../assets/images/burrito.jpeg"),
      isFavorite: true,
      averageRating: 4.9,
      totalReviews: 200,
      amount: 96.0,
    },
  ];

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.searchTitle}>
          <Text>What would you like to eat?</Text>
          <Image
            source={require("../assets/icons/ic_notification.png")}
            style={{ height: 20, width: 20 }}
          />
        </View>
        <View style={style.searchBar}>
          <Image
            source={require("../assets/icons/ic_search.png")}
            style={{ height: 20, width: 20, marginEnd: 10, borderRadius: 15 }}
          />

          <TextInput
            placeholder="Find a Food or Restaurant"
            style={{ flex: 1 }}
          />
          <Image
            source={require("../assets/icons/ic_sort.png")}
            style={{ height: 20, width: 20 }}
          />
        </View>
        <View>
          <FlatList
            horizontal
            data={popularSearchItems}
            renderItem={({ item }) => {
              return (
                <View
                  key={item.key}
                  style={{
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginTop: 15,
                  }}
                >
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 5,
                    }}
                    source={item.icon}
                  />
                  <Text style={{ marginTop: 8 }}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={{ marginTop: 15, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "300" }}>Popular Food</Text>
          <FlatList
            style={{ marginTop: 15 }}
            horizontal
            data={popularFood}
            renderItem={({ item }) => {
              return <PopularFoodItem item={item} navigation={navigation} />;
            }}
          />
        </View>
        <View style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
          <Text>Best Food</Text>
          <FlatList
            scrollEnabled="false"
            style={{ marginTop: 15 }}
            data={bestFood}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    alignContent: "center",
                    marginBottom: 10,
                    width: "100%",
                    height: 300,
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      flex: 1,
                      width: "100%",
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                  />
                  <View
                    style={{
                      padding: 5,
                    }}
                  >
                    <View
                      style={{
                        height: 30,
                        flexDirection: "row",
                        marginVertical: 5,
                      }}
                    >
                      <Text
                        style={{
                          flex: 1,
                          marginTop: 5,
                        }}
                      >
                        {item.title}
                      </Text>
                      <View
                        style={{
                          borderRadius: 50,
                          backgroundColor: "white",
                          height: 30,
                          width: 30,
                          justifyContent: "center",
                          shadowColor: "red",
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.2,
                          shadowRadius: 10,
                        }}
                      >
                        <Image
                          source={require("../assets/icons/ic_share.png")}
                          style={{
                            height: 15,
                            width: 15,
                            alignSelf: "center",
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          flex: 1,
                        }}
                      >
                        <Text>{item.averageRating}</Text>
                        <Rating
                          type="star"
                          ratingCount={5}
                          imageSize={13}
                          ratingBackgroundColor="red"
                          startingValue={item.averageRating}
                          readonly
                          style={{ marginHorizontal: 4 }}
                        />
                        <Text>{`(${item.totalReviews})`}</Text>
                      </View>
                      <Text
                        style={{ fontSize: 18, fontWeight: "bold" }}
                      >{`$${item.amount.toFixed(2)}`}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,250,250,1)",
  },
  searchTitle: {
    flexDirection: "row",
    alignItems: "stretch",
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  searchBar: {
    borderColor: "rgba(241, 241, 241, 1)",
    flexDirection: "row",
    borderWidth: 1,
    height: 40,
    padding: 12,
    marginTop: 5,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
