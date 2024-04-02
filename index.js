import app from "./src/app/app.js";
import { PORT } from "./src/config/config.js"

app.listen(PORT);

console.log("Server on port", PORT);

