# Test task

## Установка

````bash
  $ git clone https://github.com/ShabarovArtem/Pet.git
  $ cd Pet
````

## Запуск

#### local
````bash
  $ npm install
  $ npm start
````
#### docker-compose
````bash
  $ docker compose up -d
  # Посмотреть логи
  $ docker compose logs -f
````

#### Пример создания
#### Метод Post
URL `http://localhost:8080/pet`

Тело:
```json
{
"name": "Barsik"
}
```
Ответ:
```json
{
  "id": "e0e1e173-59bb-4df8-b0a2-038a12db76a8",
  "name": "Barsik",
  "age": 0,
  "health": 100,
  "hunger": 0,
  "mood": 100,
  "status": "alive"
}
```

#### Пример взаимодействия
#### Метод Post
URL `http://localhost:8080/pet/play`

Тело:
```json
{
    "id": "e0e1e173-59bb-4df8-b0a2-038a12db76a8"
}
```

