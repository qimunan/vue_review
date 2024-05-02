<template>
    <div>
        <el-button @click="x()">按钮</el-button>
    </div>
    <exDemo />
</template>

<script lang="ts">

export default {
    name: 'newTest',
    data () {
        return {
            a:12,
            //可访问到setup中的b，因为setup在data前实现
            c:this.b
        }
    },
    methods: {
       x(){
        console.log(this.a,this.c);
       },
    },
    setup () {
        const b = 20
        return {b}
    }
}
</script>

<style scoped>

</style>