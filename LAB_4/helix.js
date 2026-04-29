const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
camera.position.set(0, 0, 10);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const geometry = new THREE.BufferGeometry();

let point=[];

const angle=2*Math.PI/40;

for(let i=0; i<=160; i++){
    point.push(new THREE.Vector3(Math.cos(angle*i),Math.sin(angle*i),0.1*angle*i));    
}
geometry.setFromPoints(point);

const material = new THREE.LineBasicMaterial({ 
    color: "rgb(149, 199, 232)", 
});

let helix = new THREE.Line(geometry, material);

scene.add(helix);

//end circle 


function animate() {    
    helix.rotation.x += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}

animate()


// make window responsive to resize evernts
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
   

});

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
   

})

