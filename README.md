name: Automated Tests CI

# Тригери: коли запускати цей пайплайн
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    # Віртуальна машина (Runner), на якій працює код
    runs-on: ubuntu-latest

    steps:
    # 1. Завантажуємо код з репозиторію на віртуальну машину
    - name: Checkout code
      uses: actions/checkout@v4

    # 2. Встановлюємо середовище Node.js
    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'

    # 3. Встановлюємо залежності проєкту (пакети з package.json)
    - name: Install dependencies
      run: npm install

    # 4. Запускаємо автотести (Jest)
    - name: Run Tests
      run: npm test
