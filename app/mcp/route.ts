import { createMcpHandler } from "mcp-handler";

const handler = createMcpHandler(async (server) => {
  server.registerTool(
    "hello",
    {
      title: "Hello Tool",
      description: "Shows Hello Widget",
      inputSchema: {},
    },
    async () => ({
      content: [
        {
          type: "text",
          text: "Hello Manas 👋",
        },
      ],

      _meta: {
        "openai/outputTemplate": "/widget",
      },
    })
  );
});

export { handler as GET, handler as POST };