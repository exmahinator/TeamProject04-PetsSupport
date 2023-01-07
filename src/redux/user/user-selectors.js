export const getUserError = ({ user }) => user.error;
export const getUserLoading = ({ user }) => user.loading;
export const getLoadingUpdate = ({ user }) => user.isLoadingUpdate;
export const getDisabledFields = ({ user }) => user.isDisabledFields;
export const getUserWithPets = ({ user }) => user.user;
export const getUserInfo = ({ user }) => user.user.userInfo;
export const getUserAvatar = ({ user }) => user?.user.avatarURL;
export const getUserPets = ({ user }) => user.user.pets;
