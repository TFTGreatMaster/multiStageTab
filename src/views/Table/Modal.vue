<template>
  <a-modal v-model:open="modal.isVisible.value" title="Thêm mới" @ok="handleOk">
    <a-form
      :model="DataForm"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 18 }"
      autocomplete="off"
    >
      <a-form-item
        label="Tên"
        name="name"
        :rules="[{ required: true, message: 'Vui lòng nhập tên!' }]"
      >
        <a-input v-model:value="DataForm.name" />
      </a-form-item>

      <a-form-item
        label="Tuổi"
        name="age"
        :rules="[{ required: true, message: 'Vui lòng nhập tuổi!' }]"
      >
        <a-input v-model:value="DataForm.age" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script setup>
import { ref, reactive } from "vue";

import { useModal, useMode } from "../../utils/hook";
import { businessApi } from "../../api";
import { useLoading } from "../../utils/hook";
import { MODE } from "../../utils/constants";

const Api = businessApi();
const modalLoading = useLoading();

const DataForm = reactive({
  id: null,
  name: "",
  age: "",
});

const modal = useModal();

const mode = useMode();

const emit = defineEmits(["submit"]);

const setData = (data) => {
  DataForm.id = data.id;
  DataForm.name = data.name;
  DataForm.age = data.age;
};

const closeModal = () => {
  DataForm.id = null;
  DataForm.name = "";
  DataForm.age = "";
  modal.hideModal();
};

const handleAdd = async () => {
  modalLoading.setLoading(true);
  try {
    const data = {
      name: DataForm.name,
      age: DataForm.age,
    };
    await Api.postApi(data);
    emit("submit");
    closeModal();
  } catch (e) {
    console.log("add hỏng rồi", e);
  } finally {
    modalLoading.setLoading(false);
  }
};

const handleUpdate = async () => {
  modalLoading.setLoading(true);
  try {
    const data = {
      name: DataForm.name,
      age: DataForm.age,
    };
    await Api.putApi(DataForm.id, data);
    emit("submit");
    closeModal();
  } catch (e) {
    console.log("add hỏng rồi", e);
  } finally {
    modalLoading.setLoading(false);
  }
};

const handleOk = async () => {
  if (mode.modeRef.value === MODE.ADD) return await handleAdd();
  if (mode.modeRef.value === MODE.ADD) return await handleUpdate();
};

defineExpose({
  showModal: modal.showModal,
  closeModal: modal.hideModal,
  setMode: mode.setMode,
  setData,
});
</script>
