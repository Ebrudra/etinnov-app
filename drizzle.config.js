/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AITool_owner:I1xldQNR0pTF@ep-long-paper-a2dd8qhx.eu-central-1.aws.neon.tech/AITool?sslmode=require',
    }
  };