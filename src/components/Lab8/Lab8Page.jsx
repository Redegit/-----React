import Accordion from "./Accordion/Accordion";
import Slider from "./Slider/Slider";
import Timer from "./Timer/Timer";
import "./lab8.scss"

const Lab8Page = () => {

    const slides = [
        { img: "image/Slider/0.jpg", title: "Duke Nukem 3D", description: "Посмотрим, как разработчики делают уровни интересными, с наглядной подачей информации и интересным игровым процессом.", link: "https://habr.com/ru/articles/778958/" },
        { img: "image/Slider/1.jpeg", title: "Merge Garden", description: "Как преодолеть спад после запуска.", link: "https://habr.com/ru/companies/otus/articles/779086/" },
        { img: "image/Slider/2.jpg", title: "Подбор менеджеров по продажам IT", description: "Большинство IT-компаний подходят к подбору менеджеров по продажам так же, как к подбору разработчиков.", link: "https://habr.com/ru/articles/779172/" },
        { img: "image/Slider/3.png", title: "Генерация SQL-запроса", description: "Как в РСХБ разработали средство генерации SQL-запроса для упрощения задач по тестированию.", link: "https://habr.com/ru/companies/rshb/articles/779150/" },
    ]

    const articles = [
        {
            img: "image/articles/0.png",
            title: "Идеальный REST клиент iOS",
            text: "В подавляющем большинстве современных мобильных приложений используется сетевой обмен данными. Обладая обширным опытом сетевого взаимодействия в крупных компаниях (банки, маркетплейсы итп), хотим поделиться опытом построения идеального с нашей точки зрения сетевого клиента для iOS.",
            link: "https://habr.com/ru/articles/779206/"
        },
        {
            img: "image/articles/1.png",
            title: "Relax, take IT easy: как вернуть спокойствие в работу. Три инструмента специально для технарей",
            text: "Как сделать так, чтобы энергии, спокойствия и счастья в работе было больше, даже если сейчас много усталости и хочется бросить все? И что может помочь бизнесу удерживать, развивать и вовлекать ИТ-специалистов?",
            link: "https://habr.com/ru/companies/bercut/articles/779196/"
        },
        {
            img: "image/articles/2.png",
            title: "Обзор параллельных режимов работы хэш-функций",
            text: "С каждым днем, по мере роста объема обрабатываемых данных, становится все более важным использование эффективных методов обработки. Особенно значимым является внедрение параллельных вычислительных архитектур для достижения высокой производительности. Однако многие стандартные способы хэширования неэффективны при параллельной обработке данных. В ответ на эту проблему разрабатываются новые методы хэширования, специально адаптированные для параллельных вычислений. В данном эссе рассмотрены различные способы параллельного хэширования, выявлены их преимущества и недостатки.",
            link: "https://habr.com/ru/articles/779192/"
        },
        {
            img: "image/articles/3.jpeg",
            title: "Польза создания однородных задач для параллельного вычисления",
            text: "Как правильно использовать возможности параллельного программирования? Зачем программистам математика и зачем знать алгоритмы? На примере небольшой задачи мы вместе ответим на эти вопросы. А так же хочу наглядно продемонстрировать преимущества создания однородных задач.",
            link: "https://habr.com/ru/articles/779188/"
        },
    ]


    return (
        <div className="lab8">
            <Slider slides={slides} />
            <Timer />
            <Accordion items={articles} />
        </div>
    );
}

export default Lab8Page;