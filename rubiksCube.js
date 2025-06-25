class RubiksCube {
  constructor() {
    this.reset();
  }

  reset() {
    this.faces = {
      U: Array(9).fill('w'),
      D: Array(9).fill('y'),
      F: Array(9).fill('g'),
      B: Array(9).fill('b'),
      L: Array(9).fill('o'),
      R: Array(9).fill('r'),
    };
  }

  getCubeString() {
    return this.faces.U.join('') +
           this.faces.R.join('') +
           this.faces.F.join('') +
           this.faces.D.join('') +
           this.faces.L.join('') +
           this.faces.B.join('');
  }

  rotateFaceClockwise(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[6], f[3], f[0],
      f[7], f[4], f[1],
      f[8], f[5], f[2]
    ];
    this.rotateAdjacentEdges(face, true);
  }

  rotateFaceCounterClockwise(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[2], f[5], f[8],
      f[1], f[4], f[7],
      f[0], f[3], f[6]
    ];
    this.rotateAdjacentEdges(face, false);
  }

  rotateAdjacentEdges(face, clockwise) {
    if (face === 'F') {
      const U = this.faces.U;
      const R = this.faces.R;
      const D = this.faces.D;
      const L = this.faces.L;

      if (clockwise) {
        const temp = [U[6], U[7], U[8]];
        [U[6], U[7], U[8]] = [L[8], L[5], L[2]];
        [L[2], L[5], L[8]] = [D[2], D[1], D[0]];
        [D[0], D[1], D[2]] = [R[0], R[3], R[6]];
        [R[0], R[3], R[6]] = temp;
      } else {
        const temp = [U[6], U[7], U[8]];
        [U[6], U[7], U[8]] = [R[0], R[3], R[6]];
        [R[0], R[3], R[6]] = [D[0], D[1], D[2]];
        [D[0], D[1], D[2]] = [L[8], L[5], L[2]];
        [L[2], L[5], L[8]] = temp;
      }
    }
  }

  scramble(times = 10) {
    const moves = ['F', 'U', 'R', 'L', 'B', 'D'];
    for (let i = 0; i < times; i++) {
      const move = moves[Math.floor(Math.random() * moves.length)];
      this.rotateFaceClockwise(move);
    }
  }
}
