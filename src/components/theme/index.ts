export interface IAnyObject {
  [propName: string]: any;
}

export interface IThemes {
  [propName: string]: {
    // 主题色
    "--cms-color-primary": string;
    // 成功色
    "--cms-color-success": string;
    // 警告色
    "--cms-color-warning": string;
    // 危险色
    "--cms-color-danger": string;
    // 标题色
    "--cms-text-color-title": string;
    // 正文色
    "--cms-text-color-content": string;
    // 禁用色
    "--cms-color-disabled": string;
    // 边框色
    "--cms-border-color": string;
    // 分割线
    "--cms-divider-color": string;
    // 背景色
    "--cms-background-color": string;
    // 白色
    "--cms-white": string;
    // 黑色
    "--cms-black": string;
  };
}

export const THEMES: IThemes = {
  default: {
    "--cms-color-primary": "#2d8cf0",
    "--cms-color-success": "#19be6b",
    "--cms-color-warning": "#ff9900",
    "--cms-color-danger": "#ed4014",
    "--cms-text-color-title": "#17233d",
    "--cms-text-color-content": "#515a6e",
    "--cms-color-disabled": "#c5c8ce",
    "--cms-border-color": "#dcdee2",
    "--cms-divider-color": "#e8eaec",
    "--cms-background-color": "#f8f8f9",
    "--cms-white": "#fff",
    "--cms-black": "#000",
  },
  defaultDark: {
    "--cms-color-primary": "#2d8cf0",
    "--cms-color-success": "#19be6b",
    "--cms-color-warning": "#ff9900",
    "--cms-color-danger": "#ed4014",
    "--cms-text-color-title": "#f8f8f9",
    "--cms-text-color-content": "#e8eaec",
    "--cms-color-disabled": "#dcdee2",
    "--cms-border-color": "#c5c8ce",
    "--cms-divider-color": "#515a6e",
    "--cms-background-color": "#17233d",
    "--cms-white": "#fff",
    "--cms-black": "#000",
  },
};
// 判断浏览器是否支持cssVar
const isSupportCssVar =
  window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
/**
 * cssVar格式话
 * @param themeJson 换肤JSON
 * @param isJoin 是否转化成JSON
 * @returns
 */
const formatCssVar = (
  themeJson: Record<string, string> = {},
  isJoin = true
) => {
  const cssvar = Object.keys(themeJson)
    .map((item) => `${item}:${themeJson[item]};\n`)
    .join("");
  return isJoin ? `:root{\n${cssvar}}` : cssvar;
};
/**
 *
 * @param variable 换肤JSON
 * @param selector 换肤style标签
 * @returns
 */
const cssRootVar = (
  themeJson: Record<string, string> = {},
  selector = "style[data-theme='theme']"
) => {
  const root = selector
    ? document.querySelector(selector) || document.createElement("style")
    : document.createElement("style");
  root.innerHTML = formatCssVar(themeJson);
  if (!root.getAttribute("data-theme")) {
    root.setAttribute("data-theme", "theme");
    const header = document.head || document.getElementsByName("head")[0];
    if (!header) return;
    header.appendChild(root);
  }
};
/**
 * 设置换肤
 * @param themeName 换肤名称
 * @param themes 所有主题
 */
export function setTheme(themeName: string, themes?: IThemes) {
  const themeList = themes || THEMES;
  if (!themeList[themeName]) {
    throw new Error("没有找到主题，请检查");
  }
  if (isSupportCssVar) {
    cssRootVar(themeList[themeName]);
  } else {
    document.documentElement.setAttribute("data-theme", themeName);
    import("css-vars-ponyfill").then((cssVars) => {
      cssVars.default({
        watch: true,
        variables: themeList[themeName],
        onlyLegacy: false,
      });
    });
  }
}
