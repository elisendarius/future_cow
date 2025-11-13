import { motion } from 'motion/react';
import { CowIllustration } from './components/CowIllustration';
import { InfoPointer } from './components/InfoPointer';

export default function App() {
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-gray-900 mb-2">The Future Cow</h1>
          <p className="text-gray-600">Innovation meets sustainability</p>
        </motion.div>

        {/* Main content area */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-16 min-h-[600px] flex items-center justify-center">
          {/* Info pointers */}
          {infoPoints.map((point, index) => (
            <InfoPointer
              key={index}
              title={point.title}
              description={point.description}
              position={point.position}
              delay={point.delay}
            />
          ))}

          {/* Central cow illustration */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <CowIllustration />
          </motion.div>
        </div>

        {/* Footer instruction */}
        <motion.p
          className="text-center mt-6 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Click on any info point to expand details
        </motion.p>
      </div>
    </div>
  );
}
