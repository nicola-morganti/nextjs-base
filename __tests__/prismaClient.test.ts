import { PrismaClient } from "@prisma/client";

jest.mock("@prisma/client", () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      user: {
        findUnique: jest
          .fn()
          .mockResolvedValue({
            id: 1,
            name: "Test User",
            email: "test@example.com",
          }),
      },
    })),
  };
});

describe("Prisma Client Mock", () => {
  it("should mock user findUnique", async () => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({ where: { id: 1 } });
    expect(user).toEqual({
      id: 1,
      name: "Test User",
      email: "test@example.com",
    });
  });
});
