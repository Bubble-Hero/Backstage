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
          <!--<card-components></card-components>-->
          <charts-components></charts-components>
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
  // import CardComponents from "../components/CardComponents";
  import ChartsComponents from "../components/ChartsComponents";
    export default {
      name: "index",
      components: {ChartsComponents, LeftComponents, TopComponents}
    }
</script>

<style scoped>

  .BBigBox{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .BigBox{
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/bg1.jpg);
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
</style>
