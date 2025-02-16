import { User } from "../../../Entities/user/model/types";
import { getProfileAvatar, getNickname } from "../../../entities/profile/model/profile";

const myAvatar = getProfileAvatar();

export const users: User[] = [
  {
    id: 1,
    name: getNickname(),
    points: '1234 points',
    avatar: myAvatar,
    status: 'Active',
    achievement: 'crown',
  },
  {
    id: 2,
    name: 'Миминов Мустафа',
    points: '987 points',
    avatar: 'https://disney-classic.ru/wp-content/uploads/Mufasa_Lion_King_-1024x824.jpg',
    status: 'Inactive',
    achievement: 'medal',
  },
  {
    id: 3,
    name: 'Бекишев Эльмар',
    points: '876 points',
    avatar: 'https://s0.rbk.ru/v6_top_pics/media/img/5/63/756763783160635.webp',
    status: 'Active',
    achievement: 'medal',
  },
  {
    id: 4,
    name: 'Ерещенко Владислав',
    points: '765 points',
    avatar: 'https://media.istockphoto.com/id/533837393/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%BE%D1%83%D0%BD.jpg?s=612x612&w=0&k=20&c=AbY-4_kRPJjgEjKPgPX_9LN3b_FzSGC80VmYfNNzkUU=',
    status: 'Busy',
    achievement: null,
  },
  {
    id: 5,
    name: 'Акылбек Арсланов',
    points: '654 points',
    avatar: 'https://sun9-79.userapi.com/impg/CNiXMH95-oxqYkUpDZnVn31I4uZ0JjTtBNncEg/6JqHpS4RzFA.jpg?size=510x422&quality=96&sign=623b08a2b7125239886f264087560670&type=album',
    status: 'Active',
    achievement: null,
  },
];
