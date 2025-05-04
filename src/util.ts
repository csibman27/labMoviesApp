import truncate from "lodash/truncate";

export const excerpt = (string: string) => {
    return truncate(string, {
        length: 400, // maximum 400 characters
        separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
    });
}


export const fakeAuth = async (email: string, password: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const validUsers: Record<string, string> = {
    "user1@1.com": "1234",
    "tibor.molnar@waltoninstitute.ie": "changemenow",
  };

  if (validUsers[email] === password) {
    return `${email}-token-xyz`;
  }

  throw new Error("Invalid email or password");
};


  