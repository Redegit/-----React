export class Person {

    constructor(name, birth_year, death_year, img_url, university, city) {
        this.name = name;
        this.birth_year = birth_year;
        this.death_year = death_year;
        this.img_url = img_url;
        this.university = university;
        this.city = city;
    }
}

export const personList = [
    new Person('Исаак Ньютон', 1642, 1727, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/1024px-GodfreyKneller-IsaacNewton-1689.jpg', 'Кембриджский университет', 'Линкольншир, Англия'),
    new Person('Альберт Эйнштейн', 1879, 1955, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1024px-Albert_Einstein_Head.jpg', 'Университет Цюриха', 'Ульм, Германия'),
    new Person('Джеймс Максвелл', 1831, 1879, 'https://biblioclub.ru/services/fks.php?fks_action=get_file&fks_id=31766716&fks_flag=2', 'Университет Эдинбурга', 'Эдинбург, Шотландия'),
    new Person('Луи Пастер', 1822, 1895, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Louis_Pasteur_%281822_-_1895%29%2C_microbiologist_and_chemist_Wellcome_V0026980.jpg/1024px-Louis_Pasteur_%281822_-_1895%29%2C_microbiologist_and_chemist_Wellcome_V0026980.jpg', 'Екатеринбургский университет', 'Доломье, Франция'),
    new Person('Чарльз Дарвин', 1809, 1882, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Darwin_restored2.jpg/1024px-Darwin_restored2.jpg', 'Университет Кембриджа', 'Шропшир, Англия'),
    new Person('Мария Кюри', 1867, 1934, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1024px-Marie_Curie_c._1920s.jpg', 'Университет Сорбонны', 'Варшава, Польша'),
    new Person('Никола Тесла', 1856, 1943, 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg', 'Технический университет Граца', 'Смилан, Хорватия'),
    new Person('Нильс Бор', 1885, 1962, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/1024px-Niels_Bohr.jpg', 'Университет Копенгагена', 'Копенгаген, Дания'),
    new Person('Галилео Галилей', 1564, 1642, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/1024px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg', 'Университет Падуи', 'Пиза, Италия'),
]