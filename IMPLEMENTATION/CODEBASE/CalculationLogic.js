
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
                let constants = fileAccess.json();
                // converts into JSON data
                return Object.freeze(constants);}
            // sets constants access as single source of truth
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



// Constant
class calculationLogic {
    constructor(constants) {
        this.constants = constants;
    }
}