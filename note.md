# First, run the detached virutal device by using this command below using cmd or powershell on windows:
<....>/Sdk/emulator : 1) emulator -list-avds 2) emulator -avd <device_name>


npm install <package_name> then cd android && ./gradlew clean ( do this after every package install ) then below

1. npm start or (not working ? ) then npm start -- --reset-cache and then cd android && ./gradlew clean


2. npm run android 


# Type of Navigations are: 1) Stack Navigation  2) Drawer Navigation 3) Bottom Tabs Navigation

# React Navigation/DevTools is automatically disabled in production so no need to handle it for "production build"

# react-native-flipper (if it has ^0.21.0) then just use 0.21.0 with android / app / build.grade and android/build.gradle

# After installing Flipper.zip software on windows and restart and change sdk location from settings as needed


## React Native API References: `https://reactnavigation.org/docs/navigation-container`


## custom router and route configs: `https://reactnavigation.org/docs/custom-routers`

## custom navigators: `https://reactnavigation.org/docs/custom-navigators`