<template>
  <div class="__husqpdf_document">
    <div class="__husqpdf_document-header">
      <slot name="header"/>
    </div>

    <div class="__husqpdf_document-footer">
      <slot name="footer"/>
    </div>

    <table class="__husqpdf_document-content">
      <thead>
      <tr>
        <td>
          <div class="__husqpdf_document-header-space"/>
        </td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>
          <slot name="default"/>
        </td>
      </tr>
      </tbody>

      <tfoot>
      <tr>
        <td>
          <div class="__husqpdf_document-footer-space"/>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue"

const props = defineProps<{
  headerHeight?: string;
  footerHeight?: string;
  margin?: string;
  format?: "A4" | "A3" | "A5";
  orientation?: "portrait" | "landscape";
}>();

const injectPrintStyles = () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
        :root {
          --pdf-margin: ${props.margin};
          --pdf-header-height: ${props.headerHeight};
          --pdf-format: ${props.format};
          --pdf-orientation: ${props.orientation};
          --pdf-footer-height: ${props.footerHeight};
        }
  `;
  document.head.appendChild(styleElement);
};
onMounted(() => {
  injectPrintStyles();
});
</script>

<style scoped>
.__husqpdf_document {
  print-color-adjust: exact;
}

.__husqpdf_document-header,
.__husqpdf_document-header-space {
  height: var(--pdf-header-height);
}

.__husqpdf_document-footer,
.__husqpdf_document-footer-space {
  height: var(--pdf-footer-height);
}

.__husqpdf_document-header {
  position: fixed;
  top: 0;
  width: 100%;
}

.__husqpdf_document-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.__husqpdf_document-content {
  width: 100%;
  height: 100%;
}
</style>
