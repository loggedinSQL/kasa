import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../layout/Header'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import Host from '../components/Host'
import Rating from '../components/Rating'
import Dropdown from '../components/DropdownHsg'
import Checklist from '../components/Checklist'
import Footer from '../layout/Footer'

import housings from '../datas/housings.json'
import '../css/style.css'

const Housing = () => {
    const { id } = useParams()
    const [housing, setHousing] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const housing = housings.find(item => item.id === id)
        setHousing(housing)
        setIsLoaded(true)
    }, [id])

    if (isLoaded === true) {
        return (
            <div className="container container--hsg">
                <Header />
                <main>
                    <Carousel pictures={housing.pictures} />
                    <section className="housing">
                        <div className='housing__infos'>
                            <div className="housing__infos__bloc">
                                <h1 className="housing__infos__title">{housing.title}</h1>
                                <p className="housing__infos__location">{housing.location}</p>
                                <Tags elements={housing.tags} />
                            </div>
                            <div className="housing__infos__bloc housing__infos__bloc--hsg">
                                <Host host={housing.host} />
                                <Rating score={housing.rating} />
                            </div>
                        </div>
                        <div className="housing__dropdowns--hsg">
                            <Dropdown
                                title="Description"
                                content={housing.description}
                            />
                            <Dropdown
                                title="Equipements"
                                content={<Checklist elements={housing.equipments} />}
                            />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
} 

export default Housing
