const UI = require('ui');
const Vector2 = require('vector2');

// Формулы
const formulas = [
  "C → 0",
  "x^n → n * x^(n-1)",
  "u ± v → u' ± v'",
  "u * v → u' * v + u * v'",
  "u/v → (u' * v - u * v') / v^2",
  "f(g(x)) → f'(g(x)) * g'(x)",
  "kx + b → k",
  "e^x → e^x",
  "a^x → a^x * ln(a)",
  "ln(x) → 1/x",
  "log_a(x) → 1 / (x * ln(a))",
  "sin(x) → cos(x)",
  "cos(x) → -sin(x)",
  "tan(x) → 1 / cos^2(x)",
  "cot(x) → -1 / sin^2(x)",
  "arcsin(x) → 1 / sqrt(1 - x^2)",
  "arccos(x) → -1 / sqrt(1 - x^2)",
  "arctan(x) → 1 / (1 + x^2)",
  "arccot(x) → -1 / (1 + x^2)"
];

// Разделяем формулы на страницы (по 3 строки)
const pages = [];
for (let i = 0; i < formulas.length; i += 3) {
  pages.push(formulas.slice(i, i + 3));
}

// Текущая страница
let currentPage = 0;

// Функция обновления экрана
function updateScreen(card, page) {
  card.body(pages[page].join('\n'));
}

// Главное окно
const main = new UI.Card({
  title: 'Formulas',
  body: '',
  scrollable: true
});

// Отобразить первую страницу
updateScreen(main, currentPage);
main.show();

// Обработка нажатий кнопок
main.on('click', 'up', function() {
  if (currentPage > 0) {
    currentPage -= 1;
    updateScreen(main, currentPage);
  }
});

main.on('click', 'down', function() {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    updateScreen(main, currentPage);
  }
});
