import { ref, unref, inject, onMounted, watch } from "vue";

const useDisable = (activeKey, onDisableUp, onDisableDown) => {
  if (unref(activeKey).length === 3) {
    onDisableUp(false);
    onDisableDown(true);
  } else if (unref(activeKey).length !== 0) {
    onDisableUp(false);
    onDisableDown(false);
  } else if (unref(activeKey).length === 0) {
    onDisableUp(true);
    onDisableDown(false);
  }
};

export { useDisable };
