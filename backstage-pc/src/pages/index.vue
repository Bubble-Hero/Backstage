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
    <div class="rightBigBox nav"id="sideMenu"></div>
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
</style>
