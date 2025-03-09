# Лабораторная работа 4. Маскировка и анонимизация данных

РАБОТУ ВЫПОЛНИЛ СТУДЕНТ ГРУППЫ: М3210 Вартанян Леонтий Николаевич

## Условие лабораторной
### Задачи
    1. Замаскировать поля с конфиденциальными данными.
    2. Провести анонимизацию данных.

### Порядок выполнения работы
1. Установите расширение PostgreSQL Anonymizer
2. Выберите поля, которые необходимо замаскировать и модифицируйте уже существующие таблицы или представления.
Динамическая маскировка данных
3. Выберите данные, которые можно анализировать, скрыв, обобщив конфиденциальные данные. Создайте три Materialized Views используя:
    - Generalization – заменяет данные более широкими и менее точными значениями, диапазонами.
    - Используйте 2 стратегии анонимизации из списка:
        * Destruction
        * Adding Noise
        * Randomization
        * Faking
        * Advanced Faking
        * Pseudonymization
        * Generic Hashing
        * Partial scrambling
4. Предоставить отчёт, включить в него следующие данные:
 - перечень таблиц и полей, задействованных в Materialized Views;
 - данные из Materialized Views;
 - код по маскировке и анонимизации.

## Выполнение

### Тема: Поиск товаров на Яндекс-Маркет

#### GENERALIZATION
Допустим аналитики решили провести исследование с использованием дат заказов. Но мы не хотим, чтобы они знали точную дату каждого заказа, тогда давайте сделаем диапазоны дат размером в неделю.

```sql
CREATE MATERIALIZED VIEW generealized_orders AS
SELECT id, anon.generalize_daterange(date, 'week') AS date FROM orders;
```

![Generealization](/images/generealized.png)

#### PSEUDONYMIZATION
Допустим аналитики решили проверсти исследование связанное с пользователями. Но знать настоящий email и name пользователей им запрещено. Тогда давайте используем псевдонимизация, чтобы сокрыть эту информацию от них.

В первую очередь нам нужно сконфигурировать `anon` для использования псевдомизации.
```sql
ALTER DATABASE pbd SET anon.salt = "secret_key";
```

Далее создадим `materialized view`
```sql
CREATE MATERIALIZED VIEW pseudomization_users AS
SELECT id, anon.pseudo_first_name(name) AS name, anon.pseudo_email(email) AS email FROM users;
```

![pseudo](/images/pseudo.png)

#### RANDOMIZATION
Допустим решили провести исследование `seller`, но мы не должны знать их настоящий рейтинг. Тогда используем рандомизацию рейтинга.

```sql
CREATE MATERIALIZED VIEW random_rating_seller AS 
SELECT id, name, anon.random_int_between(1, 5) AS rating FROM seller;
```

![random](/images/random.png)