<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  description: string
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left' | 'right'
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
})

const isExpanded = ref(false)

const positionClasses = {
  'top-left': 'top-[10%] left-[5%]',
  'top-right': 'top-[10%] right-[5%]',
  'bottom-left': 'bottom-[15%] left-[5%]',
  'bottom-right': 'bottom-[15%] right-[5%]',
  'left': 'top-[45%] left-[5%]',
  'right': 'top-[45%] right-[5%]',
}

const textAlign = {
  'top-left': 'text-left',
  'top-right': 'text-right',
  'bottom-left': 'text-left',
  'bottom-right': 'text-right',
  'left': 'text-left',
  'right': 'text-right',
}
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: delay * 1000, duration: 500 } }"
    :class="['absolute cursor-pointer', positionClasses[position]]"
    @click="isExpanded = !isExpanded"
  >
    <div :class="['flex flex-col items-start gap-2', textAlign[position]]">
      <!-- Pointer dot with pulse animation -->
      <div class="relative">
        <div 
          v-motion
          :initial="{ scale: 1 }"
          :enter="{ 
            scale: [1, 1.2, 1], 
            transition: { 
              duration: 2000, 
              repeat: Infinity,
              ease: 'easeInOut'
            } 
          }"
          class="w-4 h-4 bg-blue-500 rounded-full"
        />
        <div 
          v-motion
          :initial="{ scale: 1, opacity: 0.5 }"
          :enter="{ 
            scale: [1, 1.8, 1], 
            opacity: [0.5, 0, 0.5],
            transition: { 
              duration: 2000, 
              repeat: Infinity,
              ease: 'easeInOut'
            } 
          }"
          class="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full opacity-50"
        />
      </div>

      <!-- Info card -->
      <div
        class="bg-white rounded-lg shadow-lg p-4 max-w-[200px] border border-gray-200 transition-all duration-300"
        :style="{ 
          height: isExpanded ? 'auto' : '40px',
          opacity: isExpanded ? 1 : 0.95,
          overflow: isExpanded ? 'visible' : 'hidden'
        }"
      >
        <h3 class="text-blue-600 mb-1 font-semibold text-sm">{{ title }}</h3>
        <transition name="fade">
          <p v-show="isExpanded" class="text-gray-600 text-sm">
            {{ description }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
