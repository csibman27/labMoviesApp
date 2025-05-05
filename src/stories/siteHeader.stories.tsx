import React from "react";
import SiteHeader from "../components/siteHeader";
import { MemoryRouter } from "react-router";
import type { Meta, StoryObj } from "@storybook/react";

// 🧠 Import your context (adjust the path to where your AuthContext is defined)
import { AuthContext } from "../contexts/authContext"; // <-- Update this path if needed

// ✅ Define a mock context value
const mockAuthContextValue = {
  signout: () => {
    console.log("Mock signout called");
  },
  // Add other values your component expects from the context
};

const meta = {
  title: "App Header",
  component: SiteHeader,
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter initialEntries={["/"]}>
        <AuthContext.Provider value={mockAuthContextValue}>
          <Story />
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
Basic.storyName = "Default";

