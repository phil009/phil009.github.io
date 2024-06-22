const unitConversionRates = {
    length: {
        meters: { meters: 1, kilometers: 0.001, feet: 3.28084, miles: 0.000621371 },
        kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, miles: 0.621371 },
        feet: { meters: 0.3048, kilometers: 0.0003048, feet: 1, miles: 0.000189394 },
        miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280, miles: 1 }
    },
    temperature: {
        celsius: { celsius: 1, fahrenheit: (val) => val * 9/5 + 32, kelvin: (val) => val + 273.15 },
        fahrenheit: { celsius: (val) => (val - 32) * 5/9, fahrenheit: 1, kelvin: (val) => (val - 32) * 5/9 + 273.15 },
        kelvin: { celsius: (val) => val - 273.15, fahrenheit: (val) => (val - 273.15) * 9/5 + 32, kelvin: 1 }
    },
    area: {
        squareMeters: { squareMeters: 1, squareKilometers: 0.000001, squareFeet: 10.7639, acres: 0.000247105, hectares: 0.0001 },
        squareKilometers: { squareMeters: 1000000, squareKilometers: 1, squareFeet: 10763910.4, acres: 247.105, hectares: 100 },
        squareFeet: { squareMeters: 0.092903, squareKilometers: 0.000000092903, squareFeet: 1, acres: 0.0000229568, hectares: 0.0000092903 },
        acres: { squareMeters: 4046.86, squareKilometers: 0.00404686, squareFeet: 43560, acres: 1, hectares: 0.404686 },
        hectares: { squareMeters: 10000, squareKilometers: 0.01, squareFeet: 107639, acres: 2.47105, hectares: 1 }
    },
    volume: {
        liters: { liters: 1, milliliters: 1000, cubicMeters: 0.001, cubicFeet: 0.0353147, gallons: 0.264172 },
        milliliters: { liters: 0.001, milliliters: 1, cubicMeters: 0.000001, cubicFeet: 0.0000353147, gallons: 0.000264172 },
        cubicMeters: { liters: 1000, milliliters: 1000000, cubicMeters: 1, cubicFeet: 35.3147, gallons: 264.172 },
        cubicFeet: { liters: 28.3168, milliliters: 28316.8, cubicMeters: 0.0283168, cubicFeet: 1, gallons: 7.48052 },
        gallons: { liters: 3.78541, milliliters: 3785.41, cubicMeters: 0.00378541, cubicFeet: 0.133681, gallons: 1 }
    },
    speed: {
        metersPerSecond: { metersPerSecond: 1, kilometersPerHour: 3.6, milesPerHour: 2.23694, feetPerSecond: 3.28084 },
        kilometersPerHour: { metersPerSecond: 0.277778, kilometersPerHour: 1, milesPerHour: 0.621371, feetPerSecond: 0.911344 },
        milesPerHour: { metersPerSecond: 0.44704, kilometersPerHour: 1.60934, milesPerHour: 1, feetPerSecond: 1.46667 },
        feetPerSecond: { metersPerSecond: 0.3048, kilometersPerHour: 1.09728, milesPerHour: 0.681818, feetPerSecond: 1 }
    },
    weight: {
        grams: { grams: 1, kilograms: 0.001, milligrams: 1000, pounds: 0.00220462, ounces: 0.035274 },
        kilograms: { grams: 1000, kilograms: 1, milligrams: 1000000, pounds: 2.20462, ounces: 35.274 },
        milligrams: { grams: 0.001, kilograms: 0.000001, milligrams: 1, pounds: 0.00000220462, ounces: 0.000035274 },
        pounds: { grams: 453.592, kilograms: 0.453592, milligrams: 453592, pounds: 1, ounces: 16 },
        ounces: { grams: 28.3495, kilograms: 0.0283495, milligrams: 28349.5, pounds: 0.0625, ounces: 1 }
    },
    distance: {
        meters: { meters: 1, kilometers: 0.001, feet: 3.28084, miles: 0.000621371 },
        kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, miles: 0.621371 },
        feet: { meters: 0.3048, kilometers: 0.0003048, feet: 1, miles: 0.000189394 },
        miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280, miles: 1 }
    },
    power: {
        watts: { watts: 1, kilowatts: 0.001, horsepower: 0.00134102 },
        kilowatts: { watts: 1000, kilowatts: 1, horsepower: 1.34102 },
        horsepower: { watts: 745.7, kilowatts: 0.7457, horsepower: 1 }
    },
    pressure: {
        pascals: { pascals: 1, kilopascals: 0.001, bars: 0.00001, psi: 0.000145038 },
        kilopascals: { pascals: 1000, kilopascals: 1, bars: 0.01, psi: 0.145038 },
        bars: { pascals: 100000, kilopascals: 100, bars: 1, psi: 14.5038 },
        psi: { pascals: 6894.76, kilopascals: 6.89476, bars: 0.0689476, psi: 1 }
    }
};

export default unitConversionRates;
