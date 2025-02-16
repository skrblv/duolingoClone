import { ReactNode } from 'react';

export type Video = {
  id: number;
  title: string;
  icon: ReactNode; // Для иконок типа <FaHtml5 />
  url: string;     // Ссылка на видео
};
