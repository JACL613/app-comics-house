export const SelecNavtedPing = (item) => {
    const pings = document.querySelectorAll('.ping')
    console.log(pings,`ping-${item}`)
    pings.forEach(ping => ping.id === `ping-${item}` ? ping.classList.remove('hidden'):ping.classList.add('hidden'))
  }