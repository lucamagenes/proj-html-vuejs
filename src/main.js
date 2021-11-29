import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faInstagram, faLinkedinIn, faFacebookF, faComment, faLongArrowAltUp, faLongArrowAltRight, faLongArrowAltLeft, faPlay, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
