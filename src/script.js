var radios = document.querySelectorAll("input[type=radio]");

radios.forEach((radio) =>
  radio.addEventListener("change", () => changeCSSProperty(radio))
);

function changeCSSProperty(event) {
  let propertyChange = document.getElementById("flex-container");
  let cssCode = document.getElementById("flex-css");
  propertyChange.style[event.name] = event.value;
  const styles = window.getComputedStyle(propertyChange, null);

  let displayValue = styles.getPropertyValue("display");
  let flexWrapValue = styles.getPropertyValue("flex-wrap");
  let justifyContent = styles.getPropertyValue("justify-content");
  let alignContent = styles.getPropertyValue("align-content");
  let alignItems = styles.getPropertyValue("align-items");

  let newCSSCode =
    "{ <br><br>" +
    "\t" +
    "display:" +
    displayValue +
    ";<br>" +
    "\t" +
    "flex-wrap:" +
    flexWrapValue +
    ";<br>" +
    "\t" +
    "justify-content:" +
    justifyContent +
    ";<br>" +
    "\t" +
    "align-items:" +
    alignContent +
    ";<br>" +
    "\t" +
    "align-content:" +
    alignItems +
    ";<br>" +
    "<br>}";
  console.log(newCSSCode);
  cssCode.innerHTML = newCSSCode;
}
