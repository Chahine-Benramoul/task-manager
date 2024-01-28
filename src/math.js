const calculateTip = (total, tipPercent = .25) => (total * tipPercent) + total

const fahrenToCel = (temp) => (temp - 32) / 1.8

const celToFahren = (temp) => (temp * 1.8) + 32

module.exports = {
    calculateTip,
    fahrenToCel,
    celToFahren
}