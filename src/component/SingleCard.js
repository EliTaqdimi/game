import './SingleCard.css';

export default function SingleCard({card,handleChoice,flipped,disabled}) {

  const handleClick = () => {
    if(!disabled){
        handleChoice(card)
    }
}
  return (
  
    <div className='card' >
      <div className={flipped ? "flipped" : "s"}>
         <img className='front' src={card.src} alt='card front'/>
          <img className='back' src='image/cover.png' alt='card back' onClick={handleClick}/>
        </div>
    </div>
      
  )
}
