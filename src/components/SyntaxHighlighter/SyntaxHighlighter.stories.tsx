import { Meta, StoryObj } from "@storybook/react";
import { SyntaxHighlighter } from "./SyntaxHighlighter";
import React from "react";

const meta: Meta<typeof SyntaxHighlighter> = {
  component: SyntaxHighlighter,
  parameters: {
    chromatic: { delay: 300 },
  },
};

export default meta;

type Story = StoryObj<typeof SyntaxHighlighter>;

const newData = [
  [
    {
      content: `// Button.stories.tsx`,
    },
  ],
  [
    {
      content: `import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';`,
    },
  ],
  [
    {
      content: `const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  ...
};
    
export default meta;`,
    },
  ],
  [
    { content: `export const Primary: Story = {` },
    {
      content: `  args: {
    primary: true,
    label: 'Click',
    background: 'red',
  },`,
      toggle: true,
    },
    { content: `};` },
  ],
  [
    {
      content: `// Copy the code below

  export const Warning: Story = {
    args: {
      backgroundColor: 'red',
      label: 'Delete now',
    },
  };`,
    },
  ],
];

export const Default: Story = {
  render: (args) => {
    const [activeStep, setActiveStep] = React.useState(1);

    return (
      <div>
        <SyntaxHighlighter {...args} activeStep={activeStep} />
        <button onClick={() => setActiveStep(0)}>Reset</button>
        <button onClick={() => setActiveStep((step) => step - 1)}>
          Previous
        </button>
        <button onClick={() => setActiveStep((step) => step + 1)}>Next</button>
      </div>
    );
  },
  args: {
    contents: newData,
    activeStep: 1,
    width: "50%",
  },
};
