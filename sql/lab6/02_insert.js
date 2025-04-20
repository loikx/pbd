const db = db.getSiblingDB("pbd");

db.users.insertMany([
    {id: "a5d3f7b2-6e8c-4c1a-9d72-bf4e39a8c6e1", name: "maksim", email: "maksim@mail.ru"},
    {id: "e2b8d4f1-5a7c-4d39-8f6e-3c2a7b1d9f84", name: "dmitriy", email: "dmitriy@mail.ru"},
    {id: "9c3a5e7d-8b24-4f12-a6d1-7e8f4b2c39a5", name: "egor", email: "egor@mail.ru"},
    {id: "6d7e1a3c-9b25-4f8c-2a4d-5b39f7e8c1a2", name: "vasilisa", email: "vasilisa@mail.ru"},
    {id: "b2f8c7d4-1a3e-5b9c-6d2a-7e4f39a8c5d1", name: "maria", email: "maria@mail.ru"},
    {id: "d4b2f8a7-3c1e-5d9c-6a2b-7f4e39c8d1a5", name: "natalya", email: "natalya@mail.ru"},
    {id: "3e8c7d5b-1a4f-2d9c-6b2a-7f39e4c8d1a5", name: "sergey", email: "sergey@mail.ru"},
    {id: "2a4d9c7e-1b5f-3c8d-6b2f-7e39a4c8d1a5", name: "sonya", email: "sonya@mail.ru"},
    {id: "7f2d8c4b-1a5e-3d9c-6b2f-7e39a4c8d1a5", name: "pavel", email: "pavel@mail.ru"},
    {id: "5b2d9c7e-1a4f-3c8d-6b2f-7e39a4c8d1a5", name: "olga", email: "olga@mail.ru"},
]);

db.category.insertMany([
    { _id: '550e8400-e29b-41d4-a716-446655440000', name: 'Электроника' },
    { _id: '550e8400-e29b-41d4-a716-446655440001', name: 'Одежда' },
    { _id: '550e8400-e29b-41d4-a716-446655440002', name: 'Книги' },
    { _id: '550e8400-e29b-41d4-a716-446655440003', name: 'Мебель' },
    { _id: '550e8400-e29b-41d4-a716-446655440004', name: 'Спорт' }
]);

db.category.insertMany([
    { 
        _id: '550e8400-e29b-41d4-a716-446655440005', 
        name: 'Смартфоны', 
        parent_category_id: '550e8400-e29b-41d4-a716-446655440000' 
    },
    { 
        _id: '550e8400-e29b-41d4-a716-446655440006', 
        name: 'Ноутбуки', 
        parent_category_id: '550e8400-e29b-41d4-a716-446655440000' 
    },
    { 
        _id: '550e8400-e29b-41d4-a716-446655440007', 
        name: 'Мужская одежда', 
        parent_category_id: '550e8400-e29b-41d4-a716-446655440001' 
    },
    { 
        _id: '550e8400-e29b-41d4-a716-446655440008', 
        name: 'Женская одежда', 
        parent_category_id: '550e8400-e29b-41d4-a716-446655440001' 
    },
    { 
        _id: '550e8400-e29b-41d4-a716-446655440009', 
        name: 'Фантастика', 
        parent_category_id: '550e8400-e29b-41d4-a716-446655440002' 
    },
    { 
        _id: '550e8400-e29b-41d4-a716-446655440010', 
        name: 'Велоспорт', 
        parent_category_id: '550e8400-e29b-41d4-a716-446655440004' 
    }
]);


db.seller.insertMany([
    { 
      id: '4f7c5a1d-3b2e-4c8a-8d09-99f7b7c2145a', 
      name: 'ИП МОИ ДЕВАЙСЫ', 
      rating: 3 
    },
    { 
      id: 'd93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37', 
      name: 'ШТАНЫ И КУРТКИ', 
      rating: 2 
    },
    { 
      id: 'e8a2a6b9-53e5-4f89-85ad-bcd39a6f1e3c', 
      name: 'перепродажа ru', 
      rating: 1 
    },
    { 
      id: '7f6c9d81-8b27-4b23-9e49-2a8a6eaf9b99', 
      name: 'маркет у дома', 
      rating: 5 
    },
    { 
      id: '5de4c2a9-17b4-4b68-b5a1-9e2e1bfb249d', 
      name: 'Xiaomi', 
      rating: 5 
    },
    { 
      id: '8a1c5e7d-94f3-4e12-81d4-6b8e4a7c5f3e', 
      name: 'Девайсы apple', 
      rating: 3 
    },
    { 
      id: '2f7b3a94-68e1-45c2-97f8-5bcd8e7a2d14', 
      name: 'ИП УМНЫЙ ДОМ', 
      rating: 5 
    },
    { 
      id: 'b3c2e17d-48a5-4a9b-87e4-3f2d6a1b8c97', 
      name: 'ООО ПОКУПАЕМ ПРОДАЕМ', 
      rating: 4 
    },
    { 
      id: 'e5a8b4c7-12f3-4d5a-8c9e-7b6d2a4f3e81', 
      name: 'ФАБРИКА', 
      rating: 5 
    },
    { 
      id: '9d4e2a6b-7f38-42c1-8a5e-3b97c5d8e4f2', 
      name: 'NAKAT', 
      rating: 5 
    }
]);

db.product.insertMany([
    { "_id": "550e8400-e29b-41d4-a716-446655440011", "name": "Xiaomi Redmi Note 12", "description": "Смартфон с AMOLED дисплеем и мощной батареей", "price": 19999, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "5de4c2a9-17b4-4b68-b5a1-9e2e1bfb249d" },
    { "_id": "550e8400-e29b-41d4-a716-446655440012", "name": "iPhone 14", "description": "Флагманский смартфон Apple с A15 Bionic", "price": 79999, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "8a1c5e7d-94f3-4e12-81d4-6b8e4a7c5f3e" },
    { "_id": "550e8400-e29b-41d4-a716-446655440013", "name": "Samsung Galaxy S23", "description": "Флагман от Samsung с лучшими камерами", "price": 89999, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "b3c2e17d-48a5-4a9b-87e4-3f2d6a1b8c97" },
    { "_id": "550e8400-e29b-41d4-a716-446655440014", "name": "Google Pixel 7", "description": "Чистый Android и мощные AI-функции", "price": 64999, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "7f6c9d81-8b27-4b23-9e49-2a8a6eaf9b99" },
    { "_id": "550e8400-e29b-41d4-a716-446655440015", "name": "OnePlus 11", "description": "Флагманский смартфон с быстрой зарядкой", "price": 69999, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "2f7b3a94-68e1-45c2-97f8-5bcd8e7a2d14" },
    { "_id": "550e8400-e29b-41d4-a716-446655440016", "name": "Honor v54", "description": "Отличный смартфом с красивым корпусом", "price": 120999, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "4f7c5a1d-3b2e-4c8a-8d09-99f7b7c2145a" },
    { "_id": "550e8400-e29b-41d4-a716-446655440017", "name": "Huawei Nova", "description": "Первый смартфон с 8 камерами!", "price": 12345, "category_id": "550e8400-e29b-41d4-a716-446655440005", "seller_id": "4f7c5a1d-3b2e-4c8a-8d09-99f7b7c2145a" },
    { "_id": "550e8400-e29b-41d4-a716-446655440018", "name": "MacBook Air M2", "description": "Легкий и мощный ноутбук Apple", "price": 119999, "category_id": "550e8400-e29b-41d4-a716-446655440006", "seller_id": "8a1c5e7d-94f3-4e12-81d4-6b8e4a7c5f3e" },
    { "_id": "550e8400-e29b-41d4-a716-446655440019", "name": "ASUS ROG Zephyrus", "description": "Игровой ноутбук с RTX 3080", "price": 159999, "category_id": "550e8400-e29b-41d4-a716-446655440006", "seller_id": "b3c2e17d-48a5-4a9b-87e4-3f2d6a1b8c97" },
    { "_id": "550e8400-e29b-41d4-a716-446655440020", "name": "Dell XPS 15", "description": "Премиальный ультрабук для работы", "price": 139999, "category_id": "550e8400-e29b-41d4-a716-446655440006", "seller_id": "7f6c9d81-8b27-4b23-9e49-2a8a6eaf9b99" },
    { "_id": "550e8400-e29b-41d4-a716-446655440021", "name": "Lenovo Legion 5", "description": "Игровой ноутбук с AMD Ryzen", "price": 99999, "category_id": "550e8400-e29b-41d4-a716-446655440006", "seller_id": "2f7b3a94-68e1-45c2-97f8-5bcd8e7a2d14" },
    { "_id": "550e8400-e29b-41d4-a716-446655440022", "name": "XIAOMI Spectre x360", "description": "Трансформируемый ноутбук с OLED дисплеем", "price": 129999, "category_id": "550e8400-e29b-41d4-a716-446655440006", "seller_id": "5de4c2a9-17b4-4b68-b5a1-9e2e1bfb249d" },
    { "_id": "550e8400-e29b-41d4-a716-446655440023", "name": "Джинсы Levis", "description": "Классические мужские джинсы", "price": 4999, "category_id": "550e8400-e29b-41d4-a716-446655440007", "seller_id": "d93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37" },
    { "_id": "550e8400-e29b-41d4-a716-446655440024", "name": "Кожаная куртка", "description": "Стильная кожаная куртка для мужчин", "price": 15999, "category_id": "550e8400-e29b-41d4-a716-446655440007", "seller_id": "d93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37" },
    { "_id": "550e8400-e29b-41d4-a716-446655440025", "name": "Футболка Nike", "description": "Спортивная футболка с логотипом", "price": 2499, "category_id": "550e8400-e29b-41d4-a716-446655440007", "seller_id": "7f6c9d81-8b27-4b23-9e49-2a8a6eaf9b99" },
    { "_id": "550e8400-e29b-41d4-a716-446655440026", "name": "Пуховик Columbia", "description": "Зимний теплый пуховик", "price": 12999, "category_id": "550e8400-e29b-41d4-a716-446655440007", "seller_id": "b3c2e17d-48a5-4a9b-87e4-3f2d6a1b8c97" },
    { "_id": "550e8400-e29b-41d4-a716-446655440027", "name": "Спортивные штаны Adidas", "description": "Удобные спортивные брюки", "price": 3999, "category_id": "550e8400-e29b-41d4-a716-446655440007", "seller_id": "d93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37" },
    { "_id": "550e8400-e29b-41d4-a716-446655440028", "name": "Джинсы Zara", "description": "Классические мужские джинсы", "price": 1234, "category_id": "550e8400-e29b-41d4-a716-446655440008", "seller_id": "d93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37" },
    { "_id": "550e8400-e29b-41d4-a716-446655440029", "name": "Кожаная куртка Lime", "description": "Стильная кожаная куртка для мужчин", "price": 2345, "category_id": "550e8400-e29b-41d4-a716-446655440008", "seller_id": "d93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37" },
    { "_id": "550e8400-e29b-41d4-a716-446655440030", "name": "Футболка Adidas", "description": "Спортивная футболка с логотипом", "price": 3456, "category_id": "550e8400-e29b-41d4-a716-446655440008", "seller_id": "7f6c9d81-8b27-4b23-9e49-2a8a6eaf9b99" },
    { "_id": "550e8400-e29b-41d4-a716-446655440031", "name": "Пуховик TNF", "description": "Зимний теплый пуховик", "price": 4567, "category_id": "550e8400-e29b-41d4-a716-446655440008", "seller_id": "b3c2e17d-48a5-4a9b-87e4-3f2d6a1b8c97" },
    { "_id": "550e8400-e29b-41d4-a716-446655440032", "name": "Спортивные штаны Nike", "description": "Удобные спортивные брюки", "price": 5678, "category_id": "550e8400-e29b-41d4-a716-446655440008", "seller_id": "d93b5f6e-01b2-4a8c-92a4-1b5c8e7fda37" },
    { "_id": "550e8400-e29b-41d4-a716-446655440033", "name": "Дюна", "description": "Легендарный роман Фрэнка Герберта", "price": 999, "category_id": "550e8400-e29b-41d4-a716-446655440009", "seller_id": "e8a2a6b9-53e5-4f89-85ad-bcd39a6f1e3c" },
    { "_id": "550e8400-e29b-41d4-a716-446655440034", "name": "451 градус по Фаренгейту", "description": "Антиутопия Рэя Брэдбери", "price": 799, "category_id": "550e8400-e29b-41d4-a716-446655440009", "seller_id": "e8a2a6b9-53e5-4f89-85ad-bcd39a6f1e3c" },
    { "_id": "550e8400-e29b-41d4-a716-446655440035", "name": "Марсианин", "description": "Роман Энди Уира", "price": 1099, "category_id": "550e8400-e29b-41d4-a716-446655440009", "seller_id": "e8a2a6b9-53e5-4f89-85ad-bcd39a6f1e3c" }
]);

db.review.insertMany([
    { 
      "_id": "c1a2b3d4-e5f6-4789-9123-456789abcdef", 
      "rating": 5, 
      "text": "Отличный смартфон, работает быстро!", 
      "user_id": "a5d3f7b2-6e8c-4c1a-9d72-bf4e39a8c6e1", 
      "product_id": "550e8400-e29b-41d4-a716-446655440013" 
    },
    { 
      "_id": "d2e3f4a5-b6c7-8901-2345-6789abcdef12", 
      "rating": 4, 
      "text": "Хороший ноутбук, но заряд держит не очень долго.", 
      "user_id": "b2f8c7d4-1a3e-5b9c-6d2a-7e4f39a8c5d1", 
      "product_id": "550e8400-e29b-41d4-a716-446655440021" 
    },
    { 
      "_id": "e3f4a5b6-c7d8-9012-3456-789abcdef123", 
      "rating": 3, 
      "text": "Качество ткани не соответствует ожиданиям.", 
      "user_id": "5b2d9c7e-1a4f-3c8d-6b2f-7e39a4c8d1a5", 
      "product_id": "550e8400-e29b-41d4-a716-446655440028" 
    },
    { 
      "_id": "f4a5b6c7-d8e9-0123-4567-89abcdef1234", 
      "rating": 5, 
      "text": "Отличная книга, очень понравилась сюжетная линия.", 
      "user_id": "a5d3f7b2-6e8c-4c1a-9d72-bf4e39a8c6e1", 
      "product_id": "550e8400-e29b-41d4-a716-446655440033" 
    },
    { 
      "_id": "a5b6c7d8-e9f0-1234-5678-9abcdef12345", 
      "rating": 2, 
      "text": "Шлем оказался не таким прочным, как заявлено.", 
      "user_id": "3e8c7d5b-1a4f-2d9c-6b2a-7f39e4c8d1a5", 
      "product_id": "550e8400-e29b-41d4-a716-446655440039" 
    }
]);
  
db.orders.insertMany([
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440040", 
      "date": ISODate("2024-02-10T00:00:00Z"), 
      "price": 19999, 
      "status": "accept", 
      "user_id": "a5d3f7b2-6e8c-4c1a-9d72-bf4e39a8c6e1" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440041", 
      "date": ISODate("2024-02-09T00:00:00Z"), 
      "price": 45999, 
      "status": "done", 
      "user_id": "e2b8d4f1-5a7c-4d39-8f6e-3c2a7b1d9f84" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440042", 
      "date": ISODate("2024-02-08T00:00:00Z"), 
      "price": 9999, 
      "status": "done", 
      "user_id": "9c3a5e7d-8b24-4f12-a6d1-7e8f4b2c39a5" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440043", 
      "date": ISODate("2024-02-07T00:00:00Z"), 
      "price": 2499, 
      "status": "deliver", 
      "user_id": "6d7e1a3c-9b25-4f8c-2a4d-5b39f7e8c1a2" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440044", 
      "date": ISODate("2024-02-06T00:00:00Z"), 
      "price": 78999, 
      "status": "done", 
      "user_id": "b2f8c7d4-1a3e-5b9c-6d2a-7e4f39a8c5d1" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440045", 
      "date": ISODate("2024-02-05T00:00:00Z"), 
      "price": 3199, 
      "status": "deliver", 
      "user_id": "d4b2f8a7-3c1e-5d9c-6a2b-7f4e39c8d1a5" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440046", 
      "date": ISODate("2024-02-04T00:00:00Z"), 
      "price": 14999, 
      "status": "accept", 
      "user_id": "3e8c7d5b-1a4f-2d9c-6b2a-7f39e4c8d1a5" 
    },
    { 
      "_id": "550e8400-e29b-41d4-a716-446655440047", 
      "date": ISODate("2024-02-16T00:00:00Z"), 
      "price": 12399, 
      "status": "deliver", 
      "user_id": "5b2d9c7e-1a4f-3c8d-6b2f-7e39a4c8d1a5" 
    }
]);
  
db.order_product.insertMany([
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440040", 
      "product_id": "550e8400-e29b-41d4-a716-446655440013" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440040", 
      "product_id": "550e8400-e29b-41d4-a716-446655440033" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440041", 
      "product_id": "550e8400-e29b-41d4-a716-446655440012" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440042", 
      "product_id": "550e8400-e29b-41d4-a716-446655440014" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440043", 
      "product_id": "550e8400-e29b-41d4-a716-446655440021" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440044", 
      "product_id": "550e8400-e29b-41d4-a716-446655440018" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440045", 
      "product_id": "550e8400-e29b-41d4-a716-446655440025" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440046", 
      "product_id": "550e8400-e29b-41d4-a716-446655440039" 
    },
    { 
      "order_id": "550e8400-e29b-41d4-a716-446655440047", 
      "product_id": "550e8400-e29b-41d4-a716-446655440028" 
    }
]);
  