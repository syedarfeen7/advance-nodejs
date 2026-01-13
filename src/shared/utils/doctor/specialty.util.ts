export const parseSpecialties = (input: unknown): string[] => {
  if (!input) return [];

  let values: string[] = [];

  if (Array.isArray(input)) {
    values = input;
  } else if (typeof input === "string") {
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed)) {
        values = parsed;
      } else {
        values = input.split(",");
      }
    } catch {
      values = input.split(",");
    }
  }

  return [
    ...new Set(values.map((v) => v.trim().toLowerCase()).filter(Boolean)),
  ];
};
