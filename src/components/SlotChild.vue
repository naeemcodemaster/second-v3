<template>
    <div>
        <h2>Slot Child</h2>
        <slot></slot>


        <!-- Multiple Slot -->
        <div>
           <header> <slot name="headerslot">Heading Area</slot></header>
            <content><slot name="contentslot">Content Area</slot></content>
           <footer> <slot name="footerslot">Footer Area</slot></footer>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SlotChild',


}
</script>
  