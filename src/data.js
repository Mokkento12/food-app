const recipes = [
  {
    id: 1,
    title: "Паста Карбонара",
    description:
      "Классическое итальянское блюдо из пасты с яйцами, сыром, панчеттой и перцем.",
    image:
      "https://plus.unsplash.com/premium_photo-1664472682525-0c0b50534850?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "200 г пасты",
      "100 г бекона",
      "2 яйца",
      "50 г сыра пармезан",
      "Соль и перец по вкусу",
    ],
    steps: [
      "Отварите пасту до готовности.",
      "Обжарьте бекон до хрустящей корочки.",
      "Смешайте яйца и тертый пармезан.",
      "Соедините пасту с беконом и яично-сырной смесью.",
      "Приправьте солью и перцем по вкусу.",
    ],
  },
  {
    id: 2,
    title: "Куриный карри",
    description: "Ароматное блюдо с курицей, специями и кокосовым молоком.",
    image:
      "https://images.unsplash.com/photo-1657186394392-ea2ec3b63897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1cnJ5fGVufDB8fDB8fHww",
    ingredients: ["Курица", "Кокосовое молоко", "Карри", "Лук", "Чеснок"],
    steps: [
      "Обжарьте курицу с луком и чесноком.",
      "Добавьте специи и кокосовое молоко.",
      "Тушите до готовности.",
    ],
  },
  {
    id: 3,
    title: "Говяжьи тако",
    description:
      "Мягкие или хрустящие тортильи с приправленной говядиной и любимыми начинками.",
    image:
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Говядина", "Тортилья", "Лук", "Помидоры", "Сыр"],
    steps: [
      "Обжарьте говядину со специями.",
      "Подавайте в тортилье с овощами и сыром.",
    ],
  },
  {
    id: 4,
    title: "Салат Цезарь",
    description: "Классический салат с курицей, сухариками и сыром пармезан.",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "Курица",
      "Салат романо",
      "Сухарики",
      "Сыр пармезан",
      "Соус Цезарь",
    ],
    steps: [
      "Обжарьте курицу и нарежьте ломтиками.",
      "Смешайте с салатом романо и сухариками.",
      "Добавьте тертый пармезан и полейте соусом Цезарь.",
    ],
  },
  {
    id: 5,
    title: "Суп из тыквы",
    description: "Кремовый суп из тыквы с нотками имбиря и кокосового молока.",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Тыква", "Кокосовое молоко", "Имбирь", "Лук", "Соль"],
    steps: [
      "Обжарьте лук с имбирем.",
      "Добавьте тыкву и тушите до мягкости.",
      "Влейте кокосовое молоко и пюрируйте блендером.",
      "Приправьте по вкусу.",
    ],
  },
];

export default recipes;
