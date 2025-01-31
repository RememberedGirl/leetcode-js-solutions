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
    source[closestIndex] += 2;

    return [merged, source];
};

/**
 * Finds the median of two sorted arrays in O(log(m + n)) time.
 * @param {number[]} nums1 - First sorted array.
 * @param {number[]} nums2 - Second sorted array.
 * @return {number} - Median of the two arrays.
 */


const markMedianInSource = function(merged, source) {
    const n = merged.length;

    if (n === 0) return; // No elements to process

    let medianIndex;

    if (n % 2 === 1) {
        // Odd number of elements, single median
        medianIndex = Math.floor(n / 2);
        source[medianIndex] += 2;
    } else {
        // Even number of elements, between two elements
        const leftIndex = n / 2 - 1;
        const rightIndex = n / 2;
        source[leftIndex] += 2;
        source[rightIndex] += 2;
    }

    return [merged, source];
};







/**
 * Finds the median of two sorted arrays in O(log(m + n)) time.
 * @param {number[]} nums1 - First sorted array.
 * @param {number[]} nums2 - Second sorted array.
 * @return {number} - Median of the two arrays.
 */
const findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        // Swap nums1 and nums2 to ensure nums1 is the smaller array
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length; // Length of the first array
    const n = nums2.length; // Length of the second array
    let low = 0; // Start of the search range in nums1
    let high = m; // End of the search range in nums1

    // Perform a binary search
    while (low <= high) {
        const partition1 = Math.floor((low + high) / 2); // Calculate the partition index for nums1
        const partition2 = Math.floor((m + n + 1) / 2) - partition1; // Calculate the partition index for nums2

        // Handle edges of the partitions
        // maxLeft1 is the maximum element on the left side of partition1 in nums1
        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        // minRight1 is the minimum element on the right side of partition1 in nums1
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];

        // maxLeft2 is the maximum element on the left side of partition2 in nums2
        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        // minRight2 is the minimum element on the right side of partition2 in nums2
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];

        // Check if we have found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Correct partition found
            // Check if the total length of both arrays is even
            if ((m + n) % 2 === 0) {
                // When even, the median is the average of two middle values
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                // When odd, the median is the maximum of the left side
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // If maxLeft1 is too large, move the partition1 to the left
            high = partition1 - 1;
        } else {
            // If maxLeft2 is too large, move the partition1 to the right
            low = partition1 + 1;
        }
    }

    // If we exit the loop, it means the input arrays were not sorted or invalid.
    throw new Error("Input arrays are not sorted or invalid.");
};






const renderMergedArray = function(merged, source) {
    /**
     * Displays a merged array with lower boundaries color-coded based on their source.
     * @param {number[]} merged - Merged array of elements.
     * @param {number[]} source - Binary source array indicating origin of each element.
     */

    const output = document.getElementById('output');

    // Убедитесь, что контейнер output занимает всю ширину
    output.style.display = 'flex'; // Используем flexbox для выравнивания
    output.style.alignItems = 'center'; // Центрируем содержимое вертикально
    output.style.flexDirection = 'column'; // Устанавливаем вертикальное направление

    // Create table
    const table = document.createElement('table');
    // table.style.borderCollapse = 'collapse';
    table.style.margin = '20px 0';

    const row = document.createElement('tr');

    merged.forEach((value, index) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        cell.style.border = '1px solid #999';
        cell.style.width = '30px';
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