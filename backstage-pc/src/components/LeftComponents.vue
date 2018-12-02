<template>
  <div class="nav">
    <ul class="one" >
      <li class="first" data-toggle="collapse" data-target="#demo">
        <div href="">
          <span>NAVIGATION</span>
          <i class="glyphicon glyphicon-menu-down"></i>
        </div>
      </li>
    </ul>

    <ul id="accordion" class="collapse in two">
      <li v-for="(is,ts) in list">
        <a class="sec" data-toggle="collapse" data-parent="#accordion"
           href="#collapseTwo">
          <i :class="is.i1"></i>
          <p class="dis">
            <span>{{is.span}}</span>
            <i :class="is.i2"></i>
          </p>
        </a>
        <ul id="collapseTwo" class="panel-collapse collapse coo">
          <li v-for="(iss,tss) in is.ulli">
            <a href="">
              <i :class="iss.i3"></i>
              <span>{{iss.spp}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="one">
      <li class="first">
        <div data-toggle="collapse" data-target="#demo1">
          <span>ORDERS SUMMARY</span>
          <i class="glyphicon glyphicon-menu-down"></i>
        </div>
        <div id="demo1" class="collapse">
          <div class="chart1">
              <p>THIS WEEK SALES</p>
              <p>THIS WEEK BALANCE</p>
          </div>
        </div>
      </li>

      <li class="first">
        <div data-toggle="collapse" data-target="#demo2">
          <span>GENERAL SETTINGS</span>
          <i class="glyphicon glyphicon-menu-down"></i>
        </div>
        <div id="demo2" class="collapse">
          <p>switch ON</p>
          <p>switch OFF</p>
        </div>
      </li>
    </ul>

  </div>


</template>

<script>
    import $ from "jquery";
    export default {
        name: "LeftComponents",
        data(){
          return{
            list:[
              {
                "i1":"glyphicon glyphicon-fire",
                "span":"Dashboard"
              },
              {
                "i1":"glyphicon glyphicon-align-justify",
                "span":"Forms",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"common element"},
                  {"i3":"glyphicon glyphicon-play","spp":"validation"},
                  {"i3":"glyphicon glyphicon-play","spp":"Form Wizard"}
                  ]
              },
              {
                "i1":"glyphicon glyphicon-pencil",
                "span":"Interface",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"UI Element"},
                  {"i3":"glyphicon glyphicon-play","spp":"typography"},
                  {"i3":"glyphicon glyphicon-play","spp":"Tiles"}
                ]
              },
              {"i1":"glyphicon glyphicon-tint",
                "span":"Buttons & Icons"
              },
              {"i1":"glyphicon glyphicon-th",
                "span":"Grid Layout"
              },
              {"i1":"glyphicon glyphicon-th-large",
                "span":"Tables",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"Bootstrap Tables"},
                  {"i3":"glyphicon glyphicon-play","spp":"DataTables"}
                ]
              },
              {"i1":"glyphicon glyphicon-sd-video",
                "span":"Example Pages mails",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"Login Pages"},
                  {"i3":"glyphicon glyphicon-play","spp":"Calendar"},
                  {"i3":"glyphicon glyphicon-play","spp":"Page 404"},
                  {"i3":"glyphicon glyphicon-play","spp":"Page 500"},
                  {"i3":"glyphicon glyphicon-play","spp":"Page Offline"},
                  {"i3":"glyphicon glyphicon-play","spp":"Gallery"},
                  {"i3":"glyphicon glyphicon-play","spp":"Timeline"},
                  {"i3":"glyphicon glyphicon-play","spp":"Vertical Mail"},
                  {"i3":"glyphicon glyphicon-play","spp":"Horizpntal Mail"},
                  {"i3":"glyphicon glyphicon-play","spp":"Vector Maps"},
                  {"i3":"glyphicon glyphicon-play","spp":"Google Maps"}
                ]
              },
              {"i1":"glyphicon glyphicon-expand",
                "span":"Widgets"
              },
              {"i1":"glyphicon glyphicon-stats",
                "span":"Charts & Graphs"
              }
            ]
          }
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  .nav{
    background: #ccc;
    color: #fff;
    width: 250px;
    height: 100%;
  }
  .nav .one li{
    list-style: none;
    padding-left: 15px;
    cursor: pointer;
  }
  .nav ul li a{
    text-decoration: none;
  }
  .nav .one .first{
    width: 100%;
    line-height: 45px;
  }
  .nav .one .first i{
    float: right;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .nav .one .first div{
    color: #aa7864;
  }
  .chart1 p{
    font-size: 12px;
    color: #fff;
    width: 100%;
  }
  .nav .two li:hover{
    cursor: pointer;
  }
  .nav .two li .sec{
    display: flex;
    height: 45px;
    color: #fff;
  }
  .nav .two li .sec i{
    line-height: 45px;
  }
  .nav .two li .sec i:nth-of-type(1){
    width: 45px;
    height: 45px;
    text-align: center;
  }
  .nav .two li .sec .dis{
    line-height: 45px;
    flex: 1;
  }
  .nav .two li .sec .dis i{
    float: right;
  }
  .nav .two li .coo{
    background: #ccc;
    padding-left: 20px;
    width: 100%;
  }
  .nav .two li .coo li{
    line-height: 30px;
  }
  .nav .two li .coo li a{
    font-size: 12px;
    color: #fff;
  }
  #demo2 p{
    color: #fff;
  }
</style>
