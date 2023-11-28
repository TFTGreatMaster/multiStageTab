<template>
  <main id="card">
    <a-tabs v-model:activeKey="activeKey" type="card" @change="handleChange">
      <a-tab-pane key="1" tab="Tab 1"
        ><Collapse ref="refCollapse1"
      /></a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2"
        ><Collapse ref="refCollapse2"
      /></a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3"
        ><Collapse ref="refCollapse3"
      /></a-tab-pane>
    </a-tabs>
  </main>
</template>

<script lang="ts" setup>
import { ref, unref, onMounted, nextTick, inject } from "vue";
import Collapse from "./Collapse.vue";
import { useDisable } from "./hook";

const onDisableUp = inject("onDisableUp", (_) => {});
const onDisableDown = inject("onDisableDown", (_) => {});

const activeKey = ref("1");

const refCollapse1 = ref();
const refCollapse2 = ref();
const refCollapse3 = ref();

const handleClickTab = () => {
  if (unref(activeKey) === "1") {
    useDisable(refCollapse1.value.activeKey, onDisableUp, onDisableDown);
  } else if (unref(activeKey) === "2") {
    useDisable(unref(refCollapse2).activeKey, onDisableUp, onDisableDown);
  } else if (unref(activeKey) === "3") {
    useDisable(unref(refCollapse3).activeKey, onDisableUp, onDisableDown);
  }
};

const handleClickUp = () => {
  if (unref(activeKey) === "1") {
    unref(refCollapse1).onUpAllCollapse();
  } else if (unref(activeKey) === "2") {
    unref(refCollapse2).onUpAllCollapse();
  } else if (unref(activeKey) === "3") {
    unref(refCollapse3).onUpAllCollapse();
  }
};

const handleClickDown = () => {
  if (unref(activeKey) === "1") {
    unref(refCollapse1).onDownAllCollapse();
  } else if (unref(activeKey) === "2") {
    unref(refCollapse2).onDownAllCollapse();
  } else if (unref(activeKey) === "3") {
    unref(refCollapse3).onDownAllCollapse();
  }
};

const handleChange = () => {
  nextTick(() => handleClickTab());
};

defineExpose({
  handleClickTab,
  handleClickUp,
  handleClickDown,
});

onMounted(() => handleClickTab());
</script>
