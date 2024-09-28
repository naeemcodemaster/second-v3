<template>
    <div>
      <h1>Slot in Vue 3 </h1>
      <!-- <SlotChild><h2>Heading Number two</h2></SlotChild>
      <SlotChild><b>bold tag</b></SlotChild>
      <SlotChild><table border="1">
        <tr>
            <th>id</th>
            <th>name</th>
        </tr>
        <tr>
            <td>1</td>
            <td>khan</td>
        </tr>
      </table></SlotChild> -->


      <!-- Multiple slot -->
      <SlotChild>
        <template v-slot:headerslot><h1>Heading</h1></template>
        <template v-slot:contentslot><p>Content Data here</p></template>
        <template v-slot:footerslot><button>Read More...</button></template>
      </SlotChild>

      <SlotChild>
        <template v-slot:headerslot><h1>Heading 2</h1></template>
        <template v-slot:contentslot><p>Content Data 2 here</p></template>
        <template v-slot:footerslot><button>Read More 2 ...</button></template>
      </SlotChild>
    </div>
  </template>
  
  <script>
  import SlotChild from './SlotChild.vue';
  export default {
    name:'FifteenClass',
    components:{SlotChild},
    
  }
  </script>
  