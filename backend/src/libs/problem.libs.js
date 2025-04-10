import { db } from "./db.js";
import axios from "axios";

export function getJudge0LanguageId(language) {
    const languageMap = {
        "PYTHON": 71,
        "JAVASCRIPT": 63,
        "JAVA": 62,
        "CPP": 54,
        "GO": 60,
    };
    return languageMap[language.toUpperCase()];
}

// Poll Judge0 for result until it's no longer "In Queue" or "Processing"
export async function getJudge0Result(token) {
    let result;
    while (true) {
        const response = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/${token}`);
        result = response.data;
        if (result.status.id !== 1 && result.status.id !== 2) break;
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    return result;
}