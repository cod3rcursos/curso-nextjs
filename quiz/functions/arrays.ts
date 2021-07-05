export function embaralhar(elementos: any[]): any[] {
    return elementos
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
        .map(obj => obj.valor)
}