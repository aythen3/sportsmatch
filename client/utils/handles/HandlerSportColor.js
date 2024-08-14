export const setColor = (sport) => {
  //console.log('sport', sport)
  let color

  switch (sport) {
    case null:
      color = '#E1451E'
      break
    case 'Fútbol':
      color = '#00FF18'
      break
    case 'Fútbol Sala':
      color = '#0062FF'
      break
    case 'Voley':
      color = '#A8154A'
      break
    case 'Handball':
      color = '#6A1C4F'
      break
    case 'Baloncesto':
      color = '#E1451E'
      break
    case 'Hockey':
      color = '#E1AA1E'
      break
    default:
      color = '#E1451E'
  }

  return color
}
