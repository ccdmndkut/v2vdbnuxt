<template>
  <div id="terminal">
    <div class="landing-view">
      <nuxt/>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
* {
  font-family: 'Press Start 2P', cursive;
}

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  flex-direction: column;
  color: #54fe55;
}

*::selection {
  background: #1a4f1a;
}

.welcome .line {
  /* overflow: hidden; */
  width: 0px;
  text-shadow: 0px 0px 10px #54fe55;
  height: 2rem;
  text-align: left;
}
.welcome .line1 {
  animation: type 0.5s 1s steps(20, end) forwards;
}
.welcome .line2 {
  animation: type 0.5s 1.5s steps(20, end) forwards;
}
.welcome .line3 {
  animation: type 0.5s 2s steps(20, end) forwards;
}

@keyframes type {
  to {
    width: 280px;
  }
}
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
form label {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-shadow: 0px 0px 10px #54fe55;
}
form input {
  background: black;
  border: 1px solid #54fe55;
  margin-top: 0.5rem;
  padding: 0.5rem;
  color: #54fe55;
  text-shadow: 0px 0px 10px #54fe55;
  box-shadow: 0px 0px 5px #54fe55;
}
form input:focus {
  outline: none;
}
form button {
  padding: 0.5rem;
  background: #1a4f1a;
  color: #54fe55;
  border: 0;
  text-shadow: 0px 0px 10px #54fe55;
  box-shadow: 0px 0px 10px #1a4f1a;
  cursor: pointer;
}
form button:focus {
  outline: none;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
.blink {
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
</style>
