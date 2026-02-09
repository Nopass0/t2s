import { z } from "zod";

export const pointCodeSchema = z
  .string()
  .regex(/^\d{6}$/, "Код точки должен содержать 6 цифр");

export const employeeCodeSchema = z
  .string()
  .trim()
  .toUpperCase()
  .regex(/^[A-Z0-9]{7}$/, "Код сотрудника должен содержать 7 символов");

export const loginSchema = z
  .object({
    pointCode: pointCodeSchema.optional(),
    employeeCode: employeeCodeSchema,
    adminKey: z.string().trim().min(4).optional(),
  })
  .superRefine((value, ctx) => {
    const isAdminAttempt = value.employeeCode.startsWith("ADM");
    if (!isAdminAttempt && !value.pointCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Код точки обязателен для входа сотрудника",
        path: ["pointCode"],
      });
    }
  });

export const addSaleSchema = z.object({
  userId: z.string().min(1),
  directionId: z.string().min(1),
  quantity: z.number().int().min(0).nullable(),
  amount: z.number().min(0).nullable(),
});

export const updateEmployeeShiftRoleSchema = z.object({
  userId: z.string().min(1),
  date: z.string().date(),
  role: z.enum(["OPEN", "CLOSE"]),
});

export const updatePointPlanSchema = z.object({
  pointId: z.string().min(1),
  monthStart: z.string().date(),
  items: z.array(
    z.object({
      directionId: z.string().min(1),
      target: z.number().int().min(0),
    }),
  ),
});

export const updateEmployeePlanSchema = z.object({
  pointId: z.string().min(1),
  employeeId: z.string().min(1),
  monthStart: z.string().date(),
  items: z.array(
    z.object({
      directionId: z.string().min(1),
      target: z.number().int().min(0),
      isPriority: z.boolean(),
    }),
  ),
});

export const updateScheduleSchema = z.object({
  pointId: z.string().min(1),
  monthStart: z.string().date(),
  rows: z.array(
    z.object({
      employeeId: z.string().min(1),
      date: z.string().date(),
      hours: z.number().int().min(0).max(16),
    }),
  ),
});

export const createPointSchema = z.object({
  code: pointCodeSchema,
  name: z.string().min(2),
  address: z.string().min(5),
  dmName: z.string().min(2),
  dmCode: employeeCodeSchema,
});

export const createStaffSchema = z.object({
  pointId: z.string().min(1),
  name: z.string().min(2),
  code: employeeCodeSchema,
  role: z.enum(["DM", "EMPLOYEE", "INTERN"]),
});

export const updateStaffSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  code: employeeCodeSchema,
  role: z.enum(["DM", "EMPLOYEE", "INTERN"]),
  isActive: z.boolean(),
});

export const deleteStaffSchema = z.object({
  id: z.string().min(1),
});
