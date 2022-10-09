const avatar = document.querySelector('#avatar')
const info = document.querySelector('#info')
const qrcode = document.querySelector('#qrcode')
const contatos = document.querySelector('#contatos')

const node = document.createElement('div')
const stickyHeaderTemplate = `
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
node.classList.add('stickyHeader')
node.innerHTML = stickyHeaderTemplate
document.querySelector('.background').appendChild(node)

function stickyHeaderReset() {
  node.classList.remove('hide')
  node.classList.remove('show')
}

function stickyHeaderApply() {
  let sticky = contatos.offsetTop
  if (window.pageYOffset > sticky) {
    node.classList.add('show')
    node.classList.remove('hide')
  }
  else if (node.classList.contains('show')) {
    node.classList.remove('show')
    node.classList.add('hide')
  }
}

window.document.addEventListener('scroll', stickyHeaderApply)
window.document.addEventListener('resize', stickyHeaderReset)
