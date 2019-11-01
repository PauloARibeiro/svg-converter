const converToSvg = (image, attr) => {
  image.setAttribute('src', attr)
  const imgID = image.getAttribute('id')
  const imgClass = image.getAttribute('class')
  const imgURL = image.getAttribute('src')

  fetch(imgURL)
    .then(res => res.text())
    .then(data => {
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(data, 'text/html')
      const svg = xmlDoc.querySelector('svg')

      if (typeof imgID !== 'undefined' || imgID !== null) {
        svg.setAttribute('id', imgID)
      }

      if (typeof imgClass !== 'undefined') {
        svg.setAttribute('class', imgClass)
      }

      svg.removeAttribute('xmlns:a')

      image.parentNode.replaceChild(svg, image)
    })
}
