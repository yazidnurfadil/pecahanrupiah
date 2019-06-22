<template>
  <div class="align">
    <div class="pecahanform">
      <div class="bar">&nbsp;</div>
      <h2>Money Splitter</h2>
      <input
        type="text"
        placeholder="Nominal"
        v-model="nominal"
        @input="nominalHandler"
      />
    </div>
    <p class="error-msg" v-if="pecahanList.err">
      <span style="color: red;font-weight:bold">ERROR: </span>
      {{ pecahanList.err }}
    </p>
    <div class="hasilpecahan" v-else>
      <div
        class="pecahanform pecahanuang"
        v-for="pecahan in pecahanList"
        :key="pecahan.pecahan"
      >
        <div class="jumlah">
          {{ pecahan.sisa ? "no fraction" : pecahan.jumlah + "x" }}
        </div>
        <h4>Rp{{ pecahan.pecahan || pecahan.sisa }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import pecahin from "@/tool/pecahin.js";

export default {
  name: "PecahanForm",
  data() {
    return {
      nominal: "",
      pecahanList: []
    };
  },
  methods: {
    nominalHandler() {
      this.pecahanList = pecahin(this.nominal);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.align {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pecahanform {
  background-color: #323232;
  height: auto;
  width: 20rem;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 0rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.39);
  margin-bottom: 10px;
}
.hasilpecahan {
  display: flex;
}
.pecahanform.pecahanuang {
  width: auto;
  padding: 0;
  display: flex;
  margin: 0 10px;
}
.pecahanform.pecahanuang .jumlah {
  background-color: #41b749;
  padding: 10px;
  font-weight: bold;
  color: #212121;
}
.pecahanform.pecahanuang h4 {
  color: #41b749;
  margin: 0;
  padding: 10px;
}
.error-msg {
  color: #41b749;
  background-color: red;
  padding: 5px 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.39);
  border-top: 3px solid red;
  background-color: #323232;
  letter-spacing: 2px;
}
.bar {
  background-color: #41b749;
  height: 0.2rem;
  margin-top: -3rem;
  margin-left: -3rem;
  width: calc(100% + 6rem);
}

h2 {
  color: #41b749;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
}

.pecahanform > button {
  display: block;
  width: 100%;
  background-color: #41b749;
  font-weight: bold;
  text-transform: uppercase;
}

button {
  width: 20rem;
  padding: 0.6rem;
  margin: 2rem 0 0 0;
  text-decoration: none;
  border: none;
  font-family: Helvetica;
  cursor: pointer;
  color: #212121;
  outline: 0;
}

input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  margin: 1rem 0;
  background-color: #656565;
  font-size: 0.7rem;
  font-family: Helvetica;
  outline: 0;
  border: 0;
}

input::placeholder {
  color: #989898;
}

input:active,
input:focus {
  background-color: #989898;
  outline: 0.1rem solid #41b749;
  color: #ffffff;
  border: none;
}
</style>
