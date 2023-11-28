<template>
  <main id="card">
    <a-tabs v-model:activeKey="activeKey" type="card" @change="handleChange" destroyInactiveTabPane>
      <a-tab-pane key="1" tab="Tab 1"
        ><Collapse ref="refCollapse1"
      /></a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" ref="refCollapse2"
        ><Collapse
      /></a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3" ref="refCollapse3"
        ><Collapse
      /></a-tab-pane>
    </a-tabs>
  </main>
</template>

<script lang="ts" setup>
import { ref, unref, onMounted, watch, nextTick, inject } from "vue";
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
    console.log("a", unref(refCollapse1).activeKey);
    useDisable(unref(refCollapse1).activeKey, onDisableUp, onDisableDown);
  } else if (unref(activeKey) === "2") {
    console.log("a", unref(refCollapse1).activeKey);
    useDisable(unref(refCollapse2).activeKey, onDisableUp, onDisableDown);
  } else if (unref(activeKey) === "3") {
    console.log("a", unref(refCollapse1).activeKey);
    useDisable(unref(refCollapse3).activeKey, onDisableUp, onDisableDown);
  }
};

const handleChange = () => {
  console.log("vafo");
  nextTick(() => handleClickTab());
};

onMounted(() => handleClickTab());
</script>
