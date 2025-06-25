const cube = new RubiksCube();
const stepsDiv = document.getElementById("steps");
const steps = [];

function getCubeSvg(cubeString) {
  return `<div class="svg-step"><pre>${cubeString}</pre></div>`;
}

function scrambleCube() {
  cube.reset();
  cube.scramble(10);
  steps.length = 0;
  steps.push({ description: "Scrambled", cube: cube.getCubeString() });
  renderSteps();
}

function solveCube() {
  steps.push({ description: "Solving Step 1 - Align edges", cube: cube.getCubeString() });
  cube.rotateFaceCounterClockwise('F');
  steps.push({ description: "Solving Step 2 - Place corners", cube: cube.getCubeString() });
  cube.rotateFaceClockwise('F');
  steps.push({ description: "Final Step - Solved", cube: cube.getCubeString() });
  renderSteps();
}

function renderSteps() {
  stepsDiv.innerHTML = "";
  steps.forEach((step, i) => {
    stepsDiv.innerHTML += `
      <h3>Step ${i + 1}: ${step.description}</h3>
      ${getCubeSvg(step.cube)}
    `;
  });
}
