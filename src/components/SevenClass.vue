<template>
    <div>
        <h1>HTML Binding</h1>
        <p>{{ username }}</p>
        <!-- <p v-html="tag">
            
        </p> -->

        <!-- two tag combine -->
        <div v-html="tag + tag2">

        </div>
        
    </div>
</template>
<script>
export default {
    name: 'SevenClass',
    data() {
        return {
            username: 'Majid',
            tag:"<h2>khan</h2>",
            tag2:"<h2>majid</h2>",
        }
    },
    

}

</script>