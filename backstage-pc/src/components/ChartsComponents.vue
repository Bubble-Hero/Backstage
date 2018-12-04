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
 // import data1 from "../assets/js/Data"
  import "../assets/font/iconfont.css"
  import $  from "jquery"
  var echarts = require('echarts')
  var leftBoxData = [
    '白天','晚上']
  var leftBoxtDateData = [
    '12月1日', '12月2日', '12月3日', '12月4日',
    '12月5日', '12月6日', '12月7日']
  var righBoxtData =[
    {value:20, name:'惠生活'},
    {value:35, name:'爱玩乐'},
    {value:30, name:'住酒店'},
    {value:40, name:'享美食'}
  ]

  export default {
    name: "ChartsComponents",
   // props:["charDatas"],
    data(){
      return{
        charDatas:{},
        Message:{
            day1:[[],[]],//12月1日 早上和下午 注册的用户信息
            day2:[[],[]],//12月2日 早上和下午 注册的用户信息
            day3:[[],[]],//12月3日 早上和下午 注册的用户信息
            day4:[[],[]],//12月4日 早上和下午 注册的用户信息
            day5:[[],[]],//12月5日 早上和下午 注册的用户信息
            day6:[[],[]],//12月6日 早上和下午 注册的用户信息
            day7:[[],[]],//12月7日 早上和下午 注册的用户信息
        },
          day1:[],//直接打印this.day1取得不是数组
          day2:[],
          day3:[],
          day4:[],
          day5:[],
          day6:[],
          day7:[],
      }
    },
    methods:{
            getAllDatas(str){

              //循环str
              for(let i in str) {
                let obj = str[i]
                let timer = obj.time
                let month = timer.slice(5, 7)
                let day = timer.slice(8, 9)
                let or = timer.slice(10, 12)
                let hour = timer.slice(-7, -6)
                //如果是上午 一定会push到数组的第一个子数组里，然后注册时间的day取决于push到哪个
                let index="day"+day//day1 day2 day3 ...
                if (or == "上午") {
                 // 此处console会报错
                 // console.log("上午:"+index)
                  (this.Message[index][0]).push(str[i])//变量放在[]里 所以全局变量得用对象来接他

                } else {          //是下午 push到第二个子数组里
                 (this.Message[index][1]).push(str[i])
                 // console.log("下午:"+index)
                }
              }
              console.log(this.Message)
              //循环push完后 把注册人数分离出来
              for(let i in this.Message){
                this[i].push(Number(this.Message[i][0].length))
                this[i].push(Number(this.Message[i][1].length))
              }
              //再次初始化表格
                this.loginCharts(),
                this.rCharts()
            },
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
              'y': 40,
              'y2': 80
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
              'max': 1000
            }, {
              'type': 'value',
            }],
            series: [{
              'name': '注册指数',
              'yAxisIndex': 1,
              'type': 'bar',
              'data':this.day1,
              itemStyle: {
                normal: {
                  color: function(params) {
                //    console.log(params.value);
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
                  textStyle:{
                    fontSize:30,
                    color:"#fff"
                  },
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
              'data':this.day2,
            }]
          },
            {
              title: {
                'text': '9月3日'
              },
              series: [{
                'data': this.day3
              }]
            },
            {
              title: {
                'text': '9月4日'
              },
              series: [{
               'data':this.day4
              }]
            },
            {
              title: {
                'text': '9月5日'
              },
              series: [{
                'data':this. day5
              }]
            },
            {
              title: {
                'text': '9月6日'
              },
              series: [{
                'data': this.day6
              }]
            },
            {
              title: {
                'text': '9月7日'
              },
              series: [{
                'data':this.day7
              }]
            }
          ]
        }
              myChart.setOption(option,true);
              window.addEventListener('resize', function () {
                myChart.resize()
              })
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
              myChart.setOption(option,true);
              window.addEventListener('resize', ()=> {
                myChart.resize()
              })
            },
      resizeEcharts(){

      }
    },
    mounted(){
          this.$nextTick(()=>{
            // //左右图标
            //   this.loginCharts(),
            //     this.rCharts()

          })

      // remove事件
      $(".fresh1").click(function () {
          $(".l").css({"display":"block"})
        //消失毛玻璃
        setTimeout(()=>{
          $(".l").css({display:"none"})
        },2000)
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
          setTimeout(()=>{
            $(".r").css({display:"none"})
          },2000)
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
