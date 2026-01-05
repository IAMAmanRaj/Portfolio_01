export const corsOptions = () => {
  const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
    : ["http://localhost:5173"];

  return {
    origin: allowedOrigins,
    credentials: true,
  };
};
