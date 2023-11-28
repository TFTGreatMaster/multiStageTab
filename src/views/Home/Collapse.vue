<template>
  <a-collapse v-model:activeKey="activeKey" :bordered="true">
    <a-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts" setup>
import { ref, unref, inject, onMounted, watch } from "vue";

import { useDisable } from "./hook";

const onDisableUp = inject("onDisableUp", (_) => {});
const onDisableDown = inject("onDisableDown", (_) => {});

const activeKey = ref([]);
const handleDisable = () => useDisable(activeKey, onDisableUp, onDisableDown);

const text = `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;

function onDownAllCollapse() {
  activeKey.value = ["1", "2", "3"];
}
function onUpAllCollapse() {
  activeKey.value = [];
}

watch(activeKey, () => {
  handleDisable();
});
onMounted(() => {
  handleDisable();
});

defineExpose({
  activeKey,
  onDownAllCollapse,
  onUpAllCollapse,
});
</script>
