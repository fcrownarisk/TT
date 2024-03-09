
type ComplexNumber={
    real:number,
    imaginary:number
}
function WaveFunction(x: number, mass: number, frequency: number): ComplexNumber{
    // The ground state wave function of a simple harmonic oscillator is given by:
    // ψ(x) = (mω/2π)^(1/2) * e^(-mωx^2/2)
    const omega = Math.sqrt(frequency * frequency * mass / (2 * Math.PI))
    const amplitude = Math.sqrt(mass * frequency / (2 * Math.PI))
    const realPart = amplitude * Math.cos(omega * x)
    const imaginaryPart = amplitude * Math.sin(omega * x)
    return { real: realPart, imaginary: imaginaryPart}
}
const x = 0 
const mass = 1
const frequency = 1

const waveFunction = WaveFunction(x, mass, frequency)
console.log(`${waveFunction.real} + ${waveFunction.imaginary}i`)