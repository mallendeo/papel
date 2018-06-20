import * as types from './mutation-types'
import * as ipfs from '../lib/ipfs'
import * as nebpay from '../lib/nebpay'
import * as db from '../lib/db'
import omit from 'lodash/omit'
import flatMap from 'lodash/flatMap'

export const state = () => ({
  currTxHash: null
})

export const mutations = {
  [types.SET_CURR_TXHASH] (state, hash) {
    state.currTxHash = hash
  }
}

const pickConfig = editors => Object.keys(editors)
  .reduce((obj, type) => {
    obj[type] = omit(editors[type], 'showCompiled', 'error', 'prepros')
    return obj
  }, {})

export const actions = {
  async loadCode (slug) {
    // get hashes from nebulas
    //
  },

  saveLocal ({ rootState }, slug) {
    const { code, compiled, editors } = rootState.editor
    db.set(`sheet:${slug}`, {
      code, compiled, editors: pickConfig(editors)
    })
  },

  async saveIpfs ({ rootState }, slug) {
    const { editors, code, compiled } = rootState.editor
    const files = ['html', 'css', 'js'].map(type => {
      const filename = type === 'html' ? 'index' : 'main'

      const { lang, prepros } = editors[type]
      const { ext } = prepros[lang]

      return [
        { path: `/dist/${filename}.${type}`, content: new Buffer(compiled[type]) },
        { path: `/src/${filename}.${ext}`, content: new Buffer(code[type]) }
      ]
    })

    const config = JSON.stringify(pickConfig(editors))
    const ipfsOpts = { wrapWithDirectory: true, pin: true }

    const saved = await ipfs.saveFiles([
      ...flatMap(files),
      { path: '/config.json', content: new Buffer(config) }
    ], ipfsOpts)

    console.log({saved})
  },

  loadFromLocal ({ dispatch }, slug) {
    const saved = db.get(`sheet:${slug}`)
    if (!saved) return

    const { compiled, code, editors } = saved
    if (!code) return

    Object.keys(code).forEach(type => {
      const srcCode = { type, code: code[type] }
      const compiledCode = { type, output: compiled[type] }
      dispatch('editor/updateCode', srcCode, { root: true })
      dispatch('editor/setOutput', { ...compiledCode, loaded: true }, { root: true })
      dispatch('editor/putOptions', editors, { root: true })
    })
  },

  async saveCode ({ rootState }, compiled) {
    const { editor } = rootState
    const { html, css, js } = compiled
      ? editor.compiled
      : editor.code

    console.log(html, css, js)
    // upload to ipfs

    // save on nebulas
    const args = [null, {
      title: 'Example dapp',
      description: 'Some example dapp',
      src: {
        html: {
          code: '<h1>test</h1>'
        },
        css: {
          type: 'stylus',
          code: 'h1 { color: red; }'
        }
      }
    }]

    try {
      const tx = nebpay.callFunction({ fn: 'saveSheet', args })
      console.info({ tx })
      const saved = await tx
      console.info({ saved })
    } catch (e) {
      console.error('ERROR', e)
    }

  }
}

