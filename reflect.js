/**
 * snippet() create node copy for transformation
 *
 * @param {String} selector
 * @param {function} transform
 */
function snippet(selector, transform) {
  var selection = document.querySelector(selector).cloneNode(true);
  return function(subject) {
    var reflection = selection.cloneNode(true);
    var render = function() {
      return transform.call(reflection, subject);
    };
    subject.constructor.observe(subject, render); // no go.
    return render();
  }
}
 
/**
 * template() bind transformer to a node, does not copy node.
 */
function template(selector, transform) {
  var selection = document.querySelector(selector);
  return function(subject) {
    return transform.call(selection, subject);
  };
}
