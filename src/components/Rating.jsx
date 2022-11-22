import redstar from '../assets/redstar.svg'
import graystar from '../assets/graystar.svg'

const Rating = ({ score }) => {
    const rating = [] // création du tableau rating
    let result

    for (let i = 0; i < score; i++) { // on intègre les étoiles rouges dans le tableau en fonction de la note du logement
        rating.push(<img src={redstar} alt='full star' className='stars' key={rating.toString([i])}/>)
    }

    if (score < 5 ) { // on vérifie si la note est inférieure à 5
        result = 5 - score
    }

    for (let i = 0; i < result; i++) { // si score < 5, on intègre les étoiles grises
        rating.push(<img src={graystar} alt='empty star' className='stars' key={rating.toString([i])} />)
    }

    return (
        <div className='housing__infos__rating'>{rating}</div>
    )
}

export default Rating
