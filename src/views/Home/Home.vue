<template>
  <main id="Home-page">
    <a-tabs v-model:activeKey="activeKey" type="card" @change="handleChange">
      <a-tab-pane key="1" tab="Tab 1"><Card ref="cardRef1" /></a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2"><Card ref="cardRef2" /></a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3"><Card ref="cardRef3" /></a-tab-pane>
      <template #rightExtra>
        <a-button :disabled="disableDown" v-on:click="onClickDown">
          <DownOutlined
        /></a-button>
        <a-button :disabled="disableUp" v-on:click="onClickUp">
          <UpOutlined
        /></a-button>
      </template>
    </a-tabs>
  </main>
</template>

<script lang="ts" setup>
import { ref, provide, unref, nextTick } from "vue";
import Card from "./Card.vue";
import { DownOutlined, UpOutlined } from "@ant-design/icons-vue";

const activeKey = ref("1");

const cardRef1 = ref();
const cardRef2 = ref();
const cardRef3 = ref();

const disableUp = ref(true);
const disableDown = ref(false);

const onDisableUp = (param) => {
  disableUp.value = param;
};
const onDisableDown = (param) => {
  disableDown.value = param;
};
const onClickDown = () => {
  if (unref(activeKey) === "1") {
    cardRef1.value.handleClickDown();
  } else if (unref(activeKey) === "2") {
    cardRef2.value.handleClickDown();
  } else if (unref(activeKey) === "3") {
    cardRef3.value.handleClickDown();
  }
};
const onClickUp = () => {
  if (unref(activeKey) === "1") {
    cardRef1.value.handleClickUp();
  } else if (unref(activeKey) === "2") {
    cardRef2.value.handleClickUp();
  } else if (unref(activeKey) === "3") {
    cardRef3.value.handleClickUp();
  }
};

provide("onDisableUp", onDisableUp);
provide("onDisableDown", onDisableDown);

const handleClickTab = () => {
  if (unref(activeKey) === "1") {
    cardRef1.value.handleClickTab();
  } else if (unref(activeKey) === "2") {
    cardRef2.value.handleClickTab();
  } else if (unref(activeKey) === "3") {
    cardRef3.value.handleClickTab();
  }
};

const handleChange = () => {
  nextTick(() => handleClickTab());
};
</script>
