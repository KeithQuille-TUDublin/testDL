/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace DeepLearning {
    //% block
    export function ANN(attribute1:number, attribute2:number) {
        let myList =[
            [1,2,3],
            [4,5,6]
            ]

        return sigmoid(attribute1)
    }

    function sigmoid(x:number){

        return 1/(1+Math.exp(-(x)))
    }
}