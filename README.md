# Задание

Написать SPA для конвертирования валют. Для получения текущих курсов найдите и используйте любое отрытое API. 

## Статус проекта: в процессе переработки...

🎯 **Цель приложения:**

Дать пользователю возможность конвертировать из одной валюты в другую. 

📝 **Описание:**

1. Приложение должно состоять из:
    1. поля для ввода суммы в валюте, из которой конвертирует пользователь (базовой)
    2. выбора базовой и целевой валюты (в которую конвертирует пользователь)
    3. поля результата
2. По-умолчанию у пользователя должна определяться базовая валюта, соответствующая локали браузера.
3. Конвертация должна происходить сразу после ввода суммы в базовой валюте, на лету. 

## Инструкция по запуску

1. Скачать файлы приложения.
2. Запустить файл "index.html" или "index_en.html" с использованием браузера (тестирование проводилось в Google Chrome).

### Если приложение не работает

Доступно 1500 API-запросов по установленному в приложении ключу. В случае исчерпания всех доступных API-запросов по ключу в приложении появится соответствующее оповещение о невозможности получить курсы валют.
Для продолжения работы нужно сгенерировать новый ключ на [сайте](https://app.exchangerate-api.com/dashboard/confirmed) и прописать его в fetch-запросе.
