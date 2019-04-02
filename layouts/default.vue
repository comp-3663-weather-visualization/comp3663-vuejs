<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100vh;
  min-height: 700px;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  color: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
}

select, select.form-control,
select.form-control:focus {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
  font-size: 1.5rem;
}

select.form-control > option {
  color: #000;
}

h1 {
  font-size: 3rem;
}

.hidden {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
}

.right {
  text-align: right;
}
</style>
