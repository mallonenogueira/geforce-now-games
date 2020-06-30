export default function createDebounce() {
  let id = null;

  return (fn) => (wait) => {
    clearTimeout(id);

    if (wait > 0) {
      id = setTimeout(fn, wait);
    } else {
      fn();
    }
  };
}
