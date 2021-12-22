// umijs@3 规则，包名以@umijs/plugin、@umijs/preset 或者 umi-plugin、umi-preset 开头的，将会被直接使用。
// 所以这个项目使用了 plugins: @umijs/plugin-antd-mobile @umijs/plugin-esbuild @alitajs/hd
// 下方配置仅需要显式使用 alita 插件
export default {
  plugins: ['@alitajs/hd'],
  hd: {},
  esbuild: {},
};
