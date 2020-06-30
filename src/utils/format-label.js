export default function formatLabel(label = '') {
  return (
    label.charAt(0).toUpperCase() + label.slice(1).replace(/([A-Z])/g, ' $1')
  );
}
