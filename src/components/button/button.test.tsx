import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const disabledProps = {
  onClick: jest.fn(),
};

const loadingProps = {
  onClick: jest.fn(),
};
// https://testing-library.com/文档
describe("测试按钮组件", () => {
  it("按钮默认属性测试", async () => {
    const wrapper = render(<Button {...defaultProps}>test</Button>);
    const element = wrapper.getByText("test");
    // 判断是否是BUTTON按钮
    expect(element.tagName).toEqual("BUTTON");
    // 判断是否有想要的样式
    expect(element).toHaveClass("cms-button cms-button__default");
    // 按钮点击事件
    fireEvent.click(element);
    // 模拟点击
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("按钮color、fill、size、rectangular、block、className属性测试", async () => {
    const wrapper = render(
      <Button
        color="primary"
        fill="outline"
        size="mini"
        shape="rectangular"
        block
      >
        test
      </Button>
    );
    const element = wrapper.getByText("test");
    expect(element).toHaveClass(
      "cms-button__primary is-fill-outline is-mini is-shape-rectangular is-block"
    );
  });
  it("按钮禁用测试", async () => {
    const wrapper = render(
      <Button disabled {...disabledProps}>
        test
      </Button>
    );
    const element = wrapper.getByText("test") as HTMLButtonElement;
    expect(element.disabled).toBe(true);
    expect(element).toHaveClass("is-disabled");
    // 按钮点击事件
    fireEvent.click(element);
    // 模拟点击
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
  it("按钮loading测试", async () => {
    const wrapper = render(
      <Button disabled loading {...loadingProps}>
        test
      </Button>
    );
    const element = wrapper.getByText("test") as HTMLButtonElement;
    expect(element.disabled).toBe(true);
    expect(element).toHaveClass("is-disabled is-loading");
    // 按钮点击事件
    fireEvent.click(element);
    // 模拟点击
    expect(loadingProps.onClick).not.toHaveBeenCalled();
  });
});
