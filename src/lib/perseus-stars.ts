// Real star positions for the constellation Perseus (J2000 right ascension in
// hours, declination in degrees, apparent magnitude). Used to lay out the
// hero canvas so the "stars" are the actual stars, not decoration.
export type PerseusStar = {
  id: string;
  name: string;
  ra: number;
  dec: number;
  mag: number;
};

export const perseusStars: PerseusStar[] = [
  { id: "alpha", name: "Mirfak", ra: 3.405, dec: 49.861, mag: 1.79 },
  { id: "beta", name: "Algol", ra: 3.136, dec: 40.956, mag: 2.12 },
  { id: "gamma", name: "Gamma Persei", ra: 3.08, dec: 53.506, mag: 2.93 },
  { id: "delta", name: "Delta Persei", ra: 3.715, dec: 47.788, mag: 3.01 },
  { id: "epsilon", name: "Epsilon Persei", ra: 3.964, dec: 40.01, mag: 2.89 },
  { id: "zeta", name: "Zeta Persei", ra: 3.902, dec: 31.884, mag: 2.85 },
  { id: "eta", name: "Eta Persei", ra: 2.845, dec: 55.895, mag: 3.76 },
  { id: "theta", name: "Theta Persei", ra: 2.737, dec: 49.229, mag: 4.12 },
  { id: "iota", name: "Iota Persei", ra: 3.151, dec: 49.611, mag: 4.05 },
  { id: "kappa", name: "Kappa Persei", ra: 3.158, dec: 44.858, mag: 3.8 },
  { id: "lambda", name: "Lambda Persei", ra: 3.748, dec: 50.283, mag: 4.29 },
  { id: "mu", name: "Mu Persei", ra: 4.248, dec: 48.407, mag: 4.14 },
  { id: "xi", name: "Menkib", ra: 3.983, dec: 35.791, mag: 4.04 },
  { id: "rho", name: "Rho Persei", ra: 3.087, dec: 38.84, mag: 3.39 },
  { id: "sigma", name: "Sigma Persei", ra: 3.51, dec: 47.984, mag: 4.36 },
  { id: "tau", name: "Tau Persei", ra: 2.905, dec: 52.762, mag: 3.95 },
  { id: "omicron", name: "Atik", ra: 3.739, dec: 32.288, mag: 3.85 },
];

// Simplified asterism lines connecting the stars above into a recognisable
// figure. Constellation line figures are a drawing convention, not an
// astronomical fact, so this is one reasonable reading of the shape.
export const perseusEdges: [string, string][] = [
  ["eta", "gamma"],
  ["eta", "tau"],
  ["gamma", "alpha"],
  ["alpha", "delta"],
  ["alpha", "kappa"],
  ["alpha", "lambda"],
  ["lambda", "mu"],
  ["delta", "sigma"],
  ["delta", "epsilon"],
  ["epsilon", "xi"],
  ["epsilon", "zeta"],
  ["zeta", "omicron"],
  ["kappa", "iota"],
  ["kappa", "theta"],
  ["kappa", "beta"],
  ["beta", "rho"],
];

export type StarLayout = {
  id: string;
  name: string;
  mag: number;
  nx: number;
  ny: number;
};

/**
 * Projects the RA/Dec star field to a normalised [0, 1] square using a flat
 * equirectangular approximation (the field is small enough that this reads
 * correctly to the eye) and returns the star field plus the min/max bounds
 * so the caller can fit it into any canvas size.
 */
export function getPerseusLayout(): StarLayout[] {
  const centerRa = 3.55 * 15;
  const centerDec = 44.5;
  const cosDec = Math.cos((centerDec * Math.PI) / 180);

  const points = perseusStars.map((star) => ({
    id: star.id,
    name: star.name,
    mag: star.mag,
    x: (star.ra * 15 - centerRa) * cosDec,
    y: -(star.dec - centerDec),
  }));

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const span = Math.max(maxX - minX, maxY - minY) || 1;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;

  return points.map((p) => ({
    id: p.id,
    name: p.name,
    mag: p.mag,
    nx: 0.5 + (p.x - cx) / span,
    ny: 0.5 + (p.y - cy) / span,
  }));
}
