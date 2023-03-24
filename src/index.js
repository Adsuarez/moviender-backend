import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT, () => {
  //the console log is on callback because listen method is asyncronous
  console.log(`Server is running on port ${PORT}`);
});
