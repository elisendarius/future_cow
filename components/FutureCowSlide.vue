<script setup lang="ts">
const infoPoints = [
  {
    title: 'Smart Sensors',
    description: 'IoT devices monitor health metrics in real-time, ensuring optimal wellbeing.',
    position: 'top-left' as const,
    delay: 0.3,
  },
  {
    title: 'Sustainable Feed',
    description: 'AI-optimized nutrition reduces methane emissions by 30%.',
    position: 'top-right' as const,
    delay: 0.5,
  },
  {
    title: 'Genetic Excellence',
    description: 'DNA analysis ensures disease resistance and productivity.',
    position: 'left' as const,
    delay: 0.7,
  },
  {
    title: 'Climate Adaptation',
    description: 'Bred to thrive in changing environmental conditions.',
    position: 'right' as const,
    delay: 0.9,
  },
  {
    title: 'Milk Innovation',
    description: 'Enhanced nutritional profile with omega-3 enrichment.',
    position: 'bottom-left' as const,
    delay: 1.1,
  },
  {
    title: 'Welfare Tech',
    description: 'Automated systems ensure comfort and natural behaviors.',
    position: 'bottom-right' as const,
    delay: 1.3,
  },
]
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- Title -->
    <div 
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="text-center mb-8"
    >
      <h1 class="text-5xl font-bold text-gray-900 mb-2">The Future Cow</h1>
      <p class="text-xl text-gray-600">Innovation meets sustainability</p>
    </div>

    <!-- Main content area -->
    <div class="relative bg-white rounded-2xl shadow-2xl p-16 w-full max-w-5xl h-[600px] flex items-center justify-center">
      <!-- Info pointers -->
      <InfoPointer
        v-for="(point, index) in infoPoints"
        :key="index"
        :title="point.title"
        :description="point.description"
        :position="point.position"
        :delay="point.delay"
      />

      <!-- Central cow illustration -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 800 } }"
        class="flex items-center justify-center"
      >
        <CowIllustration />
      </div>
    </div>

    <!-- Footer instruction -->
    <p 
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1500, duration: 500 } }"
      class="text-center mt-6 text-gray-500 text-sm"
    >
      Click on any info point to expand details
    </p>
  </div>
</template>
