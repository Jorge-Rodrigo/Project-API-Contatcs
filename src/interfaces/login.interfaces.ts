import { z } from "zod";
import { createLoginSchema } from "../schemas";

type tLoginReq = z.infer<typeof createLoginSchema>;

export { tLoginReq };
