<template>
  <div style="width: 100%">
    <!--...bootstrap....-->
    <div class="row">
      <div class="col-xs-6 col-sm-3">

          <div class="sortBox">
            <div class="sortBox01  color01">
              <i class="iconfont">&#xe519;</i>
              <p>
                <span class="sortSpan01">总客户量</span>
                <span class="sortSpan02 sortSpan02Big">50<span class="sortSpan03">人</span></span>
              </p>
            </div>
            <div class="sortBox02">
              <i class="iconfont">&#xe519;</i>
              <span>总客户量</span>
            </div>
          </div>

      </div>
      <div class="col-xs-6 col-sm-3">

          <div class="sortBox">
            <div class="sortBox01  color02">
              <i class="iconfont">&#xe607;</i>
              <p>
                <span class="sortSpan01">总商家数</span>
                <span class="sortSpan02">8012<span class="sortSpan03">个</span></span>
              </p>
            </div>
            <div class="sortBox02">
              <i class="iconfont">&#xe607;</i>
              <span>总商家数</span>
            </div>
          </div>

      </div>

      <!-- Add the extra clearfix for only the required viewport -->
      <div class="clearfix visible-xs-block"></div>



      <div class="col-xs-6 col-sm-3">

          <div class="sortBox">
            <div class="sortBox01  color03">
              <i class="iconfont">&#xe6eb;</i>
              <p>
                <span class="sortSpan01">总商品量</span>
                <span class="sortSpan02">501006<span class="sortSpan03">个</span></span>
              </p>
            </div>
            <div class="sortBox02">
              <i class="iconfont">&#xe6eb;</i>
              <span>总商品量</span>
            </div>
          </div>

      </div>
      <div class="col-xs-6 col-sm-3">

          <div class="sortBox">
            <div class="sortBox01  color04">
              <i class="iconfont">&#xe63a;</i>
              <p>
                <span class="sortSpan01">合作伙伴</span>
                <span class="sortSpan02">8<span class="sortSpan03">个</span></span>
              </p>
            </div>
            <div class="sortBox02 sortBox02Parent">
              <i class="iconfont">&#xe63a;</i>
              <span>合作伙伴</span>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
        name: "CardComponents",
      mounted(){
        //---------sort翻转------------
        $('.sortBox').each(function(){
          $(this).hover(
            function(){
              $(this).css({transform:'rotateY(-180deg)',transition: 'all 0.8s'})
            },
            function(){
              $(this).css({transform:'rotateY(0deg)',transition: 'all 0.4s'})
            }
          );
        })
      }
    }
</script>

<style scoped>
  @media (min-width: 768px) and (max-width: 1000px) {
    .sortSpan03{display: none;}
  }
  @media(max-width: 420px){
    .sortSpan03{display: none;}
  }

    .col-xs-6{
    background: #e7e1cd;
  }
  .sortBox{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    transform-style: preserve-3d;
    margin: 12px 1%;
  }
  .sortBox01{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 20px 10px 20px;
    border-radius: 7px;
  }
  .iconfont{
    font-size:50px;
    color: white;
  }
  .sortBox01 p{
    display: flex;
    white-space: pre-wrap;
    flex-direction: column;
    margin-left: 12px;
  }
  .sortSpan01{
    display: block;
    font-size: 15px;
    color: rgba(255,255,255,.6);
  }
  .sortSpan02{
    display: block;
    font-size: 25px;
    color: white;
  }
  /*.sortSpan02Big{*/
    /*font-size: 40px;*/
  /*}*/
  .sortSpan03{
    padding: 1px 6px;
    font-size: 10px;
    color: #848484;
    background: rgba(255,255,255,.8);
    border-radius: 5px;
    margin-left: 6px;
  }

  .sortBox02{
    width: 100%;
    height: 100%;
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
    border-radius: 7px;
  }
  .sortBox02Parent{
    display: flex;
    flex-wrap: wrap;
  }
  .sortBox02 i{
    font-size: 35px;
    color:#22a7f0 ;
  }
  .sortBox02 i:hover{
    color: #fa2a00;
    font-weight: 600;
  }
  .sortBox02 span{
    font-size: 26px;
    color:#22a7f0 ;
  }
  .color01{
    background: #d9544f;
  }
  .color02{
    background: #41a5ca;
  }
  .color03{
    background: #16a085;
  }
  .color04{
    background: #4b5f7a;
  }
</style>
