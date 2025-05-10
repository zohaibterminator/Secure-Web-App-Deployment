/**
 * This file contains intentional violations to test SonarQube quality gates
 * Remove after testing your CI/CD pipeline failure scenario
 */

export {};

// 1. Security Hotspot - Hardcoded credentials
const DB_PASSWORD = 'admin123'; // sonar: Hardcoded credentials are security risks

// 2. Bug - Unused variable
const unusedVariable = 'This will never be used'; // sonar: Remove this unused variable

// 3. Code Smell - Empty function
function emptyFunction() { // sonar: Add a comment or implement this function
}

// 4. Duplicated code (copy this block to another file to trigger duplication)
export function duplicateCodeExample() { // sonar: Duplicated code
    const a = 1;
    const b = 2;
    return a + b;
}

// 5. Cognitive Complexity
export function overlyComplexFunction(condition: boolean) { // sonar: Refactor to reduce complexity
    if (condition) {
        for (let i = 0; i < 10; i++) {
            while (i < 5) {
                try {
                    emptyFunction();
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message);
                    }
                }
            }
        }
    } else {
        switch (condition) {
            case false:
                break;
            default:
                return;
        }
    }
}

// 6. Potential bug - Missing type checking
export function unsafeTypeOperation(obj: any) { // sonar: Avoid using the 'any' type
    return obj * 2;
}

// 7. Vulnerability - Console logging sensitive data
export function logSensitiveData() {
    console.log('User password: ', DB_PASSWORD); // sonar: Don't log sensitive data
}

// 8. Bad practice - == instead of ===
export function looseEqualityCheck(a: number, b: string) {
    return a == b; // sonar: Use === instead of ==
}

// 9. Unhandled promise rejection
export async function unhandledPromise() {
    return new Promise((_, reject) => {
        reject(new Error('This promise always rejects')); // sonar: Handle this rejection
    });
}

// 10. Dead code
if (false) { // sonar: Remove this unreachable code
    console.log('This will never execute');
}