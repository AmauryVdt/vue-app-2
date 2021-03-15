<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/wikiwars_logo.png"><br><br><br>
    <HelloWorld msg="Welcome to the WikiWars's Home page!"/>
    <h4 class="click_to_start">Click on the button to play at this amazing game !</h4>
    <form action="http://134.209.206.60/wars/#/">
      <button class="button_wikiwars rainbow" type="submit">W I K I W A R S</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

$black: #000000;
$grey: #323232;
$dark-grey: #221f1f;
$white: #ffffff;
$light-grey: #bcbcbc;

.click_to_start {
  margin-top: 3vh;
}

.button_wikiwars {
  margin-top: 10vh;
  width: 20vw;
  height: 10vh;
  font-weight: 700;
  font-size: 1.5vw;
  background-color: $dark-grey;
  box-shadow: 3px 2px 2px $black;
  border-radius: 10px 10px 10px 10px;
  border: none;
  color: $white;

  &:focus {
    outline:none;
  }

  &:hover {
    background-color: $grey;
    cursor: pointer;
    color: $light-grey;
  }
}

.rainbow:hover {
  -webkit-animation:rainbow 1s infinite;
  -ms-animation:rainbow 1s infinite;
  -o-animation:rainbow 1s infinite;
  animation:rainbow 1s infinite;
}
@-webkit-keyframes rainbow {
  0% {color: #ff0000;}
  10% {color: #ff8000;}
  20% {color: #ffff00;}
  30% {color: #80ff00;}
  40% {color: #00ff00;}
  50% {color: #00ff80;}
  60% {color: #00ffff;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: #ff0080;}
}
@-ms-keyframes rainbow {
  0% {color: #ff0000;}
  10% {color: #ff8000;}
  20% {color: #ffff00;}
  30% {color: #80ff00;}
  40% {color: #00ff00;}
  50% {color: #00ff80;}
  60% {color: #00ffff;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: #ff0080;}
}
@-o-keyframes rainbow {
  0% {color: #ff0000;}
  10% {color: #ff8000;}
  20% {color: #ffff00;}
  30% {color: #80ff00;}
  40% {color: #00ff00;}
  50% {color: #00ff80;}
  60% {color: #00ffff;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: #ff0080;}
}
@keyframes rainbow {
  0% {color: #ff0000;}
  10% {color: #ff8000;}
  20% {color: #ffff00;}
  30% {color: #80ff00;}
  40% {color: #00ff00;}
  50% {color: #00ff80;}
  60% {color: #00ffff;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: #ff0080;}
}

</style>
