import React from "react";
import { useWindowDimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const BottomSheet = React.forwardRef(
  (
    props: {
      height?: number;
      duration?: number;
      bg?: string;
      children: JSX.Element | JSX.Element[];
      avoidKeyboard?: boolean
    },
    ref: React.ForwardedRef<any>
  ) => {
    const { height: device_height } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    return (
      <RBSheet
        ref={ref}
        useNativeDriver={false}
        height={
          props.height === 0 ? undefined : props.height || device_height - 450
        }
        openDuration={props.duration || 300}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom: bottom,
            backgroundColor: "white",
          },
          draggableIcon: {
            backgroundColor: "#105CE2",
            // paddingVertical: 10,
          },
        }}
        draggable
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: props.avoidKeyboard,
        }}
      >
        {props.children}
      </RBSheet>
    );
  }
);
