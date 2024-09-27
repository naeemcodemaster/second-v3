<template>
    <div>
        <h1>Class Binding</h1>
        <p class="red">{{ username }}</p>
        <p :class="{red:true}">{{ username }}</p>
        <p :class="{red:false}">{{ username }}</p>
        
        <h3 :class="addStyle">Some text</h3>

    </div>
</template>
<script>
export default {
    name: 'EightClass',
    data() {
        return {
            username: 'Majid',
            colorfull:true
            
        }
    },
    computed:{
        addStyle(){
            return {
                red:this.colorfull,
                err:true
            }
        }
    }


}

</script>
<style scoped>
h1{
    color: red;
}
.red{
    background-color: red;
}
</style>