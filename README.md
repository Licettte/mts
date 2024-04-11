.....
assets - картинки/шрифты - прошли оптимизацию - во время сборки
public - картинки итд без изменений

1. npm create vite@latest
2.  cd vitetest
3.  npm install
4.  npm run dev
5. npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom

    Прогрессивные веб-приложения (PWAs)
    доступность в автономном режиме;

повышенная производительность;
быстрая и простая установка;
наличие функций, похожих на приложения (добавление на главный экран, автономный режим, push-уведомления);
быстрая загрузка.
PWAs более безопасны по сравнению с обычными веб-приложениями, так как они должны работать с HTTPS.___
1. npm i @emotion/styled
2. npm i -D @types/node
3. npm i vite-plugin-pwa
4. npm i vite-plugin-svgr
///
   "build": "tsc && vite build", // сборка проекта для продакшена
   "preview": "vite preview" // вит запустит сервер(локально, у нас на компе)
    разворачивает приложение в итоговом виде
///
   test: {   globals: true, искать тесты по всему приложению