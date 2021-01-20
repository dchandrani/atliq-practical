import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";

export default function DetailsScreen({ route, navigation }) {
  const { title, image, amount, details } = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: "28%",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
            height: 200,
            position: "absolute",
            top: 0,
          }}
          horizontal={true}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
        >
          {image.map((source, i) => {
            return (
              <Image
                resizeMode="center"
                key={i}
                source={source}
                style={{ height: 200 }}
              ></Image>
            );
          })}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../assets/icons/ic_back.png")}
              style={{ height: 22, width: 22 }}
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/icons/ic_cart.png")}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          marginHorizontal: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 15,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
            <Text>
              <Text style={{ color: "gray" }}>by</Text> Pizza Hut
            </Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "300" }}>
            ${amount.toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 45, padding: 18 }}>-</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              height: 38,
              width: "50%",
              justifyContent: "center",
              borderRadius: 5,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              console.log("add to bag");
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Add to Bag
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 40, padding: 18, color: "red" }}>+</Text>
        </View>

        <ScrollableTabView
          tabBarActiveTextColor="red"
          tabBarInactiveTextColor="gray"
          tabBarUnderlineStyle={{
            backgroundColor: "red",
          }}
        >
          <View tabLabel="Details">
            <Text style={{ padding: 5, textAlign: "justify" }}>{details}</Text>
          </View>
          <View tabLabel="Review">
            <Text>Review</Text>
          </View>
        </ScrollableTabView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/icons/ic_time.png")}
            style={{ height: 25, width: 25, marginBottom: 20 }}
          />
          <Text style={{ fontSize: 12 }}>12am-3pm</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/icons/ic_location.png")}
            style={{ height: 25, width: 25, marginBottom: 20 }}
          />
          <Text style={{ fontSize: 12 }}>3.5 km</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/icons/ic_map.png")}
            style={{ height: 25, width: 25, marginBottom: 20 }}
          />
          <Text style={{ fontSize: 12 }}>Map View</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/icons/ic_delivery.png")}
            style={{ height: 25, width: 25, marginBottom: 20 }}
          />
          <Text style={{ fontSize: 12 }}>Delivery</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,250,250,1)",
  },
});
