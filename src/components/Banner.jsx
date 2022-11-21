const Banner = ({text, picture}) => {
    return (
        <div className="banner">
            <h1 className="banner__title">{text}</h1>
            <img src={picture} alt="banner" className="banner__img" />
        </div>
    )
}

export default Banner
