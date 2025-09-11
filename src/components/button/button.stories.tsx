import type { Meta, StoryObj } from "@storybook/your-framework";
import { action } from "storybook/actions";
import Button from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "设置按钮的颜色",
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "default | primary | success | warning | danger",
        },
      },
    },
    size: {
      description: "设置按钮大小",
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "mini | small | middle | large",
        },
      },
    },
    fill: {
      description: "设置填充状态",
      table: {
        defaultValue: { summary: "solid" },
        type: {
          summary: "solid | outline | none",
        },
      },
    },
    shape: {
      description: "设置按钮的形状",
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "default | rounded | rectangular",
        },
      },
    },
    className: {
      description: "自定义样式名",
    },
    disabled: {
      description: "设置按钮失效状态",
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    block: {
      description: "是否是块级元素",
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    loading: {
      description: "是否处于加载状态",
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Color: Story = {
  name: "语义按钮",
  render: () => {
    return (
      <>
        <Button onClick={action("clicked")}>default</Button>
        <Button color="primary" onClick={action("clicked")}>
          primary
        </Button>
        <Button color="danger" onClick={action("clicked")}>
          danger
        </Button>
        <Button color="success" onClick={action("clicked")}>
          success
        </Button>
        <Button color="warning" onClick={action("clicked")}>
          warning
        </Button>
      </>
    );
  },
};
export const Size: Story = {
  name: "按钮尺寸",
  render: () => {
    return (
      <>
        <Button color="primary" size="mini" onClick={action("clicked")}>
          mini
        </Button>
        <Button color="primary" size="small" onClick={action("clicked")}>
          small
        </Button>
        <Button color="primary" size="middle" onClick={action("clicked")}>
          middle
        </Button>
        <Button color="primary" size="large" onClick={action("clicked")}>
          large
        </Button>
      </>
    );
  },
};
export const Fill: Story = {
  name: "填充模式",
  render: () => {
    return (
      <>
        <Button color="primary" fill="solid" onClick={action("clicked")}>
          solid
        </Button>
        <Button color="primary" fill="outline" onClick={action("clicked")}>
          outline
        </Button>
        <Button color="primary" fill="none" onClick={action("clicked")}>
          none
        </Button>
      </>
    );
  },
};
export const Shape: Story = {
  name: "形状",
  render: () => {
    return (
      <>
        <Button color="primary" shape="default" onClick={action("clicked")}>
          default
        </Button>
        <Button color="primary" shape="rounded" onClick={action("clicked")}>
          rounded
        </Button>
        <Button color="primary" shape="rectangular" onClick={action("clicked")}>
          rectangular
        </Button>
      </>
    );
  },
};
export const Block: Story = {
  name: "块级按钮",
  render: () => {
    return (
      <>
        <Button color="primary" block onClick={action("clicked")}>
          default
        </Button>
      </>
    );
  },
};
export const Loading: Story = {
  name: "加载状态",
  render: () => {
    return (
      <>
        <Button color="primary" loading onClick={action("clicked")}>
          加载中...
        </Button>
        <Button loading onClick={action("clicked")}>
          加载中...
        </Button>
      </>
    );
  },
};
export const Disabled: Story = {
  name: "禁用状态",
  render: () => {
    return (
      <>
        <Button color="primary" disabled onClick={action("clicked")}>
          disabled
        </Button>
        <Button disabled onClick={action("clicked")}>
          disabled
        </Button>
      </>
    );
  },
};
