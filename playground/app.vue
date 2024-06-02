<template>
  <pdf-document margin="10mm" header-height="20mm" footer-height="15mm">
    <template #header>
      <pdf-header style="background: lightcoral">
        This is my header
      </pdf-header>
    </template>

    <pdf-page>
      <p v-for="index in 200">This is my page {{index}}</p>
    </pdf-page>

    <template #footer>
      <pdf-footer style="background: lawngreen">
        This is my footer
      </pdf-footer>
    </template>
  </pdf-document>
</template>

<script setup>
</script>
