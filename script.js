
const form = document.getElementById("areaForm");
const shapeSelect = document.getElementById("shape");
const radiusGroup = document.getElementById("radiusGroup");
const rectangleGroup = document.getElementById("rectangleGroup");
const radiusInput = document.getElementById("radius");
const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");
const result = document.getElementById("result");

function updateShapeFields() {
  const isCircle = shapeSelect.value === "circle";

  radiusGroup.hidden = !isCircle;
  rectangleGroup.hidden = isCircle;

  radiusInput.disabled = !isCircle;
  radiusInput.required = isCircle;

  lengthInput.disabled = isCircle;
  widthInput.disabled = isCircle;
  lengthInput.required = !isCircle;
  widthInput.required = !isCircle;

  result.innerHTML =
    '<span class="muted">YOUR RESULT</span>' +
    '<p>Enter dimensions to calculate the area.</p>';
}

shapeSelect.addEventListener("change", updateShapeFields);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const shape = shapeSelect.value;
  const color = document.getElementById("color").value.trim();

  if (!color) {
    result.textContent = "Please enter a shape color.";
    return;
  }

  let area;
  let description;

  if (shape === "circle") {
    const radius = Number(radiusInput.value);

    if (!Number.isFinite(radius) || radius <= 0) {
      result.textContent = "Radius must be a positive number.";
      return;
    }

    area = Math.PI * radius * radius;
    description = "Circle";
  } else {
    const length = Number(lengthInput.value);
    const width = Number(widthInput.value);

    if (
      !Number.isFinite(length) ||
      !Number.isFinite(width) ||
      length <= 0 ||
      width <= 0
    ) {
      result.textContent =
        "Length and width must be positive numbers.";
      return;
    }

    area = length * width;
    description = "Rectangle";
  }

  if (!Number.isFinite(area)) {
    result.textContent =
      "The result is too large to calculate.";
    return;
  }

  result.replaceChildren();

  const heading = document.createElement("span");
  heading.className = "muted";
  heading.textContent = "CALCULATED AREA";

  const value = document.createElement("p");
  value.className = "result-value";
  value.textContent = area.toFixed(2);

  const details = document.createElement("p");
  details.textContent = `${description} · ${color}`;

  result.append(heading, value, details);
});

updateShapeFields();
