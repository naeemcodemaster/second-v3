<template>
    <div>
        <h2>Two way binding</h2>
        <input type="text" v-model="username"/>
        <p>Name is {{ username }}</p>
    </div>
</template>
<script>
export default {
    name:'ThirdClass',
    data(){
        return {
            username:'khan'
        }
    }
    
}

</script>