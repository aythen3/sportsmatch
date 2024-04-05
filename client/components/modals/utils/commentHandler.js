import {
  createComment,
  getCommentByPost
} from '../../../redux/actions/comments'

export const handleSubmit = async ({
  comment,
  user,
  postId,
  dispatch,
  setComment
}) => {
  const data = {
    content: comment,
    author: user.user.id,
    post: postId
  }
  const body = {
    id: postId,
    type: user.user.type
  }
  await dispatch(createComment(data))
  await setComment('')
  await dispatch(getCommentByPost(body))
}

// Handler de tiempo del post
export const formatDateDifference = (createdAt) => {
  const fechaCreacion = new Date(createdAt) // Fecha de creación en UTC
  const fechaActual = new Date() // Fecha actual en la zona horaria local del dispositivo

  // Ajuste para la diferencia de zona horaria entre UTC y la zona horaria local
  const diferenciaHorasZonaHorariaLocal = fechaActual.getTimezoneOffset() / 60

  // Obtener la diferencia en milisegundos y ajustar por la diferencia de zona horaria
  const diferenciaMilisegundos =
    fechaActual.getTime() -
    fechaCreacion.getTime() +
    diferenciaHorasZonaHorariaLocal * 60 * 60 * 1000

  const diferenciaMinutos = Math.floor(diferenciaMilisegundos / (1000 * 60))

  const diferenciaHoras = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60))

  // Si la diferencia es menor a 24 horas, muestra la diferencia en horas
  if (diferenciaHoras < 24) {
    if (diferenciaHoras === 0) {
      return `Hace ${diferenciaMinutos} minuto${diferenciaMinutos === 1 ? '' : 's'}`
    } else {
      return `Hace ${diferenciaHoras} hora${diferenciaHoras === 1 ? '' : 's'}`
    }
  } else {
    // Si la diferencia es mayor o igual a 24 horas, muestra la diferencia en días
    const diferenciaDias = Math.floor(diferenciaHoras / 24)
    return `Hace ${diferenciaDias} día${diferenciaDias === 1 ? '' : 's'}`
  }
}
