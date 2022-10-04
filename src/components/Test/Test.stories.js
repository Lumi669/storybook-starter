import Test from "./Test.js";

export default {
  title: "Example/Test",
  component: Test,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Component = () => <Test />;
