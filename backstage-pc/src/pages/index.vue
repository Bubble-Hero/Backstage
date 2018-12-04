<template>
  <div class="BBigBox">
    <div class="BigBox">
      <!--顶部组件-->
      <top-components></top-components>

      <section>
        <!--左面菜单栏-->
        <left-components></left-components>

        <!--大内容盒子-->
        <div class="contentBox">
          <card-components :CardDatas="CardDatas" ref="myCard"></card-components>
          <charts-components :chartDatas="chartDatas" ref="mycharts"></charts-components>
        </div>

      </section>
    </div>
    <div class="rightBigBox">
        <ul class="nav nav-tabs nav-justified nav-pills">
          <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-user"></span></a></li>
          <li role="presentation"><a href="#"><span class="glyphicon glyphicon-time"></span></a></li>
          <li role="presentation"><a href="#"><span class="glyphicon glyphicon-heart"></span></a></li>
          <li role="presentation"><a href="#"><span class="glyphicon glyphicon-cog"></span></a></li>
        </ul>
        <div class="media mediaBox">
        <div class="media-left media-middle">
          <a href="#">
            <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Middle aligned</h4>
          <h6>Middle aligned middle aligned</h6>
        </div>
      </div>
        <div class="media mediaBox">
          <div class="media-left media-middle">
            <a href="#">
              <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Middle aligned</h4>
            <h6>Middle aligned middle aligned</h6>
          </div>
        </div>
        <div class="media mediaBox">
        <div class="media-left media-middle">
          <a href="#">
            <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Middle aligned</h4>
          <h6>Middle aligned middle aligned</h6>
        </div>
      </div>
        <div class="media mediaBox">
        <div class="media-left media-middle">
          <a href="#">
            <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Middle aligned</h4>
          <h6>Middle aligned middle aligned</h6>
        </div>
      </div>
        <hr/>
        <div class="media mediaBox">
          <div class="media-left media-middle">
            <a href="#">
              <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Middle aligned</h4>
            <h6>Middle aligned middle aligned</h6>
          </div>
        </div>
        <div class="media mediaBox">
          <div class="media-left media-middle">
            <a href="#">
              <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Middle aligned</h4>
            <h6>Middle aligned middle aligned</h6>
          </div>
        </div>
        <div class="media mediaBox">
          <div class="media-left media-middle">
            <a href="#">
              <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Middle aligned</h4>
            <h6>Middle aligned middle aligned</h6>
          </div>
        </div>
        <div class="media mediaBox">
        <div class="media-left media-middle">
          <a href="#">
            <img class="media-object" src="../assets/img/top-head-2.jpg" alt="">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Middle aligned</h4>
          <h6>Middle aligned middle aligned</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopComponents from "../components/TopComponents";
  import LeftComponents from "../components/LeftComponents";
  import CardComponents from "../components/CardComponents";
  import ChartsComponents from "../components/ChartsComponents";
    export default {
      name: "index",
      data(){
        return{
          userDatas:[],
          CardDatas:{},
          chartDatas:null
        }
      },
      computed:{
        // CardDatas(){
        //   return this.userDatas[this.length-1]
        // }
      },
      components: {CardComponents, ChartsComponents, LeftComponents, TopComponents},
      methods:{
        getdata(){
        //  setInterval(()=>{
            //获取用户数量
            this.$http.post("http://bgs09143010.gotoip1.com/Backstage-php/getUserMessage.php", {//这里是将表单的数据提交到该地址
            }, {
              emulateJSON: true
            }).then((res) => {
              //如果数组长度改变，则获取注册用户信息
              //减少操作
              if(!((this.userDatas).length==(res.data).length)){
                //赋给数据
                this.userDatas=res.data
                //给子组件做好数据准备 调子组件传数据
                  //carcomponent
                this.CardDatas=(res.data)[(res.data).length-1]
                  //charts
                this.chartDatas=this.CardDatas.time
                $(".tip").stop().fadeIn(300)
                setTimeout(() => {
                  $(".tip").stop().fadeOut(800)
                }, 1000)
                this.$refs.mycharts.getAllDatas(res.data)
              }
            })
          //},100)
        }
      },
      mounted(){
        this.getdata()
      }
    }
</script>

<style scoped>
  @media screen and (max-width: 960px){
    section .contentBox{
      width:calc(100% - 45px);
    }
  }

  body{
  background-image: url(../assets/img/bg1.jpg);
}
  .BBigBox{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .BigBox{
    width: 100%;
    height: 100%;

  }
  section{
    display: flex;
    width: 100%;
    height: 100%;
    padding-right: 4.5rem;
  }
  .contentBox{
    width: calc(100% - 250px);
  }
  .rightBigBox{
    width: 20%;
    height: 100%;
    background: #263543;
    display: none;
    padding: 18px;
  }
  .mediaBox{
    color: white;
  }
  .mediaBox img{
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
