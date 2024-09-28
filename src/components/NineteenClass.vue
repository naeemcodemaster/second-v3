<template>
    <h2>Routing Component</h2>
    <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/data/khan/22">Data</router-link></li>
        <li><router-link to="/data/majid/23">Data</router-link></li>
        <li><router-link to="/data/bilal/24">Data</router-link></li>
    </ul>
    <router-view></router-view>
</template>
<script>
export default{
    name:'NineteenClass'
}
</script>