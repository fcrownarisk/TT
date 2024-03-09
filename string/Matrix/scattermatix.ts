import '../equation/momentum'
import '../Matrix/wuwuMatrix'
import '../Matrix/tennetMatrix'
class Complex {
    constructor(public real: number, public imag: number) {}
    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imag + other.imag)
    }
    multiply(other: Complex): Complex {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        )
    }
    toString(): string {
        return `${this.real}${this.imag >= 0 ? '+' : '-'}${Math.abs(this.imag)}i`
    }
}
class ScatteringMatrix {
    private matrix: Complex[][]

    setElement(row: number, col: number, value: Complex): void {
        this.matrix[row][col] = value
    }
    getElement(row: number, col: number): Complex {
        return this.matrix[row][col]
    }
    multiply(other: ScatteringMatrix) {
        const result = new ScatteringMatrix()
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                let sum = new Complex(0, 0);
                for (let k = 0; k < this.matrix.length; k++) {
                    sum = sum.add(this.matrix[i][k].multiply(other.matrix[k][j]))
                }
                result.setElement(i, j, sum)
            }
        }
        return result
    }
    print(): void {
        for (let row of this.matrix) {
            console.log(row.map(element => element.toString()).join(' '))
        }
    }
}
export const S = new ScatteringMatrix()
console.log('getElement','multiply','print')

