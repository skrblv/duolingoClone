import React from 'react';
import { videos } from '../model/videos';
import { VideoCard } from '../../../Entities/video/ui/VideoCard';

export const LearningList: React.FC = () => {
  return (
    <div className="min-h-full relative max-md:ml-10 sm:mt-20 sm:pt-16 md:ml-[20%] md:mt-8 flex flex-col items-center text-white py-5 sm:py-8 md:py-10">
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} index={index} />
      ))}
    </div>
  );
};
