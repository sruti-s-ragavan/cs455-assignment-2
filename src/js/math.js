export function multiply(a, b){
    return a * b;
}

export function power(a, b){
    if(b<0) throw new Error("Negative power is not supported");
    else return a ** b;
}