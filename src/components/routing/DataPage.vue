<template>
    <h2>Data Component</h2>
    Name is {{ username }} and age is {{ age }}
</template>
<script>
import {useRoute} from 'vue-router';
export default{
    name:'DataPage',
    data(){
        return {
            username:'',
            age:''
        }
    },
    mounted()
    {
        const route = useRoute();
        // console.log(route.params)
        console.log(route.params.name)
        this.username = route.params.name;
        this.age = route.params.age;
    }
}
</script>