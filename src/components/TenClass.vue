<template>
    <div>
       <h2>Use of Ref {{ user }}</h2>
       <input type="text" ref="username"/>
       <button v-on:click="getData">Click here</button>
    </div>
</template>
<script>
export default {
    name: 'TenClass',
    data(){
        return{
            user:'jan',
        }
    },
    methods:{
        getData(){
            // this.$refs.username.focus();
            this.$refs.username.value = "khan";
            this.$refs.username.style.color = "red";
            this.user = this.$refs.username.value;
        }
    }
}

</script>