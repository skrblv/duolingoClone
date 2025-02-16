import { Icons } from "../../../shared/ui/Icon";

// Определяем тип для элементов массива navItems
interface NavItem {
  label: string;
  icon: JSX.Element; // Указываем, что icon — это JSX-элемент
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Обучение", icon: <Icons.Book />, path: "/learning" },
  { label: "Практика", icon: <Icons.Dumbbell />, path: "/lessons" },
  { label: "Рейтинги", icon: <Icons.Medal />, path: "/rankings" },
  { label: "Профиль", icon: <Icons.User />, path: "/profile" },
  // { label: "Выйти", icon: <Icons.SignOut/>, path: "/register" }
];
