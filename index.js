import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSequence,
  withDelay,
  withTiming,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const SwipeableToast = forwardRef(({}, ref) => {
  const toastTopAnimation = useSharedValue(-100);
  const [isShow, setIsShow] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastTitle, setToastTitle] = useState("Non");
  const [toastText, setToastText] = useState("Non");
  const [toastDuration, setToastDuration] = useState(3000);
  const TOP_VALUE = Platform.OS === "ios" ? 60 : 20;

  const [toastWidth, setToastWidth] = useState("90%");
  const [toastPadding, setToastPadding] = useState(16);
  const [toastBorderRadius, setToastBorderRadius] = useState(16);
  const [toastBorderWidth, setToastBorderWidth] = useState(0.5);

  const [toastSuccessBgColor, setToastSuccessBgColor] = useState("#DEF1D7");
  const [toastSuccessBorderColor, setToastSuccessBorderColor] =
    useState("#1F8722");

  const [toastInfoBgColor, setToastInfoBgColor] = useState("#ECF4FE");
  const [toastInfoBorderColor, setToastInfoBorderColor] = useState("#1F5F87");

  const [toastWarningBgColor, setToastWarningBgColor] = useState("#FEF7EC");
  const [toastWarningBorderColor, setToastWarningBorderColor] =
    useState("#F08135");

  const [toastErrorBgColor, setToastErrorBgColor] = useState("#FAE1DB");
  const [toastErrorBorderColor, setToastErrorBorderColor] = useState("#D9100A");

  const [toastSuccessTitleColor, setToastSuccessTitleColor] =
    useState("#1F8722");
  const [toastInfoTitleColor, setToastInfoTitleColor] = useState("#1F6587");
  const [toastWarningTitleColor, setToastWarningTitleColor] =
    useState("#F08135");
  const [toastErrorTitleColor, setToastErrorTitleColor] = useState("#D9100A");

  const [toastSuccessTextColor, setToastSuccessTextColor] = useState("#1F8722");
  const [toastInfoTextColor, setToastInfoTextColor] = useState("#1F6587");
  const [toastWarningTextColor, setToastWarningTextColor] = useState("#F08135");
  const [toastErrorTextColor, setToastErrorTextColor] = useState("#D9100A");

  useImperativeHandle(
    ref,
    () => ({
      showToast,
    }),
    [showToast]
  );

  const showToast = useCallback(
    ({
      type,
      title,
      text,
      duration,
      toastWidth,
      toastPadding,
      toastBorderRadius,
      toastBorderWidth,
      toastSuccessBgColor,
      toastSuccessBorderColor,
      toastInfoBgColor,
      toastInfoBorderColor,
      toastWarningBgColor,
      toastWarningBorderColor,
      toastErrorBgColor,
      toastErrorBorderColor,
      toastSuccessTitleColor,
      toastInfoTitleColor,
      toastWarningTitleColor,
      toastErrorTitleColor,
      toastSuccessTextColor,
      toastInfoTextColor,
      toastWarningTextColor,
      toastErrorTextColor,
    }) => {
      if (toastWidth != undefined) {
        setToastWidth(toastWidth);
      }

      if (toastPadding != undefined) {
        setToastPadding(toastPadding);
      }

      if (toastBorderRadius != undefined) {
        setToastBorderRadius(toastBorderRadius);
      }

      if (toastBorderWidth != undefined) {
        setToastBorderWidth(toastBorderWidth);
      }

      if (toastSuccessBgColor != undefined) {
        setToastSuccessBgColor(toastSuccessBgColor);
      }

      if (toastSuccessBorderColor != undefined) {
        setToastSuccessBorderColor(toastSuccessBorderColor);
      }

      if (toastInfoBgColor != undefined) {
        setToastInfoBgColor(toastInfoBgColor);
      }

      if (toastInfoBorderColor != undefined) {
        setToastInfoBorderColor(toastInfoBorderColor);
      }

      if (toastWarningBgColor != undefined) {
        setToastWarningBgColor(toastWarningBgColor);
      }

      if (toastWarningBorderColor != undefined) {
        setToastWarningBorderColor(toastWarningBorderColor);
      }

      if (toastErrorBgColor != undefined) {
        setToastErrorBgColor(toastErrorBgColor);
      }

      if (toastErrorBorderColor != undefined) {
        setToastErrorBorderColor(toastErrorBorderColor);
      }

      if (toastSuccessTitleColor != undefined) {
        setToastSuccessTitleColor(toastSuccessTitleColor);
      }

      if (toastInfoTitleColor != undefined) {
        setToastInfoTitleColor(toastInfoTitleColor);
      }

      if (toastWarningTitleColor != undefined) {
        setToastWarningTitleColor(toastWarningTitleColor);
      }

      if (toastErrorTitleColor != undefined) {
        setToastErrorTitleColor(toastErrorTitleColor);
      }

      if (toastSuccessTextColor != undefined) {
        setToastSuccessTextColor(toastSuccessTextColor);
      }

      if (toastInfoTextColor != undefined) {
        setToastInfoTextColor(toastInfoTextColor);
      }

      if (toastWarningTextColor != undefined) {
        setToastWarningTextColor(toastWarningTextColor);
      }

      if (toastErrorTextColor != undefined) {
        setToastErrorTextColor(toastErrorTextColor);
      }

      toastTopAnimation.value = -100;
      setIsShow(true);
      setToastType(type);
      setToastTitle(title);
      setToastText(text);
      setToastDuration(duration);
      toastTopAnimation.value = withSequence(
        withTiming(TOP_VALUE),
        withDelay(
          duration,
          withTiming(-100, null, (finish) => {
            if (finish) {
              runOnJS(setIsShow)(false);
            }
          })
        )
      );
    },
    [TOP_VALUE, toastTopAnimation]
  );

  const animatedTopStyles = useAnimatedStyle(() => {
    return {
      top: toastTopAnimation.value,
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, x) => {
      x.startY = toastTopAnimation.value;
    },
    onActive: (event, x) => {
      if (event.translationY < 100) {
        toastTopAnimation.value = withSpring(x.startY + event.translationY, {
          damping: 600,
          stiffness: 100,
        });
      }
    },
    onEnd: (event) => {
      if (event.translationY < 0) {
        toastTopAnimation.value = withTiming(-100, null, (finish) => {
          if (finish) {
            runOnJS(setIsShow)(false);
          }
        });
      } else if (event.translationY > 0) {
        toastTopAnimation.value = withSequence(
          withTiming(TOP_VALUE),
          withDelay(
            toastDuration,
            withTiming(-100, null, (finish) => {
              if (finish) {
                runOnJS(setIsShow)(false);
              }
            })
          )
        );
      }
    },
  });

  return (
    <>
      {isShow && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              styles.toastContainer,
              toastType === "success"
                ? {
                    backgroundColor: toastSuccessBgColor,
                    borderColor: toastSuccessBorderColor,
                  }
                : toastType === "info"
                ? {
                    backgroundColor: toastInfoBgColor,
                    borderColor: toastInfoBorderColor,
                  }
                : toastType === "warning"
                ? {
                    backgroundColor: toastWarningBgColor,
                    borderColor: toastWarningBorderColor,
                  }
                : {
                    backgroundColor: toastErrorBgColor,
                    borderColor: toastErrorBorderColor,
                  },
              animatedTopStyles,
              {
                width: toastWidth,
                padding: toastPadding,
                borderRadius: toastBorderRadius,
                borderWidth: toastBorderWidth,
              },
            ]}
          >
            <View>
              <Image
                source={
                  toastType === "success"
                    ? require("./assets/success.png")
                    : toastType === "info"
                    ? require("./assets/info.png")
                    : toastType === "warning"
                    ? require("./assets/warning.png")
                    : require("./assets/error.png")
                }
                style={styles.toastIcon}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text
                style={[
                  styles.toastTitle,
                  toastType === "success"
                    ? { color: toastSuccessTitleColor }
                    : toastType === "info"
                    ? { color: toastInfoTitleColor }
                    : toastType === "warning"
                    ? { color: toastWarningTitleColor }
                    : { color: toastErrorTitleColor },
                ]}
              >
                {toastTitle.length > 30
                  ? toastTitle.substring(0, 30) + "..."
                  : toastTitle}
              </Text>
              <Text
                style={[
                  styles.toastText,
                  toastType === "success"
                    ? { color: toastSuccessTextColor }
                    : toastType === "info"
                    ? { color: toastInfoTextColor }
                    : toastType === "warning"
                    ? { color: toastWarningTextColor }
                    : { color: toastErrorTextColor },
                ]}
              >
                {toastText.length > 120
                  ? toastText.substring(0, 120) + "..."
                  : toastText}
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 1
  },
  toastIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  labelContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  toastTitle: {
    marginLeft: 10,
    fontSize: 15,
    paddingRight: 20,
  },
  toastText: {
    marginLeft: 10,
    fontSize: 13,
    paddingRight: 30,
  },
});

export default SwipeableToast;
