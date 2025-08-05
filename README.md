### Перед запуском необходимо:

1. `npm init playwright@latest`
2. `npm install dotenv --save`

### Полезное:

1. Запуск конкретного теста только в хроме `npx playwright test -g "Get base loan with login" --project=chromium`
2. Отладка тестов в UI моде `npx playwright test --ui`
3. Codegen с Playwright `npx playwright codegen loan-app.tallinn-learning.ee`

| No  | Test description                                                                      |
| --- | ------------------------------------------------------------------------------------- |
| 1   | Base Elements are visible                                                             |
| 2   | Get base loan with login                                                              |
| 3   | Scroll and viewport visible elements                                                  |
| 4   | Scroll range amount                                                                   |
| 5   | Scroll Period option                                                                  |
| 6   | Return to the main page after successful loan count                                   |
| 7   | By leaving Username and Password fields empty, continue button is not active          |
| 8   | Minimum Amount slider set is 500, maximum Amount slider set is 10000                  |
| 9   | Minimum Period slider set is 12, maximum Period slider set is 36                      |
| 10  | By clicking on the second apply for loan button appears the main page with calculator |
| 11  | By clicking on the first apply for loan button appears the main page with calculator  |
| 12  | Mocked backend returns correct monthly payment                                        |
| 13  | User can calculate, login and confirm loan with mocked backend                        |
