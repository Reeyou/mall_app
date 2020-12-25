import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

 const SETTING_MENU = {
    Address: {name: '收货地址', Icons: Ionicons, icon: 'md-checkbox-outline'},
    Clear_Cache: {name: '清除本地缓存', Icons: Ionicons, icon: 'md-checkbox-outline'},
    About_Author: {name: '关于作者', Icons: Octicons, icon: 'smiley'},
    About_App: {name: '关于App', Icons: Ionicons, icon: 'logo-github'},
    Feedback: {name: '功能反馈', Icons: MaterialIcons, icon: 'feedback'},
    Share: {name: '分享', Icons: Ionicons, icon: 'md-share'},
    Version: {name: '当前版本', Icons: Ionicons, icon: 'md-share'},
    CodePush: {name: '检查更新', Icons: Ionicons, icon: 'ios-planet'},
    Logout: {name: '退出登录'},
};

export default SETTING_MENU