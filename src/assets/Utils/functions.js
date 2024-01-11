import { accionGetForFillter } from '../../services/API-marvel'

export const handelOcultar = (drop, setDrop, id) => {
  if (drop === true) {
    document.querySelector(`#drop-${id}`).classList.remove('hidden')
    document.querySelector(`#drop-${id}`).classList.add('inline-flex')
    setDrop(!drop)
  } else {
    document.querySelector(`#drop-${id}`).classList.remove('inline-flex')
    document.querySelector(`#drop-${id}`).classList.add('hidden')
    setDrop(!drop)
  }
}

export const buscarComic = async (total, search) => {
  if (search === '') {
    return null
  }

  const x = Math.round(total / 100)
  let i = 0
  do {
    i++

    const res = await funcionObtener(i)
    const resultado = funccionFiltrar(res, search)
    console.log(resultado)
    if (resultado.length >= 1) {
      return resultado
    }
  } while (i <= x)
  return null
}

export const funccionFiltrar = (filtrar, parametro) => {
  return filtrar.filter(
    (item) => item.name.toLowerCase() === parametro.toLowerCase()
  )
}

export const funcionObtener = (i) => {
  return accionGetForFillter(i)
    .then((res) => res.data.data.results)
    .catch((err) => console.log(err))
}
