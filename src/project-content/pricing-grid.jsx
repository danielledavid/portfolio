// project-content/pricing-grid.jsx
export default function PricingGridProject() {
  return (
    <>
      <p>
        This project began as a large, standalone Excel pricing file used to
        compare vendor pricing across different product types, sizes, quantities,
        and turnaround options.
        <br />
        <br />
        The goal was to transform that static spreadsheet into a reliable,
        interactive pricing tool that could be maintained over time and safely
        deployed as a user facing application.
      </p>

      <h3>Problem</h3>
      <p>
        The original file was built purely for Excel and relied heavily on
        embedded formulas, mixed data types, and implicit assumptions about how
        prices were calculated.
        <br />
        <br />
        When the file was moved into Google Sheets and later prepared for use in
        an application, those assumptions began to break down. Some rows depended
        on row specific formulas, others contained hard coded values, and fields
        such as turnaround time mixed numbers, text, and dates.
        <br />
        <br />
        This made the data difficult to audit, risky to edit, and unreliable when
        used for filtering, sorting, and comparison in an app environment.
      </p>

      <h3>Solution</h3>
      <p>
        I restructured the data so it could function as a stable backend rather
        than a calculation worksheet.
        <br />
        <br />
        The file was migrated from Excel to Google Sheets, and the data structure
        was redesigned to remove hidden dependencies and normalize inconsistent
        fields.
        <br />
        <br />
        Embedded formulas were intentionally removed where they caused ambiguity,
        and pricing behavior was made explicit so that calculated values and
        manual prices could be understood and maintained safely.
        <br />
        <br />
        Once the data was stable and predictable, it was deployed to AppSheet,
        where consistent structure was required for filtering, sorting, vendor
        comparison, and role based editing.
      </p>

      <h3>Impact</h3>
      <p>
        The final result was a pricing grid that could be confidently edited,
        reviewed, and used inside an application without unexpected behavior.
        <br />
        <br />
        This transition reduced pricing errors, simplified ongoing maintenance,
        and made it possible to add new products, vendors, and pricing rules
        without breaking existing logic.
        <br />
        <br />
        More importantly, it demonstrated how careful data modeling and
        structural decisions can turn a fragile spreadsheet into a maintainable
        system.
      </p>
    </>
  );
}
