<template>
  <div class="container topContainer">
      <div class="topLeftBox">
        <div class="topLeftBoxL">
          <span class="glyphicon glyphicon-move"></span>
          <p>MIN<i>IMAL</i></p>
        </div>
          <span class="glyphicon glyphicon-align-justify"></span>
      </div>
      <div class="topRightBox">
          <div class="topRightBoxInner">
              <div class="topInnerL">
                <span class="glyphicon glyphicon-refresh"></span>
                <span class="glyphicon glyphicon-search"></span>
                <input type="text" placeholder="Search...">
              </div>
              <div class="topInnerR">
                <div class="topInnerRDiv">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"><span class="glyphicon glyphicon-tasks"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                      <li role="presentation" class="dropdown-header">下拉菜单标题 1</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
                      <li role="presentation" class="divider"></li>
                      <li role="presentation" class="dropdown-header">下拉菜单标题 2</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">关于我们</a></li>
                    </ul>
                  </div>
                  <p>2</p>
                </div>
                <div class="topInnerRDiv">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"><span class="glyphicon glyphicon-envelope"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                      <li role="presentation" class="dropdown-header">下拉菜单标题 1</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
                      <li role="presentation" class="divider"></li>
                      <li role="presentation" class="dropdown-header">下拉菜单标题 2</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">关于我们</a></li>
                    </ul>
                  </div>
                  <p>2</p>
                </div>
                <div class="topInnerRDiv">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"><span class="glyphicon glyphicon-bell"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                      <li role="presentation" class="dropdown-header">下拉菜单标题 1</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
                      <li role="presentation" class="divider"></li>
                      <li role="presentation" class="dropdown-header">下拉菜单标题 2</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">关于我们</a></li>
                    </ul>
                  </div>

                  <p>2</p>
                </div>
                <div class="topInnerRDiv">
                  <img src="../assets/img/top-head.jpg" alt="">
                  <div  class="name">John Douey</div>
                  <span class="glyphicon glyphicon-chevron-down"></span>
                </div>
                <div class="topInnerRDiv">
                  <span class="glyphicon glyphicon-comment"></span>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
  import $ from "jquery"
    export default {
      name: "TopComponents",
      mounted(){

      }
    }
</script>

<style scoped>
  /*公共样式*/
  div,p,ul,ol,li,dl,dt,dd,form,tr,td,hr,h1,h2,h3,h4,h5,h6,hr,input,table,fieldset,figure{
    margin:0;
    padding:0;
  }

  ul,ol{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  img{
    border:0;
    display: block;
  }

.topContainer{
  width: 100%;
  height:50px;
  background: #cccccc;
  /*opacity: .2;*/
  display: flex;
}
  .topLeftBox{
    width: 250px;
    height:50px;
    background: pink;
    /*opacity: .4;*/
    padding:0 17px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    justify-content: space-between;
  }
  .topLeftBox span{
    font-size: 18px;
    color: white;
  }
  .topLeftBoxL{
    display: flex;
    align-items: center;
  }
  .topLeftBoxL p{
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
    color: white;
  }
  .topLeftBoxL p i{
    font-weight: 100;
    font-style: normal;
  }
  .topRightBox{
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: blue;
   padding: 8px 0;
}
  .topRightBoxInner{
    width: 100%;
    background: skyblue;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .topRightBoxInner span{
    font-size: 16px;
    color: white;
  }
  .topInnerL span{
    padding: 0 15px;
  }
  .topInnerL input{
    background: transparent;
    border:0;
    border-bottom: 1px solid gray;
  }
  .topInnerL{
    display: flex;
    align-items: center;
  }
  .topInnerR{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .topInnerRDiv{
    height: 100%;
    padding: 0 18px;
    display:flex;
    align-items: center;
    /*justify-content: space-between;*/
    border-right: 1px solid gray;
  }
  .topInnerRDiv p{
    font-size: 9px;
    padding: 4px 6px;
    margin-left: 10px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background: #cccccc;
  }
  .topInnerRDiv img{
    width: 34px;
    height: 34px;
    margin-right: 10px;
  }
  .topInnerRDiv .name {
    margin-right: 10px;
  }
  .topRightBoxInner span:hover{
    color: pink;
  }
  button{
    background: transparent;
    border: 0;
  }
  button:hover{
    background: transparent;
    border: 0;
  }

</style>
