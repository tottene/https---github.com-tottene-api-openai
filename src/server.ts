import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generation-ai-completion";
import { getAllPromptsRoute } from "./routes/list-prompts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({
    port: 3000,
}).then(() => {
    console.log(`Running on PORT 3000`)
})