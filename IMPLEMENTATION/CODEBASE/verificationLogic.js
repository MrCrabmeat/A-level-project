//Obtain the resultant data passed from the calculation logic
import {result} from './CalculationLogic.js';

// Parent function to handle verification and validation
function verifyResult(result) {
    // for number of objects in result
    for (let i in result) {
        if (!numericalTypeValidation(result[i])) {
            // If erroneous then output an error
            throw new Error(`numerical error on resultant "${i}"`)
        }
    }
    return true;
}

function numericalTypeValidation(result) {
    let valueTypeCheck = (typeof result.mantissa === 'number');
    //Number.isInteger is used 
    let exponentCheck = (Number.isInteger(result.expoExtract));
    // returns true if both are true and false if not
    return valueTypeCheck && exponentCheck;
}

export const verificationOutput = verifyResult(result);

