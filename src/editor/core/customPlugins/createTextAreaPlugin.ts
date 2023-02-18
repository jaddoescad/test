import { createPluginFactory } from "@udecode/plate";

export const ElEMENT_TEXTEREA = "textarea";

export const createTextAreaPlugin = createPluginFactory({
  key: ElEMENT_TEXTEREA,
  isElement: true,
  isVoid: true
});
