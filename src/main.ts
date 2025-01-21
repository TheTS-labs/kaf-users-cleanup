import { Client, Users } from 'node-appwrite';
import { AppwriteRequest } from './typings';

export default async ({ req, res, log }: AppwriteRequest) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT!)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID!)
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const users = new Users(client);

  const response = await users.list();

  for (const user of response.users) {
    const sessions = await users.listSessions(user.$id);
    if (sessions.total > 0) {
      log(`User ${user.$id} has active session`);
      continue;
    }

    log(`Deleting user ${user.$id} (${user.$createdAt})`);
    await users.delete(user.$id);
  }

  return res.empty();
};
