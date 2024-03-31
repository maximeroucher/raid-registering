export const situations = [
  { value: "centrale", label: "Centrale" },
  { value: "otherschool", label: "Autre école" },
  { value: "corporatepartner", label: "Partenaire entreprise" },
  { value: "other", label: "Autre" },
];

export const difficulties = [
  { value: "discovery", label: "Découverte" },
  { value: "sports", label: "Sportif" },
  { value: "expert", label: "Expert" },
];

export const meetingPlaces = [
  { value: "centrale", label: "Centrale" },
  { value: "bellecour", label: "Bellecour" },
  { value: "anyway", label: "Peu importe" },
];

export const sizes = [
  { value: "xs", label: "XS"},
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

export function getLabelFromValue(
  values: { value: string; label: string }[],
  value?: string,
) {
  const item = values.find((item) => item.value === value);
  return item?.label ?? "Non renseigné";
}
