export default class NavigationUtils {
  /**
   * 跳转页面
   * @param {*} page 跳转的页面名
   * @param {*} params 需要传递的参数
   */
  static goPage(page, params = {}) {
    const navigation = NavigationUtils.navigation;

    if (!navigation) {
      return;
    }
    navigation.navigate(page, {...params});
  }
}
