<template>
  <div>
<!--    <camera device-position="front" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>-->
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  onShow () {
    if (typeof this.$mp.page.getTabBar === 'function') {
      this.$mp.page.getTabBar().setData({
        selected: 3
      })
    }
    // wx.startSoterAuthentication({
    //   requestAuthModes: ['facial'],
    //   challenge: '1212121',
    //   authContent: '1212121'
    // })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
