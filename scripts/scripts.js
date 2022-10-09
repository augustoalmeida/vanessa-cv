const avatar = document.querySelector('#avatar')
const info = document.querySelector('#info')
const qrcode = document.querySelector('#qrcode')
const contatos = document.querySelector('#contatos')
const node = document.createElement('div')
const cloneHeader = `
<div class="background">
  <div class="avatar">
    ${avatar.innerHTML}
  </div>
  <div class="info">
    ${info.innerHTML}
  </div>
  <div class="qrcode">
    ${qrcode.innerHTML}
  </div>
</div>
`

const sticky = contatos.offsetTop

node.classList.add('cloneHeader', 'sticky')
node.innerHTML = cloneHeader
document.querySelector('.background').appendChild(node)

window.document.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky) {
    node.classList.add('show')
    node.classList.remove('hide')
  }
  else if (node.classList.contains('show')) {
    node.classList.remove('show')
    node.classList.add('hide')
  }
})
