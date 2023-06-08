import config from '../../config';
import { IUser } from './users.interface';
import { User } from './users.model';
import { getUserId } from './users.utility';

const saveUsersToDb = async (user: IUser) => {
  user.id = await getUserId();

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const result = await User.create(user);
  if (!result) {
    throw new Error('Failed to create user!');
  }

  return result;
};

export const UsersService = {
  saveUsersToDb,
};
