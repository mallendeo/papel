export const pug =
`svg(xmlns='http://www.w3.org/2000/svg', viewbox='0 0 129 148')
  g(fill='none', fill-rule='evenodd', stroke='#009EFF', transform='translate(-2 -2)')
    rect(width='95', height='127', x='18.5', y='12.5', fill='#FFF', rx='8', transform='rotate(-18 66 76)')
    rect(width='95', height='127', x='26.9', y='12.2', fill='#FFF', rx='8', transform='rotate(-9 74.4 75.7)')
    path(d='M66.919842,99.1848158 C66.919842,100.240821 66.5718455,101.128812 65.875842,101.848816 C65.1798385,102.568819 64.2798475,102.928816 63.175842,102.928816 C62.1198367,102.928816 61.2318456,102.568819 60.511842,101.848816 C59.7918384,101.128812 59.431842,100.240821 59.431842,99.1848158 L59.431842,50.4408158 C59.431842,49.3368103 59.7918384,48.4368193 60.511842,47.7408158 C61.2318456,47.0448123 62.1198367,46.6968158 63.175842,46.6968158 L77.575842,46.6968158 C81.1278597,46.6968158 84.3078279,47.4888079 87.115842,49.0728158 C89.923856,50.6568237 92.1078342,52.8648017 93.667842,55.6968158 C95.2278498,58.52883 96.007842,61.7447978 96.007842,65.3448158 C96.007842,68.8488333 95.2278498,71.9688021 93.667842,74.7048158 C92.1078342,77.4408295 89.923856,79.5768081 87.115842,81.1128158 C84.3078279,82.6488235 81.1278597,83.4168158 77.575842,83.4168158 L66.919842,83.4168158 L66.919842,99.1848158 Z M77.575842,76.5048158 C80.8398583,76.5048158 83.5278314,75.4608263 85.639842,73.3728158 C87.7518525,71.2848054 88.807842,68.6088321 88.807842,65.3448158 C88.807842,61.9367988 87.7518525,59.1288269 85.639842,56.9208158 C83.5278314,54.7128048 80.8398583,53.6088158 77.575842,53.6088158 L66.919842,53.6088158 L66.919842,76.5048158 L77.575842,76.5048158 Z', transform='rotate(-9 77.7 74.8)')
`

export const styl =
`html, body {
  margin: 0;
  height: 100vh;
  display: grid;
}

rLen = 430
pLen = 165
delay = .5s

easeInOutCubic = cubic-bezier(0.645, 0.045, 0.355, 1)

svg {
  margin: auto;
  height: 5.5rem;
  stroke-width: 2px;

  rect {
    stroke-dasharray: rLen;
    animation: rect .75s delay easeInOutCubic both;
  }

  path {
    stroke-dasharray: pLen;
    animation: path .75s delay easeInOutCubic both;
  }

  rect:first-of-type {
    animation-delay: .7s;
  }
}

@keyframes rect {
  from { stroke-dashoffset: rLen; }
  to { stroke-dashoffset: 0; }
}

@keyframes path {
  from { stroke-dashoffset: pLen; }
  to { stroke-dashoffset: 0; }
}
`

export const babel = ``

export const contract = `class SmartContract {
  init () {

  }

  constructor () {

  }

  withdraw () {

  }
}

export default SmartContract
`
