import { reactive } from "vue";

export const store = reactive({
  isModal: false,
  modalTitle: "" as string | undefined,
  userEmail: "" as string | undefined,
});
