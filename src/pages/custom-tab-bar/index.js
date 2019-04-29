Component({
  data: {
    selected: 1,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      id: 1,
      pagePath: "/pages/index/main",
      iconPath: "/static/images/icon_component.png",
      selectedIconPath: "/static/images/icon_component_HL.png",
      text: "首页",
      special:false
    },{
      id: 2,
      pagePath: "/pages/logs/main",
      iconPath: "/static/images/add_plug.png",
      selectedIconPath: "/static/images/add_plug.png",
      text: "",
      special:true
    },{
      id: 3,
      pagePath: "/pages/me/main",
      iconPath: "/static/images/icon_API.png",
      selectedIconPath: "/static/images/icon_API_HL.png",
      text: "我的",
      special:false
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.log(e)
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    }
  }
})
