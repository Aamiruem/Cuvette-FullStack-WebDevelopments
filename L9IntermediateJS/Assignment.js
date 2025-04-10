// Add the method to Array prototype
Array.prototype.includesOneOf = function(searchElements) {
    // Handle empty search array case
    if (!Array.isArray(searchElements) || searchElements.length === 0) {
        return false;
    }

    // Check each element in the search array
    for (const searchElement of searchElements) {
        // For each element in the original array
        for (const arrayElement of this) {
            if (deepEqual(arrayElement, searchElement)) {
                return true;
            }
        }
    }
    
    return false;
};

// Helper function for deep equality comparison
function deepEqual(a, b) {
    // Primitive values comparison
    if (a === b) return true;
    
    // Handle null/undefined cases
    if (a == null || b == null) return false;
    
    // Handle Date comparison
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    
    // Handle Array comparison
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }
    
    // Handle Object comparison
    if (typeof a === 'object' && typeof b === 'object') {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        
        // Different number of properties
        if (aKeys.length !== bKeys.length) return false;
        
        // Check each property
        for (const key of aKeys) {
            if (!b.hasOwnProperty(key)) return false;
            if (!deepEqual(a[key], b[key])) return false;
        }
        return true;
    }
    
    // All other cases
    return false;
}

// Test cases
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includesOneOf([2, 8, 10])); // true
console.log(arr.includesOneOf([10, 11, 12])); // false
console.log(arr.includesOneOf([])); // false

const arr2 = [{name: 'James Bond', code: 'OO7'}, {name: 'Edward Donne', code: 'OO1'}];
console.log(arr2.includesOneOf([{name: 'James Bond', code: 'OO7'}])); // true
console.log(arr2.includesOneOf([{name: 'James Bond', code: 'OO7', organization: 'MI6'}])); // false

const arr3 = [[1, 22, 33, 4], [4, 55, 6, 772]];
console.log(arr3.includesOneOf([[1, 22, 33, 4]])); // true
console.log(arr3.includesOneOf([[1, 33, 22, 4]])); // false
