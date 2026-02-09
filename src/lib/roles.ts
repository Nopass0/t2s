import { type SessionRole } from "@/store/auth-store";

export const roleLabel: Record<SessionRole, string> = {
  ADMIN: "Администратор",
  DM: "ДМ",
  EMPLOYEE: "Сотрудник",
  INTERN: "Стажер",
};

export const roleShortLabel: Record<SessionRole, string> = {
  ADMIN: "Админ",
  DM: "ДМ",
  EMPLOYEE: "Сотрудник",
  INTERN: "Стажер",
};
