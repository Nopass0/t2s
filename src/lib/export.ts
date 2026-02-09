export const downloadCsv = (
  filename: string,
  headers: string[],
  rows: Array<Array<string | number>>,
) => {
  const escaped = (value: string | number) =>
    `"${String(value).replaceAll('"', '""')}"`;

  const csv = [headers.map(escaped).join(","), ...rows.map((row) => row.map(escaped).join(","))].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
