import {
  createAlignPlugin,
  ELEMENT_PARAGRAPH,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  createHeadingPlugin,
  createListPlugin,
  createTodoListPlugin,
  createParagraphPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
  createFontFamilyPlugin,
  createTablePlugin
} from "@udecode/plate";
import { createMyPlugins } from "../types/plateType";
import { components } from "./componentsUI";
import {
  createTextAreaPlugin,
  ElEMENT_TEXTEREA
} from "../customPlugins/createTextAreaPlugin";

export const plugins: any = createMyPlugins(
  [
    createParagraphPlugin(),
    createHeadingPlugin(),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ElEMENT_TEXTEREA
          ]
        }
      }
    }),
    createListPlugin(),
    createTodoListPlugin(),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createUnderlinePlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin({
      inject: {
        props: {
          defaultNodeValue: 14,
          validNodeValues: [10, 14, 16, 18, 20, 22, 24, 26, 28, 32],
          validTypes: [ELEMENT_PARAGRAPH, ElEMENT_TEXTEREA]
        }
      }
    }),
    createFontFamilyPlugin({
      inject: {
        props: {
          defaultNodeValue: "微软雅黑",
          validNodeValues: [
            "宋体",
            "黑体",
            "微软雅黑",
            "仿宋",
            "华文楷体",
            "华文琥珀",
            "华文行楷",
            "华文隶书"
          ],
          validTypes: [ELEMENT_PARAGRAPH, ElEMENT_TEXTEREA]
        }
      }
    }),
    createTextAreaPlugin(),
    createTablePlugin()
  ],
  { components }
);
