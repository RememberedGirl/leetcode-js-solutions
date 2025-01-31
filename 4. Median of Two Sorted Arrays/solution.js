
// Additional setup for browser testing
if (typeof document !== 'undefined') {
    /**
     * Example usage: Merge two arrays and display the result
     */


    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [1,2,3,4,5],
                [1,2,3,4,5]
            )
        )
    );

    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [0, 2, 4,44, 444, 555, 666],
                [-10, 0 , 0, 0,0, 0, 1, 3, 5, 100]
            )
        )
    );

    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [ ],
                [1,2,3,4,5]
            )
        )
    );

    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [ 1,2,3,4,5],
                [-100,100]
            )
        )
    );


    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [ 1,2,3,4],
                [-100,100]
            )
        )
    );

    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [ 1,2,3,4],
                [6,7,8,9,10,11,12,13,14,15,16,17,18]
            )
        )
    );
    console.log(findMedianSortedArrays(
        [ 1,2,3,4],
        [6,7,8,9,10,11,12,13,14,15,16,17,18]
    ))

    renderMergedArray(
        ...markMedianInSource(
            ... mergeWithSourceInfo(
                [0],
                [-150,-50,-75, 50, 75,150]
            )
        )
    );


}
