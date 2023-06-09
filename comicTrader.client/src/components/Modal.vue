<template>
  <div class="modal fade text-dark" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark lighten-10">
        <div class="modal-header">
          <!-- SECTION MODAL HEADER -->
          <h1 class="modal-title fs-4" id="exampleModalLabel">
            <slot name="header"></slot>
          </h1>
          <button type="button" class="btn btn-danger py-0 fs-4 ms-1" data-bs-dismiss="modal"
            aria-label="Close">X</button>
        </div>
        <!-- SECTION MODAL BODY -->
        <div class="modal-body">
          <slot name="modalBody"></slot>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  setup() {
    return {};
  },
};
</script>



<style></style>