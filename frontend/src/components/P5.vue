<template>
  <div class="p5-container">
    <button v-on:click="resetSketch">reset</button>
  </div>
</template>

<script>
import p5 from 'p5';

export default {
  name: 'P5',
  methods: {
    resetSketch: function(){
      
    }
  },
  mounted() {
    const script = p5 => {
      // These are your typical setup() and draw() methods
      p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
      };
      p5.draw = () => {

      }; 
    }    // Attach the canvas to the div
    const p5canvas = new P5(script, 'p5-container');
  },
}
</script>
