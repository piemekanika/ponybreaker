import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, min } from 'vee-validate/dist/rules'

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});
extend('required', required);
extend('min', min);
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
