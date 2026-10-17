"use client";
export default function PrintButton({ tr }: { tr: boolean }) {
  return (
    <button className="text-link print-button" onClick={() => window.print()}>
      {tr ? "Yazdır / PDF olarak kaydet" : "Print / save as PDF"}
    </button>
  );
}
