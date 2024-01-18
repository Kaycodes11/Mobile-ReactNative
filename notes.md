## linking custom assets via "react-native.config.js" using "npx react-native-asset" or "npx react-native link"

## The hover on each bottom tab is from BlurView from TabNavigator.tsx line 24


# To add the custom icon of the app

1. prepare asset and export it as .png then go to 'appicon.co' select android
2. Go TO >> Android : app : src : main : res and paste here after unzipping


# to add splash screen (appicon.co)

1. npm install react-native-splash-screen

2. GO TO MainActivity.kt then add the necessary import

3. add "colors.xml" within res and add "layout within"

4. go to App.tsx and then React.useEffect(() => SplashScreen.hide(), [])


# icon.kitchen (app logo) 

1. upload png logo to this site and select "Android Icon"
2. when all done, download it then apart from first folder , create copy ic_launcher within each folder and then rename it "ic_launcher_round" ; then copy everything from within res and put within android : app : src : main : res (it will ask to overwrite so accept)
3. go to strings.xml and put the name which will user see on playstore e.g. where user installs the app (it doesn't need to be same as what in the package.json) and then app.json displayName : same name

# watch for the changes and run the latest build to a running virtual device

Virtual device (running) -> npm start (watch changes) -> npm run android

# to build and run an APK on a running physical or virtual device (without building metro server)

cd android && ./gradlew installRelease
