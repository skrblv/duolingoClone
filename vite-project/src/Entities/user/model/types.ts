export type User = {
    id: number;
    name: string;
    points: string;
    avatar: string | null;
    status: 'Active' | 'Inactive' | 'Busy';
    achievement: 'crown' | 'medal' | null;
  };
  