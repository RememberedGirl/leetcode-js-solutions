
// Additional setup for browser testing
if (typeof document !== 'undefined') {
    /**
     * Example usage: Merge two arrays and display the result
     */


    renderMergedArray(
        ...markMeanInSourceBinary(
            ... mergeWithSourceInfo(
                [1,2,3,4,5],
                [1,2,3,4,5]
            )
        )
    );

    renderMergedArray(
        ...markMeanInSourceBinary(
            ... mergeWithSourceInfo(
                [0, 2, 4,44, 444, 555, 666],
                [-10, 0 , 0, 0,0, 0, 1, 3, 5, 100]
            )
        )
    );

    renderMergedArray(
        ...markMeanInSourceBinary(
            ... mergeWithSourceInfo(
                [ ],
                [1,2,3,4,5]
            )
        )
    );


}
