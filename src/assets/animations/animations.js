import { obtenerNext } from '../../reducer/personajesReducer'
import { efectToggableNav, efectToggableNavRemove } from './efects'

export const SelecNavtedPing = (item) => {
  const pings = document.querySelectorAll('.ping')
  console.log(pings, `ping-${item}`)
  pings.forEach((ping) =>
    ping.id === `ping-${item}`
      ? ping.classList.remove('hidden')
      : ping.classList.add('hidden')
  )
}
export const handelPreview = (
  puntero,
  indice,
  setPuntero,
  setIndice,
  dispatch
) => {
  const btnNext = document.querySelector('#next')
  // item anterior
  if (indice < 5) {
    return stopNext(false)
  }
  if (window.innerWidth <= 640) {
    dispatch(obtenerNext(puntero - 1))
  }
  stopRemove(btnNext)
  setPuntero(puntero - 1)
  setIndice(indice - 1)
}
export const handelSetPuntero = (
  i,
  indice,
  setPuntero,
  setIndice,
  dispatch,
  elementos
) => {
  const items = document.querySelectorAll('.item-Nav')
  dispatch(obtenerNext(i))
  items.forEach((item) => {
    if (item.id === `element-${i}`) {
      efectToggableNav(item)
    } else {
      efectToggableNavRemove(item)
    }
  })
  if (indice >= 4 && indice <= elementos.length - 2) {
    // cambia el item y puntero directamente
    // mientras entre en el campo de vision
    setPuntero(i - 1)
    setIndice(i + 3)
  }
}

export const handelNext = (
  puntero,
  indice,
  setPuntero,
  setIndice,
  dispatch,
  elementos
) => {
  const btnPrev = document.querySelector('#prev')
  // siguiente item
  if (indice > elementos.length - 2) {
    return stopNext(true)
  }
  setPuntero(puntero + 1)
  setIndice(indice + 1)
  stopRemove(btnPrev)
  if (window.innerWidth <= 640 && puntero > 0) {
    dispatch(obtenerNext(puntero + 1))
  }
}
const stopRemove = (el) => {
  if (el.classList.contains('cursor-not-allowed')) {
    el.classList.remove('cursor-not-allowed')
  }
}
const stopAdd = (el) => {
  if (!el.classList.contains('cursor-not-allowed')) {
    el.classList.add('cursor-not-allowed')
  }
}
const stopNext = (parm) => {
  const btnPrev = document.querySelector('#prev')
  const btnNext = document.querySelector('#next')
  if (parm === true) {
    return stopRemove(btnPrev).stopAdd(btnNext)
  }
  stopRemove(btnNext)
  stopAdd(btnPrev)
}
