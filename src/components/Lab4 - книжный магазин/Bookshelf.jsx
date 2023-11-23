import { BookCard } from "./BookCard";
import { Container } from "./Container";

export const Bookshelf = ({ books, title }) => {


    return (
        <Container>
            <h2 className="bookshelf-title text-center mb-4">{title}</h2>
            <div className="bookshelf-body" style={{ "--n-books": books.length }}>
                {!books.empty &&
                    books.map((book, index) => {
                        return <BookCard key={index} book={book} />
                    })
                }
            </div>
        </Container>
    );
}
