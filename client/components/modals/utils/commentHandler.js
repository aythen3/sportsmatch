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
export const formatDateDifference = (date) => {
  const ahora = new Date()
  const fecha = new Date(date) 
  const milisegundosDiferencia = ahora - fecha
  const segundosDiferencia = Math.floor(milisegundosDiferencia / 1000)
  const minutosDiferencia = Math.floor(segundosDiferencia / 60)
  const horasDiferencia = Math.floor(minutosDiferencia / 60)


  

  if (horasDiferencia < 24) {
    if(horasDiferencia < 0) {
      return 'Hace 1 segundo'
    }
    if (horasDiferencia === 0) {
      if(minutosDiferencia === 0) {
        return `Hace ${segundosDiferencia} segundos`
      }
      return `Hace ${minutosDiferencia} minuto${minutosDiferencia === 1 ? '' : 's'}`
    } else {
      return `Hace ${horasDiferencia} hora${horasDiferencia === 1 ? '' : 's'}`
    }
  } else {
    const diasDiferencia = Math.floor(horasDiferencia / 24)
    return `Hace ${diasDiferencia} día${diasDiferencia === 1 ? '' : 's'}`
  }
}
