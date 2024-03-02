Для работы с отдельным микрофронтендом нужно **локально** нужно:

```bash
pnpm i --frozen-lockfile
pnpm dev
```

Для того чтобы заставить микрофронтенд работать на **host’е** нужно: 

```bash
pnpm build
pnpm preview
```

После того как все микрофронты запустятся нужно будет сделать следующее:

```bash
Для локальной разработки:
pnpm dev

Для prod:
pnpm build
pnpm preview
```