export const getProfileAvatar = () => localStorage.getItem('avatar');
export const setProfileAvatar = (avatar) => localStorage.setItem('avatar', avatar);

export const getLessonProgress = () => {
    const progress = localStorage.getItem('lessonProgress');
    return progress ? Number(progress) : 1;

}

export const getNickname = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.nickname : null;
  };