<template>
  <div class="nav">Dropzone : <input type="checkbox" v-model="enabled" /></div>
  <qr-dropzone v-if="enabled" @decode="onDecode" class="dropzone mb">
    Drop image here.
  </qr-dropzone>
  <qr-stream v-if="!enabled" @decode="onDecode" class="stream"></qr-stream>
  <div class="result">
    <h2>Result</h2>
    <div v-html="result"></div>
  </div>
</template>

<script>
import { QrStream, QrDropzone } from "vue3-qr-reader";

export default {
  name: "App",
  components: { QrStream, QrDropzone },
  data() {
    return {
      enabled: false,
      result: "",
    };
  },
  methods: {
    onDecode(data) {
      this.result = data;
    },
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .result {
    position: fixed;
    top: 50vh;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #333;
    color: white;
  }
  .nav {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 22;
  }
  .stream {
    height: 50vh;
    width: 100%;
  }
  .dropzone {
    position: fixed;
    $pos: 10px;
    top: $pos;
    left: $pos;
    right: $pos;
    bottom: 50vh;
    border: 2px dashed #ccc;
    background: rgba(#ccc, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 43px;
  }
}
</style>
