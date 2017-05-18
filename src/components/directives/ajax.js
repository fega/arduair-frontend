import Vue from 'vue'
import axios from 'axios'

export default Vue.directive('ajax', {
  bind (el, binding, vnode) {
    const onSubmit = (e) => {
      let elements
      let data
      let okCb = binding.value.onOk // axios status OK callback
      let errCb = binding.value.onError // axios status err callback
      let route = binding.value.route

      /**
       * Get form elements
       */
      e.preventDefault()
      elements = e.target.getElementsByTagName('input')

      /**
       * Create a object with name:value pairs
       */
      for (var entry of elements) {
        let name = entry.name
        let value = entry.value
        data[name] = value
      }

      /**
       * Send data
       */
      axios.post(route, data)
         .then(okCb)
         .catch(errCb)
    }
    el.addEventListener('submit', onSubmit)
  }
})
