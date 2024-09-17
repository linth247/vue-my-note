<script setup>
// const msg = 'Hellow World Slot'
defineProps(['msg2'])
const emits = defineEmits(['foo'])

setTimeout(()=>{
  emits('foo','onFoo')
},2000)

</script>

<template>
  <div>
    <slot>5.HelloWorld.vue</slot>
    {{ msg2 }}
    <slot></slot>

    <!-- <slot name="footer" :msg="msg">footer</slot>  -->
    <slot name="footer" msg3=" + msg3 footer props">footer</slot>
  </div>
</template>