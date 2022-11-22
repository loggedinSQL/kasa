import chevron from '../assets/vector.svg'

const Carousel = (props) => {
    const pictures = props.pictures
    let itCount = 1
    let lastPosition = 0
    let currentPosition = 0
    let currentImg = pictures[currentPosition]
    const showControls = pictures.length > 1 ? true : false

    const clickToSwipe = (direction) => {
        lastPosition = currentPosition

        if (direction === 'previous') {
            if (currentPosition === 0) {
                currentPosition = pictures.length
            }
            currentPosition -= 1
        } else {
            if (currentPosition === pictures.length - 1) {
                currentPosition = -1
            }
            currentPosition += 1
        }

        document
            .getElementsByClassName(lastPosition)[0]
            .classList.remove('carousel__img__content--visible')
        document
            .getElementsByClassName(lastPosition)[0]
            .classList.add('carousel__img__content--invisible')

        document
            .getElementsByClassName(currentPosition)[0]
            .classList.remove('carousel__img__content--invisible')
        document
            .getElementsByClassName(currentPosition)[0]
            .classList.add('carousel__img__content--visible')

        document
            .getElementsByClassName('number_control')[0]
            .innerHTML = currentPosition + 1 + ' / ' + pictures.length
    }

    return (
        <div className="carousel">
            <div
                className={
                    showControls ? 'carousel__ctrl' : 'carousel__ctrl--none'
                }
            >
                <img
                    src={chevron}
                    alt="previous"
                    className="carousel__ctrl__btn carousel__ctrl__btn--previous"
                    onClick={() => {
                        clickToSwipe('previous')
                    }}
                />
                <img
                    src={chevron}
                    alt="next"
                    className="carousel__ctrl__btn carousel__ctrl__btn--next"
                    onClick={() => {
                        clickToSwipe('next')
                    }}
                />
            </div>
            {pictures.map((element, index) => (
                <img
                    key={index}
                    src={element}
                    alt="housing"
                    className={
                        currentImg === element
                            ? index +
                              ' carousel__img__content carousel__img__content--visible'
                            : index +
                              ' carousel__img__content carousel__img__content--invisible'
                    }
                />
            ))}
            <span className={ 'number_control ' + (showControls ? 'carousel__img__number' : 'carousel__img__number--none') }>
                {itCount} / {pictures.length}
            </span>
        </div>
    )
}

export default Carousel
