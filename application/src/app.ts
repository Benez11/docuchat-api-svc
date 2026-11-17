import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";
import { z } from "zod";

const app = express();

app.use(cors());
app.use(helmet());
app.use(pinoHttp({ logger: pino() }));

export default app;
