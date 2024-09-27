<template>
    <div>
        <h2>Click Events</h2>
        <button v-on:click="getData('Hi')">Click Me</button>
        <button v-on:dblclick="getData('Hi')">Click Me</button>
        <p>Count is {{ count }}</p>
        <button v-on:click="increaseCount()">Increase</button>
        <button v-on:click="decreaseCount()">Decrease</button>
    </div>
</template>
<script>
export default {
    name:'SecondClass',
    data(){
        return{
            count:0
        }
    },
    methods:{
        getData(value){
            alert(value+ " Clicked")
        },
        increaseCount(){
            this.count = this.count + 1;
        },
        decreaseCount(){
            if(this.count < 1){
                alert('Cannot Decrease')
            }else{
                this.count = this.count - 1;
            }
            
        }
    }
}

</script>