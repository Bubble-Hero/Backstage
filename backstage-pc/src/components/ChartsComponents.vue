<!--suppress ALL -->
<template>
  <div class="row">
    <div class="charts">
      <!--------左边的盒子----------->
      <div class="leftBox col-md-8">
        <div class="leftBox-header">
          <h1><strong>Statistic</strong> Chart</h1>
          <div>
            <a href="#" class="fresh"><i class="iconfont">&#xe613;</i></a>

            <a href="#" class="remove1"><i class="iconfont">&#xe623;</i></a>
          </div>
        </div>
        <!--创建一个echarts的容器-->
        <div id="echartLContainer" class="transparent;" style="width:100%; height:304px;"></div>
      </div>
      <!-------------右边的盒子------------->
      <div class="rightBox col-md-4">
        <div class="rightBox-header">
          <h1><strong>Browser </strong>Usage</h1>
          <div>
            <a href="#" class="fresh"><i class="iconfont">&#xe613;</i></a>
            <a href="#" class="remove2"><i class="iconfont">&#xe623;</i></a>
          </div>
        </div>
        <!--创建一个echarts的容器-->
        <div id="echartRContainer" class="transparent;" style="width:100%; height:304px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import "../assets/font/iconfont.css"
  var echarts = require('echarts')

  var leftBoxData = [
    '市场监管局', ' 卫计委', '环保局', '民宗委', '人保局', '文广局', '规土局', '发改局'
  ]
  var leftBoxtDateData = [
    '9月1日', '9月2日', '9月3日', '9月4日',
    '9月5日', '9月6日', '9月7日']
  var righBoxtData =[
    {value:20, name:'外埠纳税人'},
    {value:35, name:'临时税务\n登记纳税人'},
    {value:30, name:'单位纳税人'},
    {value:40, name:'个体经营纳税人'}
  ]
  export default {
        name: "ChartsComponents",
        data() {
          return{
          }

    },
    methods:{
            myChartContainer()
            {
              myChart.style.width = window.innerWidth+'px';
              myChart.style.height = window.innerHeight+'px';
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
              'data': [5, 6, 8, 28, 8, 24, 11, 16],
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
          }, {
            title: {
              'text': '9月2日'
            },
            series: [{
              'data': [45, 43, 64, 134, 188, 43, 109, 12]
            }]
          },
            {
              title: {
                'text': '9月3日'
              },
              series: [{
                'data': [110, 32, 111, 176, 73, 59, 181, 9]
              }]
            },
            {
              title: {
                'text': '9月4日'
              },
              series: [{
                'data': [94, 37, 64, 55, 56, 41, 70, 17]
              }]
            },
            {
              title: {
                'text': '9月5日'
              },
              series: [{
                'data': [5, 6, 5, 28, 8, 24, 11, 16]
              }]
            },
            {
              title: {
                'text': '9月6日'
              },
              series: [{
                'data': [45, 34, 64, 134, 188, 43, 109, 12]
              }]
            },
            {
              title: {
                'text': '9月7日'
              },
              series: [{
                'data': [5, 6, 34, 28, 8, 24, 11, 16]
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
                  text: '纳税人分布情况',
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
            }
          },
    mounted(){
          //左右图标
          this.loginCharts(),
            this.rCharts()
        this.myChartContainer()
        // remove事件
      $(".remove1").click(function () {
        $(".leftBox").css({display:"none"})
      })
      $(".remove2").click(function () {
        $(".rightBox").css({display:"none"})
      })
      }
  }
</script>


<style scoped>
  .row{background:transparent;
  margin: auto 15px}
  .col-md-8{width: 66%}
  .col-md-4{width: 33%}
  a:hover{text-underline: none}
  .leftBox{
    float: left;
    height: 374px;
    border-radius: 5px;
    background:linear-gradient(to right,#a87e69,#6e4a5c) transparent;
    margin-right: 1%;
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
    background:linear-gradient(to bottom,#a87e69,#6e4a5c);}
  .rightBox-header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #a97c77;
  }
  .rightBox-header div{
    padding-top:10px;
    width: 15%;
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
