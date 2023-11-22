export const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img className="book-image" src={book.imageURL} alt={book.title} />

            <div className="book-card-body">
                <div className="book-title">
                    {book.title}
                </div>
                <div className="book-author">
                    {book.author}
                </div>
            </div>

            <div>
                <div className="book-price">
                    {book.price}
                </div>
                <button className="book-to-cart btn ">
                    {"Добавить в корзину"}
                </button>

            </div>
        </div>
    );
}
