import { Carousel } from "react-bootstrap"

export const BookCarousel = ({ slides, title }) => {
    return (
        <div className="bookshelf glass-card slider">
            <h2 className="bookshelf-title text-center mb-4">{title}</h2>
            <Carousel>
                {slides && slides.map((slide, index) => {
                    return (
                        <Carousel.Item className="carousel-slide" key={index}>
                            <div className="carousel-slide-body">
                                {slide.books.map((book, index) => {
                                    return <img src={book.imageURL} key={index} />
                                })
                                }
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div >
    );
}
