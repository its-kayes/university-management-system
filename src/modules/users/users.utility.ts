import { User } from './users.model';

// Get New User Id
export const getUserId = async (): Promise<string> => {
  const getLastUserId = await User.find({}, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  const lastUserId = getLastUserId[0]?.id;

  const userId = (lastUserId ? parseInt(lastUserId) + 1 : 1)
    .toString()
    .padStart(5, '0');

  return userId;
};
