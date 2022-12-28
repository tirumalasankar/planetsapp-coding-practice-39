// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  console.log(planetDetails)

  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={name} className="planet-image" />
      <h1 className="planet-name-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
