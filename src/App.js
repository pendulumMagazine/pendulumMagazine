import Routes from "./routes/Routes";
import Parse from "parse/dist/parse.min.js";

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "ZpYGXIMQurwcOeqgeMZZi7G4xAFDBUf1cIFlQlBD";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "ku1PQ4sBlJFYCOhYMmrNcGDk5iZs60oCxxIH5KMr";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
