import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BottomNavigation() {
  return (
    <View
      style={{
        height: 56,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
      }}
    >
      <BottomNavigationItem
        title="Home"
        icon={require("./../../assets/icons/ic_home.png")}
        isSelected={true}
        onPress={() => {}}
      />

      <BottomNavigationItem
        title="Near By"
        icon={require("./../../assets/icons/ic_location.png")}
        onPress={() => {}}
      />
      <BottomNavigationItem
        title="Cart"
        icon={require("./../../assets/icons/ic_cart.png")}
        onPress={() => {}}
      />
      <BottomNavigationItem
        title="Account"
        icon={require("./../../assets/icons/ic_user.png")}
        onPress={() => {}}
      />
    </View>
  );
}

export function BottomNavigationItem({ title, icon, isSelected }) {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        justifyContent: "center",
        marginHorizontal: 5,
        flex: 1,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 25,
            width: 25,
            tintColor: isSelected ? "red" : "gray",
          }}
          source={icon}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: 4,
            color: isSelected ? "red" : "gray",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
