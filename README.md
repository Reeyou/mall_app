## ReactNative
[TOC]
***
#### react-native-splash-screen刘海屏适配
###### 1.app项目中在<u>android\app\src\main\AndroidManifest.xml</u>中添加适配全面屏代码
```
 <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
       <!--start region 适配刘海屏-->
        <meta-data
            android:name="android.max_aspect"
            android:value="2.4"
        />
        <!-- huawei -->
       <meta-data
            android:name="android.notch_support"
            android:value="true"
        />
        <!-- xiaomi -->
        <meta-data
            android:name="notch.config"
            android:value="portrait|landscape" />
        <!--end region-->
    </application>
```
###### 2.在splash-screen插件源码中<u>android\src\main\res\values\styles.xml</u>添加如下样式
```
<resources>
    <style name="SplashScreen_SplashAnimation">
        <item name="android:windowExitAnimation">@android:anim/fade_out</item>
    </style>

    <style name="SplashScreen_SplashTheme" parent="Theme.AppCompat.NoActionBar">
        <item name="android:windowAnimationStyle">@style/SplashScreen_SplashAnimation</item>
    </style>
    <style name="SplashScreen_Fullscreen" parent="SplashScreen_SplashTheme">
        <item name="android:windowFullscreen">true</item>
        <!--start region 适配刘海屏 -->
        <item name="android:windowDrawsSystemBarBackgrounds">true</item>
        <item name="android:navigationBarColor">@android:color/transparent</item>
        <item name="android:statusBarColor">@android:color/transparent</item>
        <item name="android:windowTranslucentStatus">true</item>
        <item name="android:windowTranslucentNavigation">true</item>
        <!--end region-->
    </style>
</resources>
```
***
#### react-native-easy-toast
```
  <!-- 在Animated.timing方法中添加useNativeDriver属性 -->
  this.animation = Animated.timing(
      this.state.opacityValue,
      {
          toValue: this.props.opacity,
          duration: this.props.fadeInDuration,
          + useNativeDriver: true
      }
  )
```