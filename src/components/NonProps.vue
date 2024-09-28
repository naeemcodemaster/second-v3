<template>
    <div>
       
        <p>{{ first }}</p>
        <p>{{ second }}</p>
        
        
    </div>
</template>
<script>
export default {
    name: 'NonProps',
    props:{
        first:String
    }
    

}

</script>