import React from "react";
import SiteHeader from "../components/siteHeader";
import { MemoryRouter } from "react-router";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthContext } from "../contexts/authContext";

const mockAuthContextValue = {
  token: "moc-token",
  signout: () => {
    console.log("Mock signout called");
  },
  authenticate: async (username: string, password: string) => {
    console.log(`Mock authenticate called with ${username} / ${password}`);
  },
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

