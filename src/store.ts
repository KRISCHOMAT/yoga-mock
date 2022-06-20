import { reactive } from "vue";

export const store = reactive({
  isModal: false,
  modalTitle: "" as string | undefined,
  userEmail: "" as string | undefined,
});

export function register(
  email: string,
  name: string,
  event: string | undefined
) {
  console.log(`register ${email} ${name} for ${event}`);
  store.modalTitle = "";
  store.userEmail = "";
}
