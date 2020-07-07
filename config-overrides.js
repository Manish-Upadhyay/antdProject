const {
  default_theme_config
} = require("./src/Theme/DefaultThemeConfig/default_theme_config");
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      ...default_theme_config
    }
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
