# revisor-photos

![image](https://github.com/NikitaGrin/revisor-photos/assets/87934111/f47aa75a-0b40-476d-bfea-efc97264ab83)


## Использованный стек

- React Router
- Redux
- CSS modules
- TanStack Query v5
- React Icons

### Запуск

Перед запуском убедитесь, что на сервере включены cors

```javascript
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
```

Также при необходимости измените сервер и порт в `src/services/server.ts`

#### Команды для запуска

`npm i` `npm run start` `Y`
