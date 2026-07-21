<template>
<button
:class="variant"
@click="$emit('click')"
>
<slot />
</button>
</template> 


<script setup lang="ts">
defineProps<{
variant?: 'primary'|'secondary'|'danger'
}>()

defineEmits(['click'])
</script>

<style scoped>
button {
padding: 10px 10px;
border-radius: 8px;
}

.primary {
background: blue;
padding: 15px;
color: white;
font-weight: 500;
font-size: small;
}
.secondary{
background: green;
color: white;
padding: 15px;
color: white;
font-weight: 500;
font-size: small;
}
.danger{
background: red;
color: white;
padding: 15px;
color: white;
font-weight: 500;
font-size: small;
}

</style>