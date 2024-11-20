import { View, Text } from "react-native";
import React, { useState } from "react";
import { Ethprice, NFTTitle } from "./Subinfo";
import { SIZES, FONTSC, COLORS, FONTS } from "../constants";
const DetailsDesc = ({ data }) => {
  const [text, settext] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "98%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <Ethprice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            Colors: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              Colors: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                Colors: COLORS.primary,
              }}
              onPress={() => {
                if (!readMore) {
                  settext(data.description);
                  setreadMore(true);
                } else {
                  settext(data.description.slice(0, 100));
                  setreadMore(false);
                }
              }}
            >
              {readMore ? "  show less" : "read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
