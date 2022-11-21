import { Link } from 'react-router-dom'
import housings from '../datas/housings.json'

const Gallery = () => {
    return (
        <section className="gallery">
            {housings.map((housing) => (
                <Link to={'/housings/' + housing.id} key={housing.id} className="gallery__thumbs">
                    <img src={housing.cover} alt="housing cover" className="gallery__thumbs__img" />
                    <p className="gallery__thumbs__housingName">{housing.title}</p>
                </Link>
            ))}
        </section>
    )
}

export default Gallery
