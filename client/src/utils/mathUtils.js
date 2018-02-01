export const feetToInches = (feet) => {
    return feet * 12;
};

export const bmiCalc = (weight, height) => {
    // https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_2.html
    const factor = Math.pow(10, 1);
    return Math.round(((weight / (height * height)) * 703) * factor) / factor;
};
