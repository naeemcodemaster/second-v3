<template>
    <div>
        <!-- <ChildData name="khan"/> -->
        <ChildData :name="username" :users="users" :getData="getData"/>
    </div>
</template>
<script>
import ChildData from './ChildData.vue';
export default {
    name: 'SixthClass',
    components: { ChildData },
    data() {
        return {
            username: 'Majid',
            users:{
                name:"Bilal",
                email:"Bilal@gmail.com"
            }
        }
    },
    methods:{
        getData(value){
            alert('Hi ' + value)
        }
    }

}

</script>