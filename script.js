// 1. Определяем данные (пока прямо в коде)
var tabledata = [
    {id:1, name:"Оли Боб", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984"},
    {id:2, name:"Мэри Мэй", progress:22, gender:"female", rating:2, col:"blue", dob:"14/05/1982"},
    {id:3, name:"Кристин Лобовски", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982"},
    {id:4, name:"Брендон Филлипс", progress:100, gender:"male", rating:3, col:"orange", dob:"01/08/1980"},
    {id:5, name:"Маргарет Мармаджук", progress:16, gender:"female", rating:2, col:"yellow", dob:"31/01/1999"},
    {id:6, name:"Фрэнк Харборс", progress:38, gender:"male", rating:1, col:"red", dob:"12/05/1966"},
];

// 2. Инициализируем таблицу
var table = new Tabulator("#example-table", {
    data: tabledata,           // данные
    layout: "fitColumns",      // колонки растягиваются по ширине
    responsiveLayout: "hide",  // скрывать колонки, которые не помещаются
    pagination: "local",       // пагинация на стороне клиента
    paginationSize: 5,         // строк на странице
    movableColumns: true,      // разрешить перетаскивание колонок
    initialSort: [             // начальная сортировка
        {column: "name", dir: "asc"},
    ],
    columns: [                 // описание колонок
        {title: "Имя", field: "name", editor: "input"},
        {title: "Прогресс", field: "progress", hozAlign: "left", formatter: "progress", editor: true},
        {title: "Пол", field: "gender", width: 95, editor: "list", editorParams: {values: ["male", "female"]}},
        {title: "Рейтинг", field: "rating", formatter: "star", hozAlign: "center", width: 100},
        {title: "Цвет", field: "col", width: 130},
        {title: "Дата рождения", field: "dob", width: 130, sorter: "date", hozAlign: "center"},
    ],
});