<template>
  <div class="mt-5 pt-3 border-t">
    <h2 class="text-xl font-medium text-orange-700 text-center">Collapse</h2>
    <br>
    <p>Collapse component provides a highly customisable collapse block with title and content</p>
    <br>
    <p class="font-bold">- Available props</p>
    <div class="grid grid-cols-4 mt-3">
      <span class="table-header">Props</span>
      <span class="table-header">Description</span>
      <span class="table-header">Type</span>
      <span class="table-header">Default value</span>

      <span class="table-item">defaultIsOpen</span>
      <span class="table-item">Open the collapse</span>
      <span class="table-item">Boolean</span>
      <span class="table-item">false</span>

      <span class="table-item">showArrow</span>
      <span class="table-item">Show the arrow on the right</span>
      <span class="table-item">Boolean</span>
      <span class="table-item">true</span>
    </div>
    <br>
    <p class="font-bold">- Available slots</p>
    <div class="grid grid-cols-2 mt-3">
      <span class="table-header">Slot name</span>
      <span class="table-header">Description</span>

      <span class="table-item">title</span>
      <span class="table-item">Content to display in the title block</span>

      <span class="table-item">content</span>
      <span class="table-item">Content to display in the content block</span>
    </div>
    <br>
    <p class="font-bold">- Examples</p>
    <p class="mt-2">1. Collapse with minimum props</p>
    <CollapseBasic></CollapseBasic>
    <p class="mt-2">2. Collapse opened with custom slots</p>
    <CollapseOpen></CollapseOpen>
  </div>
</template>

<script>
import CollapseBasic from '../components/examples/collapse/CollapseBasic.vue'
import CollapseOpen from '../components/examples/collapse/CollapseOpen.vue'

export default {
  name: "CollapseView",
  components: {
    CollapseBasic,
    CollapseOpen
  }
}
</script>