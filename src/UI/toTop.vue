<template>
  <div class="scrollTop" @click="toTop">
    <img src="@/assets/images/uparrow.png"/>
    <!-- <div style=""> -->
  </div>
</template>
<script>
  export default {
    name: 'scroll-top',
    data (){
      return {
        scrollTop: 0,
        time: 0,
        dParams: 20,
        scrollState: 0
      }
    },
    computed:{
      showTop: function(){
        let value = this.scrollTop>200?true:false;
        return value;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop);
    },
    methods: {
      toTop(e) {
        if(this.scrollState){
          return;
        }
        this.scrollState = 1;
        e.preventDefault();
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let _this = this;
        this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 30);
      },
      gotoTop(distance){
        this.dParams += 20;
        distance = distance>0 ? distance : 0;
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
        if(this.scrollTop < 10){
          clearInterval(this.time);
          this.dParams = 20;
          this.scrollState = 0;
        }
      },
      getScrollTop() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
   
  }
</script>
<style scoped>
  .scrollTop {
    position: fixed;
    right: 40px;
    bottom: 80px;
    cursor: pointer;
    z-index: 999;
    /* filter:
    progid:DXImageTransform.Microsoft.AlphaImageLoader(src='~assets/images/uparrow.png',
    sizingMethod='crop');width:112px;height:112; */

    /* width: 0px;
    height: 0px;
    border-style: solid;
    border-width:  0px 14px 21px 14px;
    border-color: transparent transparent rgb(134, 134, 172) transparent; */
  }
  .scrollTop > img{
    width: 56px;
    height: 56px;
    -webkit-filter: opacity(15%); /* Safari */
    filter: opacity(15%);
    transform:rotate(90deg);
    border-radius: 50%;
  }

</style>