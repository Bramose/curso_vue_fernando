<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">08</span>
            <span class="mx-1 fs-3">Noviembre</span>
            <span class="mx-2 fs-4 fw-light">2021, lunes</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">Borrar <i class="fa fa-trash-alt"></i></button>
            <button class="btn btn-primary">Subir foto <i class="fa fa-upload"></i></button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?"></textarea>
    </div>
    <fab icon="fa-save" />
    <img class="img-thumbnail" src="https://i2.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/12/Mejores-Playas-de-Canc%C3%BAn.jpg" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        fab: defineAsyncComponent(() => import("../components/Fab.vue"))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>