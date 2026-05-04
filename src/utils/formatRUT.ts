export function formatRUT(value: string) {
  const clean = value.replace(/\./g, "").replace(/-/g, "");

  if (clean.length <= 1) return clean;

  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);

  return `${body}-${dv}`;
}

export function isValidRUT(rut: string) {
  const clean = rut.replace(/\./g, "").replace(/-/g, "");

  if (clean.length < 8) return false;

  const body = clean.slice(0, -1);
  const dv = clean.slice(-1).toUpperCase();

  let sum = 0;
  let multiplier = 2;

  for (let i = body.length - 1; i >= 0; i--) {
    sum += Number(body[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const expected = 11 - (sum % 11);

  const dvCalc =
    expected === 11 ? "0" :
    expected === 10 ? "K" :
    String(expected);

  return dv === dvCalc;
}