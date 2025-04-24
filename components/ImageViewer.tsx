import { Image } from "react-native";
import { ComponentProps } from "react";

const ImageViewer = (props: ComponentProps<typeof Image>) => {
  return <Image {...props} />;
};

export default ImageViewer;
