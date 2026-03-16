# TestingNodeJsApp - Click Counter

A simple Node.js application that tracks user clicks and displays the current count.

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run app
```bash
npm start
```

3. Open in browser
```
http://localhost:3000
```

## API endpoints

- `GET /api/count` - returns current click count
- `POST /api/click` - increments click count and returns new count
- `POST /api/reset` - resets click count to 0

## Notes

- Count is stored in memory (app restart clears count).
- For production, replace in-memory state with DB (Redis/Mongo etc.) if persistent storage is needed.
