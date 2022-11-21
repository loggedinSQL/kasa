import redstar from '../assets/redstar.svg'
import graystar from '../assets/graystar.svg'

const Rating = ({ score }) => {
    const rating = []
    let result

    for (let i = 0; i < score; i++) {
        rating.push(<img src={redstar} alt='full star' className='stars' key={rating.toString([i])}/>)
    }

    if (score < 5 ) {
        result = 5 - score
    }

    for (let i = 0; i < result; i++) {
        rating.push(<img src={graystar} alt='empty star' className='stars' key={rating.toString([i])} />)
    }

    return (
        <div className='housing__infos__rating'>{rating}</div>
    )
}

export default Rating
