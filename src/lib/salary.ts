export type SalaryInput = {
  workedHours: number;
  role: "ADMIN" | "DM" | "EMPLOYEE" | "INTERN";
  pointPlanPercent: number;
  personalPlanPercent: number;
  hasCreditsOnPoint: boolean;
  creditAmount: number;
};

const baseRate = 100;

export const estimateSalary = (input: SalaryInput) => {
  const base = input.workedHours * baseRate;

  const pointMultiplier =
    input.pointPlanPercent >= 100
      ? 1.2
      : input.pointPlanPercent >= 85
        ? 1.05
        : 0.95;

  const personalBonus =
    input.personalPlanPercent >= 100
      ? base * 0.25
      : input.personalPlanPercent >= 80
        ? base * 0.12
        : base * 0.04;

  let total = base * pointMultiplier + personalBonus;

  if (
    input.role === "EMPLOYEE" &&
    input.workedHours > 90 &&
    input.hasCreditsOnPoint &&
    input.creditAmount <= 0
  ) {
    total *= 0.9;
  }

  if (input.role === "DM" && input.workedHours < 70) {
    total = base;
  }

  if (input.role === "INTERN") {
    total = base + Math.min(9000, Math.max(0, personalBonus));
  }

  return Math.round(total);
};
