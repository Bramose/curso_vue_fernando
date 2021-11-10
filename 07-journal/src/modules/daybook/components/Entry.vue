<template>
  <div @click="$router.push({ name: 'entry', params: { id: 10 } })" class="entry-container mb-3 pointer p-2">
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">08</span>
          <span class="mx-1 fs-5">Noviembre</span>
          <span class="mx-2 fw-light">2021, lunes</span>
      </div>
      <div class="entry-description">
        Culpa excepteur labore mollit veniam occaecat magna laboris magna veniam occaecat sit. Eu voluptate non elit laborum officia do fugiat. Do id Lorem ex occaecat esse elit.Elit ea veniam pariatur culpa culpa ad. Magna quis nulla esse culpa elit exercitation nulla occaecat et incididunt incididunt. Non tempor ex ullamco dolor elit.
      </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color:grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>