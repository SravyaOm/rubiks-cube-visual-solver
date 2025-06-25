# 🧩 Rubik's Cube Visual Solver

This is a simple yet functional **Rubik’s Cube solver simulation**, built in **object-oriented JavaScript** and rendered visually using a basic string view. It demonstrates fundamental programming and problem-solving skills, including:

- Manual cube manipulation
- Step-by-step solution visualization
- Object-oriented design
- Frontend integration using vanilla HTML + JS

> 🎯 Note: This solver is **not optimized** for shortest path — it is designed to showcase logical thinking and implementation, not speed or algorithmic optimization.

---

## 🚀 Live Demo

👉 **Try it here**:  
[https://sravyaom.github.io/rubiks-cube-visual-solver](https://sravyaom.github.io/rubiks-cube-visual-solver)

---

## 📁 Project Structure

rubiks-cube-visual-solver/
├── index.html # UI with Scramble & Solve buttons
├── rubiksCube.js # Cube logic and manual face rotation
├── solver.js # Simulated solver with steps
└── README.md # This documentation

yaml
Copy
Edit

---

## 🛠️ Features

- ✅ Object-oriented cube representation (`RubiksCube` class)
- 🔄 Manual face rotation (clockwise and counter-clockwise)
- 🎲 Random cube scrambling
- 🧠 Basic simulated solving (multi-step display)
- 🧾 Step-by-step visual tracking
- 🌐 Hosted via GitHub Pages

---

## 🧠 How It Works

- Each cube face is a 3x3 grid stored as an array of 9 elements
- `rotateFaceClockwise()` and `rotateFaceCounterClockwise()` manipulate sides
- A simple “solving” sequence is run after scrambling
- Steps are stored and rendered using a placeholder `getCubeSvg()`

---

## 📸 Preview

Step 1: Scrambled
[rrrrrrrrrgggggggggbbbbbbbbb...]

Step 2: Solving Step 1 - Align edges
[...]

Step 3: Final Step - Solved
[www...ggg...rrr...]

yaml
Copy
Edit

*Note: This is a simplified text-based display to demonstrate logical flow. It can be replaced with SVG rendering or canvas in the future.*

---

## ✅ To Run Locally

1. Download or clone the repository
2. Open `index.html` in any browser

---

## 📌 Technologies Used

- JavaScript (ES6)
- HTML5
- (Optional) CSS for basic styling

---

## 🧑‍💻 Author

Developed by **Sravya Om**  
[GitHub Profile »](https://github.com/SravyaOm)

---

## 📬 Feedback & Contributions

Have suggestions or want to improve the solving logic?  
Feel free to fork, clone, or open a pull request!

---

## 📝 License

This project is for educational/demonstration purposes and is not meant for commercial use or distribution. Feel free to build upon it for your own learning.
