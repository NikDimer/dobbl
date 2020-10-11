var camera, scene, renderer, controls;
var geometry, material;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.y = 5;
    camera.position.z = 0;
    camera.position.x = 0;

    scene = new THREE.Scene();
    var geometry = new THREE.BoxGeometry();
        var textureLoader = new THREE.TextureLoader();
        textureLoader.setPath('textures/' + 'grass' + '/');

        var textureTop = textureLoader.load('top.png');
        var textureSide = textureLoader.load('side.png');
        var textureBottom = textureLoader.load('bottom.png');
        var material = [
            new THREE.MeshBasicMaterial({ map: textureSide }),
            new THREE.MeshBasicMaterial({ map: textureSide }),
            new THREE.MeshBasicMaterial({ map: textureTop }),
            new THREE.MeshBasicMaterial({ map: textureBottom }),
            new THREE.MeshBasicMaterial({ map: textureSide }),
            new THREE.MeshBasicMaterial({ map: textureSide })
        ];

    //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls (camera, renderer.domElement);
    //controls = new THREE.OrbitControls(camera);
    //controls = new THREE.PointerLockControls(camera);
    //controls.unlock();
    //scene.add(controls.getObject());
}

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

} 