/**
 * Utility functions for legal portfolio
 */

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatCaseNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
