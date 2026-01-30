// nodeJS specific command to asynchronously load file contents:
import {readFileSync} from "node:fs";
// CONSTANTS.JSON directory path: ./FILES/CONSTANTS.JSON
const constantsFile = "../FILES/CONSTANTS.JSON";
// To ensure if the file was found, this function checks
// whether the import was successful.
async function fileImportChecker() {
    const fileFetchAttemptsLimit = 5;
    let varTime = 100 // exponential time delay between reattempts
    let catchReport = false;
    // CatchReport identifies if a fetch attempt throws an error

    // Set attempts to ensure that failure wasn't caused by
    // latency or slow browser processing.
    for (let i = 0; i < fileFetchAttemptsLimit; i++) {
        try {
            let fileAccess = await fetch(constantsFile);
            if (fileAccess.ok) {
                let constants = await fileAccess.json();
                // converts into JSON data - requires await to ensure
                // the data is passed for immunity
                return Object.freeze(constants);}
            // sets constants access as single source of truth,
            // reinforces the stability of the code by preventing
            // rounding or unwanted edits to occur in the return.
        } catch {catchReport = true;}
        await new Promise(timeOut => setTimeout(timeOut, varTime));
        varTime = varTime*2;
        // exponentially increases delay time to provide
        // a quick load for a mild delay and a large
        // await for large delays. Making initial loading fast
        // for user experience and slower for problematic loading for
        // reassurance that the file's access failed.
    }
    throw new Error(`failed to fetch ${constantsFile}`);
}
//NodeJS testing variation

async function fileImportCheckerNODEJS() {
    const fileFetchAttemptsLimit = 5;
    let varTime = 100 // exponential time delay between reattempts
    let catchReport = false;
    for (let i = 0; i < fileFetchAttemptsLimit; i++) {
        try {
            let fileAccess = readFileSync(constantsFile);
            // replaces fetch for Node.js - same purpose.
            const constants = JSON.parse(fileAccess)
            return Object.freeze(constants);
        } catch {catchReport = true;}
        await new Promise(timeOut => setTimeout(timeOut, varTime));
        varTime = varTime*2;
    }
    throw new Error(`failed to fetch ${constantsFile}`);
}



// Inputs get assigned to into an object
function inputHandler(userInputs) {
    return {
        // Input experiment specific variables here:
        velocity: userInputs[0], // temporary example
        velocityExpo: userInputs[1],
        voltage: userInputs[2],
        voltageExpo: userInputs[3],
    };
}

function logicHandler(inputObject, constants) {
    // ADD MANUAL EXPERIMENT SPECIFIC VARIABLES HERE:
    // must use const as it is a reactant - NOT product.
    const velocity = {value: inputObject.velocity, unit: "m/s", expo: inputObject.velocityExpo};
    const voltage = {value: inputObject.voltage, unit: "m^2/s^3/A", expo: inputObject.voltageExpo};
    const {electronMass} = constants; /// placeholders
    const {electronCharge} = constants;

    // Experimental equations go here:
    // example:
    // Electron Voltage dependant variable
    const result = {} // stores results
    // let x = ((y.value * 10^y.expo) *operation* (z.value * 10^z.expo))
    let electronVoltage = ((voltage.value * (10 ** voltage.expo))*(electronCharge.value * (10 ** electronCharge.expo)));
    // for exemplar purposes, assume voltage is being found
    // v = sqrt(2eV/m)
    let velocityExample = Math.sqrt((2 * electronVoltage)/(electronMass.value * (10 ** electronMass.expo)));
    result.velocity = objectConversion(velocityExample);
    return result;
}

function objectConversion(resultant) {
    try {
        const expoExtract = Math.floor(Math.log10(Math.abs(resultant)));
        const mantissa = resultant / (10 ** expoExtract);
        return {mantissa, expoExtract};
    }
    catch {new Error("Failed to convert resultant into object format");}
}
// test (temporary)
const constants = await fileImportCheckerNODEJS();
const inputs = inputHandler([7, 0, 8, 4]);
const result = logicHandler(inputs, constants);
console.log(constants);
console.log(result);