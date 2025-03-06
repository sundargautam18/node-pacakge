// Function to format a date string into a more readable format
export function formatNepaliDate(nepaliDate: string): string {
  // Example of a custom format: YYYY-MM-DD
  return nepaliDate.replace(/(\d{4})-(\d{2})-(\d{2})/, "$1/$2/$3");
}
