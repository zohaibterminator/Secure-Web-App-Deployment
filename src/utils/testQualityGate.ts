/**
 * This file contains intentional violations to test SonarQube quality gates
 * Remove after testing your CI/CD pipeline failure scenario
 */

export {};

// 1. Security Hotspot - Hardcoded credentials
const DB_PASSWORD = 'admin123';

// 2. Bug - Unused variable
const unusedVariable = 'This will never be used';

// 3. Code Smell - Empty function
function emptyFunction() {
}

// 4. Duplicated code (copy this block to another file to trigger duplication)
export function duplicateCodeExample() {
    const a = 1;
    const b = 2;
    return a + b;
}

// 5. Cognitive Complexity
export function overlyComplexFunction(condition: boolean) {
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
    return null;
}

// 6. Potential bug - Missing type checking
export function unsafeTypeOperation(obj: any) {
    return obj * 2;
}

// 7. Vulnerability - Console logging sensitive data
export function logSensitiveData() {
    console.log('User password: ', DB_PASSWORD);
}

// 8. Bad practice - == instead of ===
export function looseEqualityCheck(a: number, b: string) {
    return a == b;
}

// 9. Unhandled promise rejection
export async function unhandledPromise() {
    return new Promise((_, reject) => {
        reject(new Error('This promise always rejects'));
    });
}

// 10. Dead code
if (false) {
    console.log('This will never execute');
}

export const testQualityGate = true;