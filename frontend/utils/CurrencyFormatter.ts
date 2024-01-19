export const formatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });

export const formatCents = (value: number) => formatter.format(value/100);