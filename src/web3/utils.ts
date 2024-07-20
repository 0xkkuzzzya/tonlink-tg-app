export function toFixed(x: number, d: number) {
        if (!d) return x.toFixed(d); // don't go wrong if no decimal
        return x.toFixed(d).replace(/\.?0+$/, '');
}