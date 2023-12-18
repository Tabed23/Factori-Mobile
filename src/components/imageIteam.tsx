import React from "react";
import type {
  StyleProp,
  ViewStyle,
  ImageURISource,
} from "react-native";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  Text,
} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>
  index?: number
  showIndex?: boolean
  uri:string
}

export const SBImageItem: React.FC<Props> = ({
  style,
  index: _index,
  showIndex = true,
  uri
}) => {

  const index = (_index || 0) + 1;
  const source = React.useRef<ImageURISource>({
    uri: `https://picsum.photos/id/${index}/400/300`,
  }).current;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image key={index} style={styles.image} source={{uri:uri}} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});