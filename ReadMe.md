This is a custom swipeable toast basic.
My build versions:
1- react-native-gesture-handler: 2.9.0
2- react-native-reanimated: 2.14.4

## Installation

```bash
  npm install react-native-swipeable-toast-basic
```

## Doc

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)

## Usage

```js
    //App.js
    import { GestureHandlerRootView } from "react-native-gesture-handler";

    <GestureHandlerRootView style={{ flex: 1 }}>
        //Your codes in here
    </GestureHandlerRootView>;

    //Usage in screen
    import React, { useRef } from "react";
    import { Button } from "react-native";
    import SwipeableToast from "react-native-swipeable-toast-basic";

    const toastRef = useRef(null);

    <Button
        title="Show Swipeable Toast Basic"
        onPress={() => {
            toastRef.current.showToast({
                type: "success", // success - info - warning - error
                title: "Title",
                text: "Text",
                duration: 3000,
                toastWidth: "90%",
                toastPadding: 16,
                toastBorderRadius: 16,
                toastBorderWidth: 0.5,
                toastSuccessBgColor: "#DEF1D7",
                toastSuccessBorderColor: "#1F8722",
                toastInfoBgColor: "#ECF4FE",
                toastInfoBorderColor: "#1F5F87",
                toastWarningBgColor: "#FEF7EC",
                toastWarningBorderColor: "#F08135",
                toastErrorBgColor: "#FAE1DB",
                toastErrorBorderColor: "#D9100A",
                toastSuccessTitleColor: "#1F8722",
                toastInfoTitleColor: "#1F6587",
                toastWarningTitleColor: "#F08135",
                toastErrorTitleColor: "#D9100A",
                toastSuccessTextColor: "#1F8722",
                toastInfoTextColor: "#1F6587",
                toastWarningTextColor: "#F08135",
                toastErrorTextColor: "#D9100A",
            });
        }}
    />;

    <SwipeableToast ref={toastRef} />;
```

## API

| prop                      | type     | description          | default   |
| :------------------------ | :------- | :------------------- | :-------- |
| `type`                    | `String` | Toast type.          | "success" |
| `title`                   | `String` | Toast title.         | "Non"     |
| `text`                    | `String` | Toast text.          | "Non"     |
| `duration`                | `Number` | Toast duration.      | 3000      |
| `toastWidth`              | `String` | Toast width.         | "90%"     |
| `toastPadding`            | `Number` | Toast padding.       | 16        |
| `toastBorderRadius`       | `Number` | Toast border radius. | 16        |
| `toastBorderWidth`        | `Number` | Toast border width.  | 0.5       |
| `toastSuccessBgColor`     | `String` | Toast bg color.      | "#DEF1D7" |
| `toastSuccessBorderColor` | `String` | Toast border color.  | "#1F8722" |
| `toastInfoBgColor`        | `String` | Toast bg color.      | "#ECF4FE" |
| `toastInfoBorderColor`    | `String` | Toast border color.  | "#1F5F87" |
| `toastWarningBgColor`     | `String` | Toast bg color.      | "#FEF7EC" |
| `toastWarningBorderColor` | `String` | Toast border color.  | "#F08135" |
| `toastErrorBgColor`       | `String` | Toast bg color.      | "#FAE1DB" |
| `toastErrorBorderColor`   | `String` | Toast border color.  | "#D9100A" |
| `toastSuccessTitleColor`  | `String` | Toast title color.   | "#1F8722" |
| `toastInfoTitleColor`     | `String` | Toast title color.   | "#1F6587" |
| `toastWarningTitleColor`  | `String` | Toast title color.   | "#F08135" |
| `toastErrorTitleColor`    | `String` | Toast title color.   | "#D9100A" |
| `toastSuccessTextColor`   | `String` | Toast text color.    | "#1F8722" |
| `toastInfoTextColor`      | `String` | Toast text color.    | "#1F6587" |
| `toastWarningTextColor`   | `String` | Toast text color.    | "#F08135" |
| `toastErrorTextColor`     | `String` | Toast text color.    | "#D9100A" |
