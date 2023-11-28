<template>
  <main>
    <a-button type="primary" @click="showModal">Thêm mới</a-button>
    <a-table
      :data-source="dataTable"
      :columns="columnsTable"
      :pagination="false"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'action'">
          <span>Thao tác </span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span
            v-for="action in column.actions"
            :key="action.key"
            @click="() => action.onClick(record)"
          >
            <a-tooltip>
              <template #title>{{ action.tooltip }}</template>
              <Icon>
                <template #component><component :is="action.type" /></template>
              </Icon>
            </a-tooltip>
          </span>
        </template>
      </template>
    </a-table>

    <!-- modal -->

    <Modal ref="modalRef" @submit="handleGetData" />
  </main>
</template>

<script setup>
import { ref, onMounted, unref, computed } from "vue";
import Icon from "@ant-design/icons-vue";

import { columns } from "./data";
import Modal from "./Modal.vue";
import { businessApi } from "../../api";
import { useLoading } from "../../utils/hook";
import { MODE } from "../../utils/constants";

const tableLoading = useLoading();

const Api = businessApi();

const modalRef = ref(null);

const dataTable = ref([]);

const columnsTable = columns();

const handleGetData = async () => {
  tableLoading.setLoading(true);
  try {
    const data = await Api.getApi();
    dataTable.value = data;
  } catch (e) {
    console.log("getData lỗi rồi", e);
  } finally {
    tableLoading.setLoading(false);
  }
};

const showModal = () => {
  unref(modalRef).showModal();
  unref(modalRef).setMode(MODE.ADD);
};

onMounted(() => {
  handleGetData();
});
</script>
