<template>
  <Teleport to="body">
    <div class="modal-overlay">
      <BaseCard>
        <div class="modal-box">
          <div class="modal-header">
            <slot name="header">Hapus Todo?</slot>
          </div>
          <div class="modal-body">
  <slot :confirmationText="confirmationText">
    Ketik "HAPUS" untuk mengonfirmasi.
  </slot>

  <input
    ref="inputRef"
    v-model="confirmationText"
    type="text"
    class="modal-input"
    placeholder="HAPUS"
  />
</div>
          <div class="modal-footer">
            <button 
              class="buttondanger" 
              :disabled="confirmationText !== 'HAPUS'"
              @click="emit('confirm')"
            >
              Ya, hapus
            </button>
            <button class="buttonsecondary"
            @click="emit('cancel')">Batal
          </button>
          </div>
        </div>
      </BaseCard>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseCard from './BaseCard.vue'

const inputRef = ref<HTMLInputElement | null>(null)
const confirmationText = ref('')

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void }>()

onMounted(() => { 
  console.log('kkkkkk')
  inputRef.value?.focus() })

onUnmounted(() => {
  alert('test unmounted')
})
</script>

<style scoped>
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center; z-index: 9999;
}
.modal-box { display: flex; flex-direction: column; gap: 16px; min-width: 300px; }
.modal-header { font-weight: bold; font-size: 1.25rem; }
.modal-body { display: flex; flex-direction: column; gap: 12px; }
.modal-footer { display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; }
.buttonsecondary {
 color: white;
 background-color: red;
}
.buttondanger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>