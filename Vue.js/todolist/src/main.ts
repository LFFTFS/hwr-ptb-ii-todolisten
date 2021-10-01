
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboardCheck, faGripVertical, faInfo, faTrash, faPlus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Fontawesome
library.add(faClipboardCheck, faGripVertical, faInfo, faTrash, faPlus, faChevronUp, faChevronDown)

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(BootstrapVue3)
  .mount('#app')

