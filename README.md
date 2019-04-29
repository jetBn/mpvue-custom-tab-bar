# mpuve中自定义tabbar
  
由于之前使用vue进行开发，然后就尝试使用了`mpvue`类似的进行小程序的开发基本上能与vue语法相识，而`wepy`则是类似vue语法感觉不像了，所以选用了`mpvue`, 之前也有通过原生的小程序语法进行开发过。因为原生小程序中现在可以自定义`tabbar`了，所以就直接上手了。对在`mpvue`中自定义`tabbar`的尝试。
*****	
## 相关设置配置

1. 在相关`app.json`中配置`list`（list中配置项数得跟下面的`custom-tab-bar`中的`index.js`渲染的`tabar`数据条数相对应）并且设置`custom`为`true`。

2. 在`pages`中建立`custom-tab-bar`目录并且按照微信小程序官方文档写的自定`tabbar`样式（原生小程序写法）,在跳转路由的使用小程序的`tabbar`跳转事件`switchTab`。

3. 配置修改mpvue中打包在`build`下的`webpack.base.conf.js`文件添加一项`new CopyWebpackPlugin`直接进行拷贝不进行`mpvue`的进行打包。如下：
```
  new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/pages/custom-tab-bar'),
        to: path.resolve(config.build.assetsRoot, './custom-tab-bar'),
        ignore: ['.*']
      }
    ])
```
4. 相关的选中事件要通过`tabbar`中对应的页面在`onShow`中通过`getTabBar`获取`tabbar`的实例然后进行设置值改变选中状态。（最初我直接通过小程序中`component`中的js直接跳转后改选中的状态发现不行，后来通过mpvue官方的`github`的`issuss`通过大神指点之后才知道原来要通过对应的页面获取`getTabBar`实例改变`data`然后实现正确的选中）。

## Build Setup

```
# 安装依赖
 npm install

# 开发时构建
npm dev

# 打包构建
npm build

```
