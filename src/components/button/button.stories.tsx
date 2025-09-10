import type { Meta, StoryObj } from "@storybook/your-framework";

import Button from "./button";

const meta = {
  title: "Button 按钮",
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
  render: () => {
    return (
      <>
        <Button>default</Button>
        <Button color="primary">primary</Button>
        <Button color="danger">danger</Button>
        <Button color="success">success</Button>
        <Button color="warning">warning</Button>
      </>
    );
  },
};
export const Size: Story = {
  render: () => {
    return (
      <>
        <Button color="primary" size="mini">
          mini
        </Button>
        <Button color="primary" size="small">
          small
        </Button>
        <Button color="primary" size="middle">
          middle
        </Button>
        <Button color="primary" size="large">
          large
        </Button>
      </>
    );
  },
};
export const Fill: Story = {
  render: () => {
    return (
      <>
        <Button color="primary" fill="solid">
          solid
        </Button>
        <Button color="primary" fill="outline">
          outline
        </Button>
        <Button color="primary" fill="none">
          none
        </Button>
      </>
    );
  },
};
export const Shape: Story = {
  render: () => {
    return (
      <>
        <Button color="primary" shape="default">
          default
        </Button>
        <Button color="primary" shape="rounded">
          rounded
        </Button>
        <Button color="primary" shape="rectangular">
          rectangular
        </Button>
      </>
    );
  },
};
export const Block: Story = {
  render: () => {
    return (
      <>
        <Button color="primary" block>
          default
        </Button>
      </>
    );
  },
};
export const Loading: Story = {
  render: () => {
    return (
      <>
        <Button color="primary" loading>
          加载中...
        </Button>
        <Button loading>加载中...</Button>
      </>
    );
  },
};
export const Disabled: Story = {
  render: () => {
    return (
      <>
        <Button color="primary" disabled>
          disabled
        </Button>
        <Button disabled>disabled</Button>
      </>
    );
  },
};
