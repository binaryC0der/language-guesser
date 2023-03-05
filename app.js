import { franc, francAll } from "franc";
import colors from "colors";
import Langs from "langs";


const userInput = process.argv[2];
let lang_code = franc(userInput);

if (lang_code === "und") {
    console.log("Could not find a language match.".red);
}
else {
    if (!Langs.where("3", lang_code)) {
        console.log("Language not supported.".red); // in case of hindi
    }
    else {
        console.log(Langs.where("3", lang_code).name.green);
    }
}