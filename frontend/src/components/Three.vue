<template>
  <div id="three-container">
  </div>
</template>
    
<script>
  import * as Three from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

  export default {
  name: 'Three',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      loader: null
    }
  },
  methods: {
    onWindowResize: function() {
      this.renderer.setSize( container.clientWidth, container.clientHeight );
      this.camera.aspect = container.clientWidth/container.clientHeight;
      this.camera.updateProjectionMatrix();
    },
    init: function() {
        let container = document.getElementById('three-container');
        

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 20);
        this.camera.position.set(0,0, 8);
        let scene = new Three.Scene();
        scene.background = new Three.Color(0xfdca58);

        let material = new Three.MeshMatcapMaterial();
        this.loader = new GLTFLoader();
        this.loader.load( './logo-2021.glb', function ( gltf ) {
              let model = gltf.scene;
              model.name = "logo";
              model.traverse( function(child){
                  if ( child instanceof Three.Mesh ) {
                      child.material = material;
                  }
              })
              scene.add( model );


          }, undefined, function ( error ) {

              console.error( "Error loading model." );

          }
        ); 
        this.scene = scene;
        
        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
        window.addEventListener( 'resize', this.onWindowResize, false );
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.scene.children[0].rotation.x += 0.01;
        this.scene.children[0].rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
      // window.addEventListener( 'resize', this.onWindowResize, false );
  }
}
</script>
<style>
  #three-container {
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    /* width:100vw;
    height:100vh; */
    z-index:-99;
    /* justify-self: center;
    align-self: center; */
    /* width: 100%;
    height: 100%; */
  }
</style>