import { obtenerNext } from '../../reducer/personajesReducer'

export const efectToggableNav = (item) => {
  item.classList.add('!text-white')
  item.classList.add('bg-red-600')
  item.classList.add('border')
  item.classList.add('border-r-0')
  item.classList.add('border-red-600')
  return item
}
export const efectToggableNavRemove = (item) => {
  item.classList.remove('!text-white')
  item.classList.remove('bg-red-600')
  item.classList.remove('border')
  item.classList.remove('border-r-0')
  item.classList.remove('border-red-600')
  return item
}

let identificador = 1
const setIdentificador = (id) => (identificador = id)
export const mover = (dir, dispatch) => {
  const sliders = document.querySelectorAll('.item-Nav')
  // const actionMenos = {type:'MENOS'}
  if (dir === true) {
    sliders.forEach((s) => {
      const devolver = -2.5 * identificador
      if (identificador === 0) {
        console.log(devolver + 2.5)
      } else {
        s.style.transform = `translateX(${devolver + 2.5}rem)`
      }
    })
    if (identificador !== 0) {
      //    identificador = reducer(identificador,actionMenos)
      setIdentificador(identificador - 1)
    }
  } else {
    if (identificador !== 88) {
      setIdentificador(identificador + 1)
    }
    sliders.forEach((s) => {
      s.style.transform = `translateX(-${1.5 * identificador}rem)`
    })
  }
  if (identificador > 0 && identificador < 78) {
    dispatch(obtenerNext(identificador))

    sliders.forEach((item) => {
      if (item.id === `element-${identificador}`) {
        efectToggableNav(item)
      } else {
        efectToggableNavRemove(item)
      }
    })
  }
}
export const efectDarkMode = () => {
  // animacion del boton para cambiar modo oscuro
  const rootBase = document.querySelector('#root')
  const Sun = document.querySelector('#Layer_Sun')
  const Moon = document.querySelector('#Layer_Moon')
  if (!rootBase.classList.contains('dark')) {
    rootBase.classList.add('dark')
    Sun.classList.replace('animate-jump-in', 'animate-jump-out')
    setTimeout(() => {
      Sun.classList.add('hidden')
      Moon.classList.remove('hidden')
      Moon.classList.replace('animate-jump-out', 'animate-jump-in')
    }, 200)
  } else {
    rootBase.classList.remove('dark')
    Moon.classList.replace('animate-jump-in', 'animate-jump-out')
    setTimeout(() => {
      Moon.classList.add('hidden')
      Sun.classList.remove('hidden')
      Sun.classList.replace('animate-jump-out', 'animate-jump-in')
    }, 200)
  }
}
