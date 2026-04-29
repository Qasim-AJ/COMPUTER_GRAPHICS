//test comment
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
camera.position.set(0, 0, 30);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const RAD_PER_DEG = Math.PI / 180;

class Turtle {
  constructor(x = 0, y = 0, angle = 0, color = 'white') {
    this.CP = new THREE.Vector2(x, y);
    this.CD = angle;
    this.path = new THREE.Path();
    this.path.moveTo(x, y);
    this.material = new THREE.LineBasicMaterial({ color });
    this.geometry = new THREE.BufferGeometry();
    this.line = new THREE.Line(this.geometry, this.material);
  }

  turnTo(angle) { this.CD = angle; }
  turn(angle)   { this.CD += angle; }

  forward(dist, visible = true) {
    const x = this.CP.x + dist * Math.cos(RAD_PER_DEG * this.CD);
    const y = this.CP.y + dist * Math.sin(RAD_PER_DEG * this.CD);
    visible ? this.path.lineTo(x, y) : this.path.moveTo(x, y);
    this.CP.set(x, y);
    return this;
  }

  draw() {
    this.geometry.setFromPoints(this.path.getPoints());
    return this.line;
  }
}

// Star / triforce shape
const t = new Turtle();
const theta = 360 / 3;
for (let j = 0; j < 3; j++) {
  t.turnTo(theta * j + 60);
  for (let i = 0; i <= 3; i++) {
    t.forward(5);
    t.turn(i === 1 ? 120 : 60);
  }
}
scene.add(t.draw());
renderer.render(scene, camera);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
});


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
// camera.position.set(0, 0, 30);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// //test comment

// class turtle {
//   constructor(CP, CD) {
//     //CURRENT POINT
//     this.CP = CP;
//     //CURRENT ANGLE
//     this.CD = CD;
//     //CURRENT PATHS
//     this.path = new THREE.Path();
//     this.path.moveTo(this.CP.x, this.CP.y);
//     this.points = this.path.getPoints();
//     this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
//     this.material = new THREE.LineBasicMaterial({ color: "white" });
//     this.line = new THREE.Line(this.geometry, this.material);
//   }

//   //TURNING TO A SPECIFIC ANGLE
//   turnTo(angle) {
//     this.CD = angle;
//   }
//   //MOVING TO A SPECIFIC ANGLE WRT CURRENT ANGLE
//   turn(angle) {
//     this.CD += angle;
//     console.log(angle)
//   }
//   //MOVING FORWARD TO A DISTANCE 
//   forward(dist, isVisible) {
//     //degree converted to random
//     var radPerDeg = 0.017453393;

//     //x = Cp.x + r cos(angle)
//     //y = cp.y + r sin(angle)
//     var x = this.CP.x + (dist * Math.cos(radPerDeg * this.CD));
//     var y = this.CP.y + (dist * Math.sin(radPerDeg * this.CD));
    
//     //isVisible to show line True or False
//     if (isVisible) this.path.lineTo(x, y);
//     else this.path.moveTo(x, y);


//     this.CP = new THREE.Vector2(x, y);
//     console.log(this.CP)
//   }
//   //DRAWING ALL THE MOVEMENTS
//   drawTurtle() {
//     //CURRENT PATHS
//     this.path.moveTo(this.CP.x, this.CP.y);
//     this.points = this.path.getPoints();
//     this.geometry = this.geometry.setFromPoints(this.points);
//     // this.material = new THREE.LineBasicMaterial({ color: 0xffffff });
//     this.line = new THREE.Line(this.geometry, this.material);
//     // return this.line;
//     return this.line;
//   }
// }



// // {
// // let cp = new THREE.Vector2(0,0);
// // let angle = 0;
// // let t = new turtle(cp,angle);
// // let l=1;
// // for (let index = 0; index <= 3; index++) {
// //   t.forward(l*3,true);
// //   t.turn(90);
// //   t.forward(l,true);
// //   t.turn(90);
// //   t.forward(l,true);
// //   t.turn(90);
// // }
// // scene.add(t.drawTurtle());
// // renderer.render(scene,camera);
// // }


// // {
// // let cp = new THREE.Vector2(0,0);
// // let angle = 0;
// // let t = new turtle(cp,angle);
// // let l=1;
// // for (let i = 1; i <= 4; i++) {
// //   t.forward(l*i,true);
// //   t.turn(90);
// //   t.forward(l*i,true);
// //   t.turn(90);
// //   t.forward(l*i,true);
// //   t.turn(90);
// //   t.forward(l*i,true);
// //   t.turn(90);
// // }
// // scene.add(t.drawTurtle());
// // renderer.render(scene,camera);
// // }

// // spiral 
// // {
// // let cp = new THREE.Vector2(0,0);
// // let angle = 0;
// // let t = new turtle(cp,angle);
// // let l=1;
// // for (let i = 1; i <= 16; i++) {
// //   t.forward(l*i,true);
// //   t.turn(-90);
// //   // t.forward(l*i,true);
// //   // t.turn(90);
// //   // t.forward(l*i,true);
// //   // t.turn(90);
// //   // t.forward(l*i,true);
// //   // t.turn(90);
// // }
// // scene.add(t.drawTurtle());
// // renderer.render(scene,camera);
// // }

// // {
// // let cp = new THREE.Vector2(0,0);
// // let angle = 0;
// // let t = new turtle(cp,angle);
// // let l=1;

// // for (let i = 1; i <= 3; i++) {
// //   t.forward(5,true);
// //   t.turn(60);
// //   t.forward(5,true);
// //   t.turn(60);
// //   t.forward(5,true);
// //   t.turn(120);
// // }
// // scene.add(t.drawTurtle());
// // renderer.render(scene,camera);
  
// // }

// // {
// // let cp = new THREE.Vector2(0,0);
// // let angle = 0;
// // let t = new turtle(cp,angle);
// // let l=1;
// // // t.turn(60);
// // let theta=(360/3);
// // for (let j = 0; j < 3; j++) {
// //   t.turnTo(theta*j+60);
// //   for (let i = 0; i <= 3; i++) {
// //     t.forward(5,true);
  
// //     if(i==1){
// //         t.turn(120);
    
// //     }
// //     else{
// //       t.turn(60);
  
// //     }
// //   }
    
// // }
// // scene.add(t.drawTurtle());
// // renderer.render(scene,camera);

// // }


// { 
// let cp = new THREE.Vector2(0,0);
// let angle = 0;
// let t = new turtle(cp,angle);
// let l=1;
// // t.turn(60);
// let theta=(360/3);
// for (let j = 0; j < 3; j++) {
//   t.turnTo(theta*j+60);
//   for (let i = 0; i <= 3; i++) {
//     t.forward(5,true);
  
//     if(i==1){
//         t.turn(120);
    
//     }
//     else{
//       t.turn(60);
  
//     }
//   }
    
// }
// scene.add(t.drawTurtle());
// renderer.render(scene,camera);

// }





// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth,window.innerHeight);
//   camera.aspect=window.innerWidth/window.innerHeight;
 

// });
