import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

// // Example usage:
// const result = cn("class1", "class2");
// console.log(result);
