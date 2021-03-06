import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'

import emmet from '@emmetio/codemirror-plugin'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/anyword-hint'

import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/foldgutter.css'

import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/markdown-fold'
import 'codemirror/addon/fold/xml-fold'

import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'

import 'codemirror/addon/display/placeholder'

// search
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/search/jump-to-line'
import 'codemirror/addon/dialog/dialog'
import 'codemirror/addon/dialog/dialog.css'

// Themes
// -------------------
import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/material.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/oceanic-next.css'
import 'codemirror/theme/dracula.css'

import 'codemirror/theme/solarized.css'
import 'codemirror/theme/mdn-like.css'

// Extra
import '../assets/scss/extra/_palenight.scss'

// Languages
// -------------------

// html
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/pug/pug'
import 'codemirror/mode/markdown/markdown'

// css
import 'codemirror/mode/css/css'
import 'codemirror/mode/stylus/stylus'
import 'codemirror/mode/sass/sass'

// js
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/coffeescript/coffeescript'

// Plugins
emmet(VueCodemirror.CodeMirror)

Vue.use(VueCodemirror)
