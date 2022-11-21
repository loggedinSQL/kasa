import '../css/style.css'
import BannerPage from '../assets/banner-home-page.jpg'

import Header from '../layout/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../layout/Footer'

const Home = () => {
    const text = 'Chez vous, partout et ailleurs'

    return (
        <div className="container">
            <Header />
            <main>
                <Banner picture={BannerPage} text={text} />
                <Gallery />
            </main>
            <Footer />
        </div>
    )
}

export default Home
