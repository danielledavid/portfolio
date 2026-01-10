// project-content/nys-boe-data-filter.jsx
export default function BOEProject() {
  return (
    <>
      <p>
        This project was built to solve recurring segmentation issues in large
        NYS Board of Elections datasets used for direct mail and analytics.
      </p>

      <h3>Problem</h3>
      <p>
        Manual filtering of NYS BOE data was slow, inconsistent, and
        error-prone—especially when applying complex combinations of voting
        history, municipality, and demographic rules.
      </p>

      <h3>Solution</h3>
      <p>
        I built a Python-based data pipeline using BigQuery to standardize,
        validate, and dynamically segment voter data based on configurable
        business rules.
      </p>

      <h3>Impact</h3>
      <p>
        Reduced processing time by X%, eliminated repetitive manual cleanup, and
        made segmentation reproducible and auditable across counties.
      </p>
    </>
  );
}
