<template>
  <div>

    <div class="row" style="background: aqua">
        <div class="col-xs-6 col-sm-3">
          <div class="sortBox01  color01">
          <i class="iconfont icon-xinxi"></i>
          <p>
            <span class="sortSpan01">50</span>
            <span class="sortSpan02">新消息</span>
          </p>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3">
        <div class="sortBox01  color01">
          <i class="iconfont icon-xinxi"></i>
          <p>
            <span class="sortSpan01">50</span>
            <span class="sortSpan02">新消息</span>
          </p>
        </div>
      </div>

      <!-- Add the extra clearfix for only the required viewport -->
      <div class="clearfix visible-xs-block"></div>

      <div class="col-xs-6 col-sm-3">
        <div class="sortBox01  color01">
          <i class="iconfont icon-xinxi"></i>
          <p>
            <span class="sortSpan01">50</span>
            <span class="sortSpan02">新消息</span>
          </p>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3">
        <div class="sortBox01  color01">
          <i class="iconfont icon-xinxi"></i>
          <p>
            <span class="sortSpan01">50</span>
            <span class="sortSpan02">新消息</span>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "CardComponents"
    }
</script>

<style scoped>
  .col-xs-6{
    background: #55a532;
    padding: 30px;
  }
  .sort{
    display: flex;
    flex-wrap: wrap;
  }
  .sortBox{
    width: 23%;
    position: relative;
    transform-style: preserve-3d;
    margin: 20px 1%;
  }
  .sortBox01{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
  .sortBox01 i{
    font-size:40px;
    color: white;
  }
  .sortBox01 p{
    display: flex;
    flex-direction: column;
  }
  .sortSpan01{
    display: block;
    font-size: 35px;
    color: white;
  }
  .sortSpan02{
    display: block;
    font-size: 8px;
    color: white;
  }

  .sortBox02{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #edebeb;
    padding: 20px;
    position: absolute;
    top: 0;
    transform-style: preserve-3d;
    transform: rotateY(-180deg) translateZ(1px);
  }
  .sortBox02 i{
    font-size: 40px;
    color:#22a7f0 ;
  }
  .sortBox02 i:hover{
    color: #fa2a00;
    font-weight: 600;
  }
  .sortBox02 span{
    font-size: 14px;
    color:#22a7f0 ;
  }
  .color01{
    background: #fa2a00;
  }
  .color02{
    background: #fdd065;
  }
  .color03{
    background: #1cc4a3;
  }
  .color04{
    background: #2fb1f8;
  }
</style>
