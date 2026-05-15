// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
// camera.position.set(0, 0, 10);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);



// // START Helix
// const geometry = new THREE.BufferGeometry();

// let vertices=[];

// // const angle=2*Math.PI/40;
// // let k=0.05;
// // let angle2=angle;
// // for(let i=0; i<=160; i++){
// //     point.push(new THREE.Vector3(Math.cos(angle*i),Math.sin(angle*i),angle2));    
// //     angle2=0.1+k*angle2
// // }
// // geometry.setFromPoints(point);

// const angle=2*Math.PI/40;
// let k=0.05;
// let angle2=angle;
// let tube=0.4;
// let radius=1;

// const u =  Math.PI * 2;
// const v =  Math.PI * 2;

// for(let i=0; i<=160; i++){
//     let vertex=new THREE.Vector3();


//     vertex.x = ( radius + tube * Math.cos(k* v ) ) * Math.cos( u );
//     vertex.y = ( radius + tube * Math.cos(k* v ) ) * Math.sin( u );
//     vertex.z = tube * Math.sin( v );

//     vertices.push( vertex.x, vertex.y, vertex.z );

// }
// geometry.setFromPoints(vertices);
// geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) )


// const material = new THREE.LineBasicMaterial({ 
//     color: "rgb(149, 199, 232)", 
// });

// let helix = new THREE.Line(geometry, material);

// scene.add(helix);

// //end circle 


// function animate() {    
//     helix.rotation.x += 0.01;
//     renderer.render(scene,camera);
//     requestAnimationFrame(animate);
// }

// animate()


// // make window responsive to resize evernts
// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth,window.innerHeight);
//     camera.aspect=window.innerWidth/window.innerHeight;
   

// });


//add test comment 



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    100, window.innerWidth/window.innerHeight,
    0.5, 1000
);

camera.position.z = 10;

var renderer = new THREE.WebGLRenderer({
    alpha : true,
    // antialias : true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const material = new THREE.LineBasicMaterial( { color: 'red'} );

// toroidal Spiral
let points = [];
var x;
var y;
for (let i = 0; i <= 960 ; i+=1) {
    let t = 2*(Math.PI/960) * i;
    a = 1
    b = 6
    c = 40
    x = (a*Math.cos(c*t)+b)*Math.cos(t)
    y = (a*Math.cos(c*t)+b)*Math.sin(t)
    z = a*Math.sin(c*t)
    points.push( new THREE.Vector3(x, y, z) );

    // let vertex=new THREE.Vector3();
    // vertex.x = (  a * Math.cos(c*t)+b ) * Math.cos( t );
    // vertex.y = (  a * Math.cos(c*t)+b ) * Math.sin( t );
    // vertex.z = a * Math.sin( c*t );

    // points.push( vertex.x, vertex.y, vertex.z );



}

var geometry = new THREE.BufferGeometry().setFromPoints( points );
const toroidalSpiral = new THREE.Line( geometry, material );

scene.add(toroidalSpiral);


function animate(){
        
    requestAnimationFrame(animate);

   toroidalSpiral.rotation.x += 0.01;
   toroidalSpiral.rotation.y += 0.01;


    renderer.render(scene, camera);
}

animate();



window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
   

})
