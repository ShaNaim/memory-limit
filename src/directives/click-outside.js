export default {
  beforeMount(el, binding) {
    el.__clickOutsideHandler__ = (event) => {
      if (
        el.previousElementSibling &&
        (el.previousElementSibling === event.target ||
          el.previousElementSibling.contains(event.target))
      ) {
        return
      }

      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    setTimeout(() => {
      document.addEventListener('click', el.__clickOutsideHandler__)
    }, 0)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__clickOutsideHandler__)
    delete el.__clickOutsideHandler__
  },
}
