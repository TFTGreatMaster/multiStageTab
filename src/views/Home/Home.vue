<template>
  <main id="Home-page">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Tab 1"><Card /></a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render><Card /></a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3"><Card /></a-tab-pane>
      <template #rightExtra>
        <a-button :disabled="disableDown" v-on:click.stop="onClickDown">
          <DownOutlined
        /></a-button>
        <a-button :disabled="disableUp" v-on:click.stop="onClickUp">
          <UpOutlined
        /></a-button>
      </template>
    </a-tabs>
  </main>
</template>

<script lang="ts" setup>
import { ref, provide, onMounted } from "vue";
import Card from "./Card.vue";
import { DownOutlined, UpOutlined } from "@ant-design/icons-vue";

const activeKey = ref("1");

const disableUp = ref(true);
const disableDown = ref(false);

const onDisableUp = (param) => {
  // console.log("🚀 ~ file: Home.vue:30 ~ onDisableUp ~ param:", param);
  disableUp.value = param;
};
const onDisableDown = (param) => {
  // console.log("🚀 ~ file: Home.vue:33 ~ onDisableDown ~ param:", param);
  disableDown.value = param;
};
const onClickDown = (param) => {
  // console.log("🚀 ~ file: Home.vue:38 ~ param:", param);
};
const onClickUp = (param) => {
  // console.log("🚀 ~ file: Home.vue:41 ~ onClickUp ~ param:", param);
};

provide("onDisableUp", onDisableUp);
provide("onDisableDown", onDisableDown);
provide("onClickUp", onClickUp);
provide("onClickDown", onClickDown);
</script>
