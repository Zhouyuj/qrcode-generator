<template>
    <div id="app">
        <Main />
    </div>
</template>
<script>
import Main from './components/page/main/Index.vue';
export default {
    components: {
        Main
    }
}

</script>
<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
</style>

<style scoped>
#app {
    overflow-y: scroll;
}
</style>