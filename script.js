// import { BufferAttribute, Clock, PerspectiveCamera, PlaneGeometry, Points, Scene, ShaderMaterial, WebGLRenderer } from "three";

// /**
// |--------------------------------------------------
// | Constants
// |--------------------------------------------------
// */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// };
// const canvas = document.querySelector('canvas.webgl');
// const scene = new Scene();

// /**
// |--------------------------------------------------
// | Camera
// |--------------------------------------------------
// */
// const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.set(0, 1.1, 10);
// scene.add(camera);

// /**
// |--------------------------------------------------
// | Plane
// |--------------------------------------------------
// */
// const planeGeometry = new PlaneGeometry(20, 20, 150, 150);
// const planeMaterial = new ShaderMaterial({
//     uniforms: {
//         uTime: { value: 0 },
//         uElevation: { value: 0.482 }
//     },
//     vertexShader: `
//         uniform float uTime;
//         uniform float uElevation;

//         attribute float aSize;

//         varying float vPositionY;
//         varying float vPositionZ;

//         void main() {
//             vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//             modelPosition.y = sin(modelPosition.x - uTime) * sin(modelPosition.z * 0.6 + uTime) * uElevation;

//             vec4 viewPosition = viewMatrix * modelPosition;
//             gl_Position = projectionMatrix * viewPosition;

//             gl_PointSize = 2.0 * aSize;
//             gl_PointSize *= ( 1.0 / - viewPosition.z );

//             vPositionY = modelPosition.y;
//             vPositionZ = modelPosition.z;
//         }
//     `,
//     fragmentShader: `
//     varying float vPositionY;
//     varying float vPositionZ;

//     void main() {
//         // Map vPositionY to a gradient value between 0 and 1
//         float gradientStrength = clamp((vPositionY + 0.5) * 0.5, 0.0, 1.0);

//         // Define gradient colors
//         vec3 color1 = vec3(0.173, 0.220, 0.329); // #2C3854
//         vec3 color2 = vec3(0.224, 0.514, 0.678); // #3983AD

//         // Mix the two colors based on gradientStrength
//         vec3 finalColor = mix(color1, color2, gradientStrength);

//         // Output the color
//         gl_FragColor = vec4(finalColor, 1.0);
//     }
// `
// ,
//     transparent: true
// });
// const planeSizesArray = new Float32Array(planeGeometry.attributes.position.count);
// for (let i = 0; i < planeSizesArray.length; i++) {
//     planeSizesArray[i] = Math.random() * 4.0;
// }
// planeGeometry.setAttribute('aSize', new BufferAttribute(planeSizesArray, 1));

// const plane = new Points(planeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI * 0.4;
// scene.add(plane);

// /**
// |--------------------------------------------------
// | Resize
// |--------------------------------------------------
// */
// window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth;
//     sizes.height = window.innerHeight;

//     // Update camera
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
// |--------------------------------------------------
// | Renderer
// |--------------------------------------------------
// */
// const renderer = new WebGLRenderer({
//     canvas: canvas
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // Set the clear color to white
// renderer.setClearColor(0x141727, 0);  // Set background to white

// /**
// |--------------------------------------------------
// | Animate Function
// |--------------------------------------------------
// */
// const clock = new Clock();

// const animate = () => {
//     const elapsedTime = clock.getElapsedTime();

//     planeMaterial.uniforms.uTime.value = elapsedTime;

//     renderer.render(scene, camera);

//     // Call animate again on the next frame
//     window.requestAnimationFrame(animate);
// };

// animate();












