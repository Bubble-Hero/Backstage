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
          <div class="title">
            <h2>Form Elements // <span>Place subtitle here... </span></h2>

          </div>
          <div class="row">

            <div class="RecentBox col-md-6">
                <span class="cover l">
                    <div class="loading"></div>
               </span>
              <div class="RecentBox-header">
                <h3><strong>Text  </strong> Inputs</h3>
                <div>
                  <a href="#" class="fresh1"><i class="glyphicon glyphicon-refresh"></i></a>
                  <a href="#" class="remove1"><i class="glyphicon glyphicon-remove"></i></a>


                </div>
              </div>
              <div class="RecentBox-content">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Normal input field</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Password input field</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                    </div>
                  </div>
                  <label class="sr-only" for="inputHelpBlock">Input with help text</label>
                  <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
                  <span id="helpBlock" class="help-block">
                    A block of help text that breaks onto a new line and may extend beyond one line.</span>
                  <textarea class="form-control" rows="3"></textarea>
                </form>

              </div>
              <div class="RecentBox-footer">
                <input class="btn btn-default" type="submit" value="Submit">
                <input class="btn btn-default" type="submit" value="Reset">
              </div>
            </div>
            <div class="QuickBox col-md-6">
         <span class="cover l">
            <div class="loading"></div>
          </span>
              <div class="QuickBox-header">
                <h3><strong>Other</strong> Inputs </h3>
                <div>
                  <a href="#" class="fresh1"><i class="glyphicon glyphicon-refresh"></i></a>
                  <a href="#" class="remove1"><i class="glyphicon glyphicon-remove"></i></a>


                </div>
              </div>
              <div class="QuickBox-content">
                <div>
                  <h5 style="float: left;">Normal select box</h5>
                  <select class="form-control" style="float: right;">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <h5 style="float: left;">Normal select box</h5>
                  <select multiple class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <form>
                  <fieldset disabled>
                    <div class="form-group">
                      <label for="disabledTextInput">Disabled input</label>
                      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                    </div>
                    <div class="form-group">
                      <label for="disabledSelect">Disabled select menu</label>
                      <select id="disabledSelect" class="form-control">
                        <option>Disabled select</option>
                      </select>
                    </div>
                  </fieldset>
                </form>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Option one is this and that&mdash;be sure to include why it's great
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Option one is this and that&mdash;be sure to include why it's great
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Option one is this and that&mdash;be sure to include why it's great
                  </label>
                </div>


                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                    Option one is this and that&mdash;be sure to include why it's great
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                    Option two can be something else and selecting it will deselect option one
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option2">
                    Option two can be something else and selecting it will deselect option one
                  </label>
                </div>




              </div>
              <div class="QuickBox-footer">
                  <input class="btn btn-default" type="submit" value="Submit">
                  <input class="btn btn-default" type="submit" value="Reset">
              </div>
            </div>
          </div>
          <!--<div class="row">-->
            <!--<div class="InputBox">-->
                <!--<span class="cover l">-->
                    <!--<div class="loading"></div>-->
               <!--</span>-->
              <!--<div class="InputBox-header">-->
                <!--<h3><strong>Input </strong> Groups</h3>-->
                <!--<div>-->
                  <!--<a href="#" class="fresh1"><i class="glyphicon glyphicon-refresh"></i></a>-->
                  <!--<a href="#" class="remove1"><i class="glyphicon glyphicon-remove"></i></a>-->


                <!--</div>-->
              <!--</div>-->
              <!--<div class="InputBox-content">-->
                <!--<div class="form-group has-success has-feedback">-->
                  <!--<label class="control-label sr-only" for="inputGroupSuccess4">Input group with success</label>-->
                  <!--<div class="input-group">-->
                    <!--<span class="input-group-addon">@</span>-->
                    <!--<input type="text" class="form-control" id="inputGroupSuccess4" aria-describedby="inputGroupSuccess4Status">-->
                  <!--</div>-->
                  <!--<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>-->
                  <!--<span id="inputGroupSuccess4Status" class="sr-only">(success)</span>-->
                <!--</div>-->
                <!--<form class="form-inline">-->
                  <!--<div class="form-group">-->
                    <!--<div class="input-group">-->
                      <!--<input type="text" class="form-control" id="exampleInputAmount1" placeholder="Amount">-->
                      <!--<div class="input-group-addon">.00</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</form>-->
                <!--<form class="form-inline">-->
                  <!--<div class="form-group">-->
                    <!--<label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>-->
                    <!--<div class="input-group">-->
                      <!--<div class="input-group-addon">$</div>-->
                      <!--<input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">-->
                      <!--<div class="input-group-addon">.00</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</form>-->
                <!--<h3>Sizing</h3>-->
                <!--<input class="form-control input-lg" type="text" placeholder=".input-lg">-->
                <!--<input class="form-control" type="text" placeholder="Default input">-->
                <!--<input class="form-control input-sm" type="text" placeholder=".input-sm">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
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
    export default {
        name: "form",
      components: {LeftComponents, TopComponents}

    }
</script>

<style scoped>
  body{
    background-image: url(../assets/img/bg1.jpg);
  }
  .form-control {
    background-color: transparent;
  }
  button, html input[type=button], input[type=reset], input[type=submit] {
    background-color: transparent;
  }
  button, html input[type=button], input[type=reset], input[type=submit]:hover{
    background-color: rgba(0,0,0,.1);
    color: #fff;
  }
  .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
    background-color: transparent;
    opacity: 1;
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
  .title{
    margin: 40px 0px 15px 20px;
  }
  .title h2{
    font-size: 35px;
    color: rgba(255,255,255,.8);

  }
  .title span{
    font-size: 20px;
    margin-left: 10px;
    color: rgba(255,255,255,.6);

  }
  .row{
    background:transparent;
    margin: auto 15px;
    margin-bottom: 20px;}
  .col-md-6{width: 48%}
  .RecentBox{
    float: left;
    border-radius: 5px;
    background:linear-gradient(to right,rgba(176,135,114,.2),rgba(158,124,121,.2));
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
  .RecentBox-header{
    color:#fafafa;
    position: relative;
    width: 100%;
    height: 28px;
    line-height: 28px;font-size: 24px;
  }
  .RecentBox-header div{
    position: absolute;
    top: -5px;
    right:0px ;
    width: 8%;
    display: flex;
    justify-content: space-around;}
  .RecentBox-header div i{
    color: #beacaa;
    font-size: 14px;
  }
  .RecentBox-header h1{

    padding-left: 15px;
    color: #ffffff;

  }

  .QuickBox{
    float: right;
    border-radius: 5px;
    background:linear-gradient(to right,rgba(168,126,105,.2),rgba(110,74,92,.2));
    position: relative;
  }
  .QuickBox-header{
    position: relative;
    width: 100%;
  }
  .QuickBox-header div{
    position: absolute;
    top: 0px;
    right:0px ;
    width: 8%;
    display: flex;
    justify-content: space-around;}
  .QuickBox-header div i{
    color: #beacaa;
    font-size: 14px;
  }
  .QuickBox-header h3{
    height: 28px;
    line-height: 28px;
    padding-left: 15px;
    color: #ffffff;

  }

  .InputBox{width: 98%;background: #fff;
    position: relative;
  padding:0 1%}
  .InputBox-header div{
    position: absolute;
    top: 0px;
    right:0px ;
    width: 8%;
    display: flex;
    justify-content: space-around;}
  .InputBox-header div i{
    color: #beacaa;
    font-size: 14px;
  }
  .form-inline{width: 100%;margin-bottom: 20px}
  .form-group{width: 100%}
  .input-group{width: 100%}
  group .input-group-addon{width: 40px;
    height: 30px;}
  /*.form-control{height: }*/
  .form-control{margin-bottom: 20px}
  .input-sm{margin-bottom: 20px;height: 35px}
</style>
