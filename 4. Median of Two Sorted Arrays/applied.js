/**
 * Merges two sorted arrays and returns:
 * 1. A merged array of elements.
 * 2. A binary array indicating the source of each element (0 for nums1, 1 for nums2).
 * @param {number[]} nums1 - First sorted array.
 * @param {number[]} nums2 - Second sorted array.
 * @return {[number[], number[]]} - [Merged array, Binary source array].
 */
const mergeWithSourceInfo = function(nums1, nums2) {
    const merged = [];
    const source = []; // Binary array to track source of elements

    let i = 0, j = 0;

    // Merge while maintaining sorted order
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            source.push(0); // 0 indicates nums1
            i++;
        } else {
            merged.push(nums2[j]);
            source.push(1); // 1 indicates nums2
            j++;
        }
    }

    // Append remaining elements from nums1
    while (i < nums1.length) {
        merged.push(nums1[i]);
        source.push(0);
        i++;
    }

    // Append remaining elements from nums2
    while (j < nums2.length) {
        merged.push(nums2[j]);
        source.push(1);
        j++;
    }

    return [merged, source];
};



/**
 * Finds the mean (average) of the merged array and updates the source array.
 * Adds 2 to the source array for the element equal to or closest to the mean.
 * @param {number[]} merged - Merged array of elements (sorted).
 * @param {number[]} source - Binary source array to be updated.
 * @return {[number[], number[]]} - Updated merged and source arrays.
 */
const markMeanInSourceBinary = function(merged, source) {
    const n = merged.length;

    if (n === 0) return [merged, source]; // No elements to process

    // Calculate mean (average)
    const sum = merged.reduce((acc, value) => acc + value, 0);
    const mean = sum / n;

    let low = 0;
    let high = n - 1;
    let closestIndex = -1;
    let closestDiff = Infinity;

    // Binary search to find the element closest to the mean
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const diff = Math.abs(merged[mid] - mean);

        if (diff < closestDiff) {
            closestDiff = diff;
            closestIndex = mid;
        }

        if (merged[mid] < mean) {
            low = mid + 1;
        } else if (merged[mid] > mean) {
            high = mid - 1;
        } else {
            // If we find an exact match, we can stop
            closestIndex = mid;
            break;
        }
    }

    // Mark the element closest to the mean in the source array
    source[closestIndex] = 2;

    return [merged, source];
};




const renderMergedArray = function(merged, source) {
    /**
     * Displays a merged array with lower boundaries color-coded based on their source.
     * @param {number[]} merged - Merged array of elements.
     * @param {number[]} source - Binary source array indicating origin of each element.
     */

    const output = document.getElementById('output');

    // Create table
    const table = document.createElement('table');
    // table.style.borderCollapse = 'collapse';
    table.style.margin = '20px 0';

    const row = document.createElement('tr');

    merged.forEach((value, index) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        cell.style.border = '1px solid #999';
        cell.style.padding = '5px 10px';
        cell.style.textAlign = 'center';
        cell.style.fontSize = '18px';

        // Apply color-coded lower boundary
        switch (source[index]) {
            case 0:
            case 2:
                cell.style.borderBottomColor = 'green';
                break;
            case 1:
            case 3:
                cell.style.borderBottomColor = '#00aaff'; // Синий
                break;
            default:
                cell.style.borderBottomColor = 'transparent'; // Если значение не попадает в условия
                break;
        }

        if (source[index] === 2 || source[index] === 3) {
            cell.style.borderTopColor = 'red';

        }
        cell.style.borderTopWidth = '8px';
        cell.style.borderBottomWidth = '8px';

        row.appendChild(cell);
    });

    table.appendChild(row);
    output.appendChild(table);
};