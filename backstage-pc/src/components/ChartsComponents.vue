<!--suppress ALL -->
<template>
  <div class="all">
    <div class="row">
      <div class="charts">
        <!--------左边的盒子----------->
        <div class="leftBox col-md-8">
          <span class="cover l">
            <div class="loading"></div>
          </span>
          <div class="leftBox-header">
            <h1><strong>Statistic</strong> Chart</h1>
            <div>
              <a href="#" class="fresh1"><i class="glyphicon glyphicon-refresh"></i></a>
              <a href="#" class="remove1"><i class="glyphicon glyphicon-remove"></i></a>


            </div>
          </div>
          <!--创建一个echarts的容器-->
          <div id="echartLContainer" class="transparent;" style="width:100%; height:304px;"></div>
        </div>
        <!-------------右边的盒子------------->
        <div class="rightBox col-md-4">
          <span class="cover r">
            <div class="loading"></div>
          </span>
          <div class="rightBox-header">
            <h1><strong>Browser </strong>Usage</h1>
            <div>
              <a href="#" class="fresh2"><i class="glyphicon glyphicon-refresh"></i></a>
              <a href="#" class="remove2"><i class="glyphicon glyphicon-remove"></i></a>


            </div>
          </div>
          <!--创建一个echarts的容器-->
          <div id="echartRContainer" class="transparent;" style="width:100%; height:304px;"></div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import "../assets/font/iconfont.css"
  import Datas from "../apis/getData"
  import $  from "jquery"
  var echarts = require('echarts')

  var leftBoxData = [
    '早上', '下午','晚上']
  var leftBoxtDateData = [
    '9月1日', '9月2日', '9月3日', '9月4日',
    '9月5日', '9月6日', '9月7日']
  var righBoxtData =[
    {value:20, name:'惠生活'},
    {value:35, name:'爱玩乐'},
    {value:30, name:'住酒店'},
    {value:40, name:'享美食'}
  ]
  export default {
        name: "ChartsComponents",
    data(){
      return{
        login:[]
      }
    },
    methods:{
            loginCharts(){
              // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echartLContainer'));
// 绘制图表
        var normalcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#ec2e85'
        }, {
          offset: 1,
          color: '#ffb069'
        }]);
        var maxcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#009efd'
        }, {
          offset: 1,
          color: '#2af598'
        }]);
        var his=this
        var option = {
          timeline: {
            data:leftBoxtDateData ,
            axisType: 'category',
            show: true,
            autoPlay: true,
            playInterval: 1000,
            checkpointStyle: {
              color: '#04a5f1',
              borderColor: 'rgba(4, 165, 261, .5)'
            },
            itemStyle: {
              normal: {
                color: '#04a5f1'
              },
              emphasis: {
                color: '#04a5f1'
              }
            },
            lineStyle: {
              color: '#ddd'
            },
          },
          options: [{
            title: {
              'text': '用户注册量',
            },
            tooltip: {
              'trigger': 'axis'
            },
            legend: {
              "show": true,
              x: 'left',
              'data': ['上客量'],
              'selected': {
                '上客量': true,
              }
            },
            calculable: true,
            grid: {
              'y': 80,
              'y2': 100
            },
            xAxis: [{
              'type': 'category',
              'axisLabel': {
                'interval': 0
              },
              'data': leftBoxData
            }],
            yAxis: [{
              'type': 'value',
              'name': '',
              'max': 200
            }, {
              'type': 'value',
            }],
            series: [{
              'name': '注册指数',
              'yAxisIndex': 1,
              'type': 'bar',
              'data': his.login.data1,
              itemStyle: {
                normal: {
                  color: function(params) {
                    console.log(params.value);
                    if (params.value < 60)
                      return normalcolor
                    else
                      return maxcolor
                  }
                },
                emphasis: {
                  color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                      offset: 0,
                      color: '#2af598'
                    }, {
                      offset: 1,
                      color: '#009efd'
                    }]
                  ),
                  barBorderRadius: 4
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                }
              },
            }]
          },
            {
            title: {
              'text': '9月2日'
            },
            series: [{
              'data':this.login.data2
            }]
          },
            {
              title: {
                'text': '9月3日'
              },
              series: [{
                'data': this.login.data3
              }]
            },
            {
              title: {
                'text': '9月4日'
              },
              series: [{
                'data': this.login.data4
              }]
            },
            {
              title: {
                'text': '9月5日'
              },
              series: [{
                'data': this.login.data5
              }]
            },
            {
              title: {
                'text': '9月6日'
              },
              series: [{
                'data': this.login.data6
              }]
            },
            {
              title: {
                'text': '9月7日'
              },
              series: [{
                'data':this.login.data7
              }]
            }
          ]
        }
        myChart.setOption(option);
      },
            rCharts(){
              var myChart = echarts.init(document.getElementById('echartRContainer'));
              var option = {
                backgroundColor:"",
                title : {
                  text: '',
                  x:'center',
                  textStyle: {
                    color: '#fff',
                    fontSize: 22,
                    fontWeight:500
                  },
                  bottom: '6%'
                },
                color: ['#fff95b','#ff826f','#fb6dd0','#c393f3'],
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                calculable : true,
                series : [
                  {
                    name:'',
                    type:'pie',
                    radius : [20, 80],
                    center:['center','45%'],
                    label:{
                      normal:{
                        formatter: '{b|{b}} \n {d|{d}%}',
                        rich:{
                          b:{
                            fontSize:16,
                            align: 'left',

                          },
                          d:{
                            fontSize:16,
                            align: 'left',
                            padding: 2
                          }
                        }
                      },


                    },
                    roseType : 'area',
                    data:righBoxtData
                  }
                ]
              };
              myChart.setOption(option);
            },
            getdata(){
              Datas._getLoginData(datas=>{
                this.login=datas
                console.log(datas)
              })
      },
    },
    created(){
      this.getdata()
    },
    mounted(){
          this.$nextTick(()=>{
            console.log(this.login)
            //左右图标
            this.loginCharts(),
              this.rCharts()
            this.getdata()
          })

      // remove事件
      $(".fresh1").click(function () {
        let count=0
        this.timer=setInterval(()=>{
          $(".cover").css({"display":"block"})
          // count++
          // if(count==1){
          //   $(".cover").css({"display":"block"})
          // }else if(count==2){
          //   $(".logintxt").html("登录中..")
          // }else if(count==3){
          //   $(".logintxt").html("登录中...")
          // }
        },200)
        //消失毛玻璃
        $(".l").hide(100)
        //改变btn内容
        $(".sub-btn").html("")
        //停止定时器
        clearInterval(this.timer)
      })

      //jquery

        $(".remove1").click(function () {
          $(".leftBox").css({display:"none"})
        })
        $(".remove2").click(function () {
          $(".rightBox").css({display:"none"})
        })
        // $(".fresh1").click(function () {
        //   $(".l").css({display:"block"})
        // })
        $(".fresh2").click(function () {
        $(".r").css({display:"block"})
      })
    }
  }
</script>


<style scoped>
  .row{background:transparent;
  margin: auto 15px}
  .col-md-8{width: 60%}
  .col-md-4{width: 38%}
  .col-md-6{width: 49%}

  .leftBox{
    float: left;
    height: 374px;
    border-radius: 5px;
    background:linear-gradient(to right,rgba(168,126,105,.2),rgba(110,74,92,.2));
    margin-right: 1%;
    position: relative;
  }
  .cover{
    width:100%;
    height:100% ;
  position: absolute;
    background: #000;
    top: 0;
    left: 0;
    z-index: 900;
    display: none;
    opacity: 0.5}
  .loading{
    width: 13px;
    height: 13px;
    margin:174px auto;
    background: url("../assets/img/loader.gif") no-repeat;
    background-size:13px 13px;
  }
  .leftBox-header{
    position: relative;
    width: 100%;
    border-bottom: 1px dashed #a97c77;
  }
  .leftBox-header div{
    position: absolute;
    top: 5px;
    right:5px ;
    width: 8%;
    display: flex;
    justify-content: space-around;}
  .leftBox-header div i{
    color: #beacaa;
    font-size: 14px;
  }

  .leftBox-header h1{
    height: 62px;
    line-height: 62px;
    padding-left: 15px;
    color: #ffffff;

  }
  #echartLContainer{
    width: 95%;
    margin: auto;
  }
  .rightBox{
    float: right;
    height: 374px;
    border-radius: 5px;
    background:linear-gradient(to right,rgba(168,126,105,.2),rgba(110,74,92,.2));
  }
  .rightBox-header{
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #a97c77;
  }
  .rightBox-header div{
    position: absolute;
    top: 20px;
    right:5px ;
    width: 12%;
    display: flex;
    justify-content: space-around;}
  .rightBox-header div i{
    color: #beacaa;
    font-size: 14px;
  }
  .rightBox-header h1{
    height: 62px;
    line-height: 62px;
    padding-left: 15px;
    color: #ffffff;

  }

  @media (max-width: 1300px){
    .col-md-8 {width: 100%;margin-bottom: 25px}
    .col-md-4 {width: 100%;}
  }
</style>
