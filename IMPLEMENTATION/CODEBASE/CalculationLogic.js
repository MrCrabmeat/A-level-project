
// CONSTANTS.JSON directory path: ./FILES/CONSTANTS.JSON
const constantsFile = "./FILES/CONSTANTS.JSON";
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

// Inputs get assigned to into an array
function inputHandler(userInputs) {
    let inputArr = {};
    let i = 0;
    while (i < userInputs.length) {
        const variable = `Variable${i+1}`;
        // Creates dynamic variable copies to prevent corruption of
        // the original inputs
        inputArr[variable] = userInputs[i];
        // assigns a variable for each input
        i++;
    }
    return inputArr;
}

// once the variables are established, the next stage is to
// pass these onto a logic handler to for control over the
// complication of each variable.
function logicHandler(inputArr, constants) {
    // Unpackage the inputArr contents from its object.
    const values = Object.values(inputArr);
    // This unpackage reformats the object into an array
    // so the data can easily be applied to variables.

    // ADD MANUAL EXPERIMENT SPECIFIC VARIABLES HERE:
    const test = {value: values[0], unit: "m/s", expo: 1};
    // example - must use const as it is a reactant
    // NOT product.
    const {electronMass} = constants; /// placeholder
    // using this rather than: const x = constants.x
    // ensures the value is undefined rather than throwing
    // a type-error and crashing.
}
