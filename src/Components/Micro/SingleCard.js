import './SingleCard.css'
export default function SingleCard({ card, HandleChoice, flipped, disabled }) {

    const HandleClick = () => {

        if (!disabled) HandleChoice(card)
    }
    return (
        <div className="card-content"  >
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt={card.id} />
                <img onClick={HandleClick} className="back" src="/img/cover.png" alt='card-Back' />
            </div>
        </div >
    )
}