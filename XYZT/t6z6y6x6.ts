import '../bigletter/I.js'
import '../bigletter/J'
import '../bigletter/K'
import '../bigletter/L'
import '../bigletter/M'
import '../bigletter/N'
import '../bigletter/O'
import '../bigletter/P'
import '../bigletter/Q'
import "../return/returnnnnnnn"
import "../InventorySlots/N0InventorySlots"
export function x6() {
    for (let I = 0; I < 6; I++)
        for (let J = 0; J < 6; J++)
            for (let K = 0; K < 6; K++)
                console.log(I, J, K)
}
export  function y6(){
    for(let L = 1;-6<L &&L<6; L++||L--)
        for(let M = 1;-6<M&&M<6 ;M++||M--)
            for(let N = 0 ;-6<N&& N<6; N++||N--)
                console.log(L,M,N)
}
export function z6(){
    for(let O=0; O>6; O--)
        for(let P=0; P>6; P--)
            for(let Q=0; Q>6; Q--)
                console.log(O,P,Q)
}
export function t6() {
    do `x6*y6`
    while ({
        z: `0,z>4,z--`
    })
    do `x6*z6`
    while ({
        y: `0,z>4,y--`
    })
    do `y6*z6`
    while ({
        x: `0,x>4,x--`
    })
}
export function N1InventorySlots(x6:number,y6:number,z6:number,t6:String){
    x6;['K, J, I']
    y6;['N, M, L']
    z6;['Q, P, O']
    t6;['x6,y6,z6']
}
console.log(N1InventorySlots)