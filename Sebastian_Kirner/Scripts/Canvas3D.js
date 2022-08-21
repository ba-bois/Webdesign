import * as THREE from "https://cdn.skypack.dev/three@0.132.2";

const scene = new THREE.Scene();
const DOMEl = document.getElementById("canvas3D");

let rotationSpeed = 0.01;

DOMEl.addEventListener("mouseover", () => {
    rotationSpeed = 0.05;
});

DOMEl.addEventListener("mouseout", () => {
    rotationSpeed = 0.01;
});

const renderer = new THREE.WebGLRenderer({ alpha: 1 });
renderer.setSize(450, 450);
DOMEl.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xe65f5c });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += rotationSpeed;
    cube.rotation.y += rotationSpeed;

    renderer.render(scene, camera);
}

animate();
