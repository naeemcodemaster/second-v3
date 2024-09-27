<template>
    <div>
        <h2>Pass data to Child Component</h2>
        <p>Name is {{ name }} </p>
        <p>{{ users.name }} - {{ users.email }}</p>
        <!-- <button v-on:click="getData">Click Here</button> -->
        <button v-on:click="getData(count)">Click Here</button>
    </div>
</template>
<script>
export default {
    name:'ChildData',
    props:{
        name:String,
        // users:{}
        users:Object,
        getData:Function
    },
    data(){
        return {
           count:10
        }
    }
    
}

</script>