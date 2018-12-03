<template>
  <div style="width: 100%">
    <div class="title">
      <h2><div style="display:flex;flex-direction: column;margin-right: 3rem;margin-top: 1rem;">BubbleHero<span>美团后台管理</span></div><span class="al-center">Content Manage Of MeiTuan</span></h2>
      <div class="tip" ><i class="iconfont s">&#xe673;</i><span class="s" style="color:#fff">{{userDatas.username}}</span>注册了您的美团</div>
    </div>
    <!--...bootstrap....-->
    <div class="row" style="margin: 0;">
      <div class="col-xs-6 col-sm-3">
          <div class="sortBox">
            <div class="sortBox01  color01">
             <i class="iconfont">&#xe519;</i>
              <p>
                <span class="sortSpan01">总用户量</span>
                <span class="sortSpan02 sortSpan02Big" style="font-size: 5rem;"><span style="width: 10rem;display: inline-block;text-align: center">{{registCount}}</span><span class="sortSpan03 disnone" style="font-size: 1.6rem">人</span></span>
              </p>
            </div>
            <div class="sortBox02">
              <i class="iconfont">&#xe519;</i>
              <span>总用户量</span>
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
                <span class="sortSpan02">50106<span class="sortSpan03">个</span></span>
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
            <div class="sortBox02">
              <div class="sortBox02Parent">
                <img src="../../static/img/cards01.jpg">
                <img src="../../static/img/cards02.jpg">
                <img src="../../static/img/cards03.jpg">
                <img src="../../static/img/cards04.jpg">
              </div>
              <span style="font-size: 15px">特别合作伙伴</span>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Datas from "../apis/getData"
  import $ from "jquery"
  export default {
        name: "CardComponents",
    data(){
      return{
        registCount:"",
        userDatas:{}
      }
    },
    // computed:{
    //     userArr:function(){
    //       return this.username.split(';')
    //     }
    // },
    methods:{
          getdata(){
           setInterval(()=>{
             //获取用户数量
              this.$http.post("http://bgs09143010.gotoip1.com/Backstage-php/save.php", {//这里是将表单的数据提交到该地址
              }, {
                emulateJSON: true
              }).then((res) => {
                //如果数字改变，则获取注册用户信息

                //减少操作
                if(Number(this.registCount)<Number(res.data)){
                  this.registCount=res.data
                }
              })
           },10)
            //这样获取速度最快，和数字显示无延迟
            setInterval(()=>{
                this.$http.post("http://bgs09143010.gotoip1.com/Backstage-php/getUsername.php", {//这里是将表单的数据提交到该地址
                }, {
                  emulateJSON: true
                }).then((res) => {
                  //如果传进来的用户名不等于此时的用户名，就让发生显示 改变数据
                  if(!(this.userDatas.username==res.data.username)){
                    this.userDatas= res.data
                    $(".tip").stop().fadeIn(300)
                    setTimeout(() => {
                      $(".tip").stop().fadeOut(800)
                    }, 1000)
                    //console.log(typeof res.data)//object
                  }
                })
            },10)
          //   Datas._getUserData(datas=>{
          //     this.user=datas
          //     console.log(datas)
          //   })
          }
    },
    // watch:{
    //     registCount(val, oldVal) {
    //       //有用户注册立即获取用户所有信息
    //     }
    // },
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
        }),
            this.getdata()
    },



    }
</script>

<style scoped>
  @media (min-width: 768px) and (max-width: 1000px) {
    .sortSpan03{display: none;}
  }
  @media(max-width: 420px){
    .sortSpan03{display: none;}
  }
  .tip{
    display: none;
    background-color: rgba(0,0,0,.1);
    padding: 0.6rem 1.6rem;
    position: absolute;
    z-index: 22;
    left: 0;
    border-radius: 1rem;
    font-size: 1.2rem;
    top: -2.8rem;
  }
  .tip .s{
    font-size: 1.4rem;margin-right:.4rem;white-space: nowrap;
  }
  .h1, h1 {
    font-size: 2.3rem!important;
  }
  .title{
    margin: 4rem 0 1.5rem 2rem;
    position: relative;
  }
  .title h2{
    font-size: 3.5rem;
    color: rgba(255,255,255,.8);
    display: flex;

  }
  .title span{
    font-size: 2rem;
    color: rgba(255,255,255,.6);
  }
  .title .al-center{
    display: flex;
    align-items: center;
  }
  .col-xs-6{
    position: relative;
  }
  .sortBox{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    transform-style: preserve-3d;
    margin: 12px 1%;
    box-shadow: 5px 6px 4px rgba(3,3,10,0.1);
    border-radius: 1rem;
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
    font-size:2rem;
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
    font-size: 1.3rem;
    color: rgba(255,255,255,.6);
    white-space: nowrap;
  }
  .sortSpan02{
    display: block;
    font-size: 1.9rem;
    color: white;
  }

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
  .sortBox02Parent img{
    margin: 2px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .sortBox02 i{
    color:#22a7f0 ;
  }
  .sortBox02 i:hover{
    color: #fa2a00;
    font-weight: 600;
  }
  .sortBox02 span{
    color:#22a7f0 ;
    font-size: 1.1rem!important;
  }
  .color01{
    background: #d9544f;
    position: relative;
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
