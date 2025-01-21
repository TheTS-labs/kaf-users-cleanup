# Kaf's Users Cleanup

A simple function that deletes all users without an active session. This function runs on a schedule every 24 hours.

## Usage

Send any request to trigger the deletion process.

## ⚙️ Configuration

| Setting           | Value                          |
| ----------------- | ------------------------------ |
| Runtime           | Node (22.0)                    |
| Entrypoint        | `dist/main.js`                 |
| Build Commands    | `npm install`, `npm run build` |
| Permissions       | `users.read`, `users.write`    |
| Timeout (Seconds) | 900 (effectively no timeout)   |

## 🔒 Environment Variables

No environment variables are required.
