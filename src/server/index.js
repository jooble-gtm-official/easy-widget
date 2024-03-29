import path from 'path';
import express from 'express';

const app = express();
const PORT = 3333;

app.use('/client', express.static(path.join(process.cwd(), 'dist/client')));
app.use('/server', express.static(path.join(process.cwd(), 'dist/server')));

app.listen(PORT, () => {
  console.info(`[${new Date().toISOString()}]`, `🌎 http://localhost:${PORT}`);
});

export default app;
