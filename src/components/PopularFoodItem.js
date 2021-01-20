import React from "react";
import { Text, View, Image } from "react-native";
import { Rating } from "react-native-ratings";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PopularFoodItem({ item, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate("DetailsScreen", { item });
      }}
    >
      <View
        style={{
          padding: 10,
          shadowColor: "red",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 15,
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            alignContent: "center",
            width: 230,
            height: 300,
            borderRadius: 5,
            padding: 5,
            backgroundColor: "white",
          }}
        >
          <View style={{ width: "100%", flex: 1 }}>
            <Image
              resizeMode="center"
              source={item.image[0]}
              style={{
                width: "100%",
                flex: 1,
              }}
            />

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
                position: "absolute",
                top: 5,
                right: 5,
              }}
            >
              <Image
                source={require("../../assets/icons/ic_favorite.png")}
                style={{
                  height: 15,
                  width: 15,
                  alignSelf: "center",
                }}
              />
            </View>
          </View>

          <View style={{ padding: 5 }}>
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
                  source={require("../../assets/icons/ic_share.png")}
                  style={{
                    height: 15,
                    width: 15,
                    alignSelf: "center",
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
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
      </View>
    </TouchableOpacity>
  );
}
