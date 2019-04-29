<template>
  <div>
    <scroll-view class="scroll-block" :scroll-y="true" :style="{height:userHeight + 'px'}">
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
    </scroll-view>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ],
      userHeight: 0
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  onShow () {
    if (typeof this.$mp.page.getTabBar === 'function') {
      this.$mp.page.getTabBar().setData({
        selected: 2
      })
    }
    const _this = this
    wx.getSystemInfo({
      success (res) {
        console.log(res.windowHeight)
        _this.userHeight = res.windowHeight - 48
      }
    })
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}
.scroll-block{
  height: 200px;
}
.log-item {
  margin: 10rpx;
}
</style>
