<template>
    <div>
        <h2>Two way binding</h2>
        <p v-if="show">this is if condition</p>
        <p v-else>this is else condition</p>

        <button v-on:click="changeCondition()">Toggle Condition</button>

        <ul>
            <li v-for="t in tech" :key="t">
                {{ t }}
            </li>
        </ul>

        <br/>
        <ul>
            <li v-for="user in users" :key="user.id">
                Name is {{user.name}} - & Email is {{ user.email }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'FifthClass',
    data(){
        return {
            show:false,
            tech:["Python","JavaScript","Go","Java","C#"],
            users:[
                {id:1,name:"khan",email:"khan@gmail.com"},
                {id:2,name:"abid",email:"abid@gmail.com"},
                {id:3,name:"sohail",email:"sohail@gmail.com"},
            ]
        }
    },
    methods:{
        changeCondition(){
            this.show = !this.show;
        }
    }
    
}

</script>