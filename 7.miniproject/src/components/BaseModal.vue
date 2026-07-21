<template>
    <div class="overlay">
    <div class="modal">

        <div class="header">
            <slot name="header"/>
            </div>

            <div class="body">
            <slot />
            </div>

        <div class="footer">
            <button @click="$emit('close')">
            Close
            </button>
        </div>

    </div>
</div>
    </template>

    <script setup lang="ts">
defineEmits(['close'])
</script>

<style scoped>

.overlay{
position:fixed;
inset:0;
background:rgba(0, 0, 0, .5);

display: flex;
justify-content: center;
align-items: center;
}

.modal{
background: white;
border-radius: 10px;
padding: 20px;
min-width: 400px;
}

.header{
margin-bottom: 20px;
background: brown;
padding: 35px;
border-radius: 20px;
}

.body{
margin-bottom: 20px;
}

.footer{
display: flex;
justify-content: flex-end;
}

button{
padding: 8px 16px;
}

</style>