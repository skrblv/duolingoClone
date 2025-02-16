import React from 'react';
import { motion } from 'framer-motion';
import { Video } from '../model/types';

type VideoCardProps = {
  video: Video;
  index: number; // Для управления задержкой анимации
};

export const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-md md:max-w-4xl mb-6 sm:mb-8 md:mb-10 bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 flex items-center space-x-2 sm:space-x-3">
        {video.icon}
        <span>{video.title}</span>
      </h1>
      <iframe
        className="w-full h-52 sm:h-64 md:h-80 rounded-md"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};
