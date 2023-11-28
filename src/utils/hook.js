import { ref } from "vue";

import { MODE } from "./constants";

export const useLoading = () => {
  const isLoading = ref(false);

  const setLoading = (status) => {
    isLoading.value = status;
  };

  return {
    isLoading,
    setLoading,
  };
};

export const useModal = () => {
  const isVisible = ref(false);

  const showModal = () => (isVisible.value = true);

  const hideModal = () => (isVisible.value = false);

  return {
    isVisible,
    showModal,
    hideModal,
  };
};

export const useMode = () => {
  const modeRef = ref(MODE.ADD);

  const setMode = (mode) => (modeRef.value = mode);

  return {
    modeRef,
    setMode,
  };
};
