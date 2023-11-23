import { BookCarousel } from "./BookCarousel";
import { Bookshelf } from "./Bookshelf";
import './BookStore.scss'

export const BookStore = () => {

    return (
        <div className="container book-store mb-5">
            <h2 className="book-store-title text-center mt-5">Книжный магазин</h2>
            <BookCarousel slides={booksCarousel} title={"Новинки"} />
            <Bookshelf books={books1} title={"Популярное"} />
            <Bookshelf books={books2} title={"Топ продаж"} />
        </div>
    );
}

const books1 = [
    {
        title: "Гарри Поттер и узник Азкабана",
        author: "Джоан Роулинг",
        price: 540,
        imageURL: "https://s1.livelib.ru/boocover/1003317448/200x305/2954/boocover.jpg"
    },
    {
        title: "Зелёная миля",
        author: "Стивен Кинг",
        price: 420,
        imageURL: "https://s1.livelib.ru/boocover/1000966838/200x305/7df1/boocover.jpg"
    },
    {
        title: "Унесенные ветром",
        author: "Маргарет Митчелл",
        price: 365,
        imageURL: 'https://s1.livelib.ru/boocover/1003634473/200x305/3ca5/boocover.jpg'
    },

]

const books2 = [
    {
        title: "Возвращение государя",
        author: "Джон Р. Р. Толкиен",
        price: 345,
        imageURL: "https://s1.livelib.ru/boocover/1000453410/200x305/6118/boocover.jpg"
    },
    {
        title: "Шерлок Холмс (сборник)",
        author: "Артур Конан Дойл",
        price: 570,
        imageURL: "https://s1.livelib.ru/boocover/1003648088/200x305/261f/boocover.jpg"
    },
    {
        title: "Граф Монте-Кристо",
        author: "Александр Дюма",
        price: 440,
        imageURL: "https://s1.livelib.ru/boocover/1002217446/200x305/518c/boocover.jpg"
    },
    {
        title: "Буря мечей",
        author: "Джордж Мартин",
        price: 720,
        imageURL: "https://s1.livelib.ru/boocover/1000243672/200x305/6c2d/boocover.jpg"
    },
    {
        title: "Пустая могила",
        author: "Джонатан Страуд",
        price: 390,
        imageURL: "https://s1.livelib.ru/boocover/1002756364/200x305/df9a/boocover.jpg"
    },
    // {
    //     title: "",
    //     author: "",
    //     price: 540,
    //     imageURL: ""
    // },
]

const booksCarousel = [
    {
        books: [
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1002707756/200x305/b2cd/boocover.jpg"
            },
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1006074295/200x305/9dbb/boocover.jpg"
            },
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1008711337/200x305/261f/boocover.jpg"
            },
        ]
    },
    {
        books: [
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1001496707/200x305/a6a3/boocover.jpg"
            },
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1000494281/200x305/d677/boocover.jpg"
            },
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1008338995/200x305/b955/boocover.jpg"
            },
        ]
    },
    {
        books: [
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1005586864/200x305/ad09/boocover.jpg"
            },
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1005556180/200x305/434b/boocover.jpg"
            },
            {
                title: "",
                author: "",
                price: 540,
                imageURL: "https://s1.livelib.ru/boocover/1002225089/200x305/9aa4/boocover.jpg"
            },
        ]
    },
]