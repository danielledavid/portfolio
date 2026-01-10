export default function AutomationVerificationProject() {
  return (
    <>

      <p>
        A recurring theme in my work is identifying manual, time consuming
        processes and finding ways to make them more reliable through
        automation.
        <br />
        <br />
        This project is one example of that approach. It focuses on maintaining a
        large operational dataset that previously required frequent manual
        review, and turning that process into something repeatable, auditable,
        and easier to maintain over time.
      </p>

      <h3>Problem</h3>
      <p>
        The dataset required regular updates to remain accurate, but the update
        process relied entirely on manual checks against an external system.
        <br />
        <br />
        As the dataset grew to more than 1,700 rows, each update cycle became
        increasingly time consuming and error prone. Changes in the external
        data did not happen on a predictable schedule, which made it difficult
        to trust that the information was still current between reviews.
        <br />
        <br />
        This created a common operational problem where the effort required to
        keep data accurate scaled faster than the data itself.
      </p>

      <h3>Solution</h3>
      <p>
        Rather than treating this as a one time cleanup task, I approached it as
        a workflow design problem.
        <br />
        <br />
        I built an automated verification process using n8n to orchestrate data
        retrieval, validation, and normalization, and integrated the results back
        into a structured data source that could be reviewed and managed through
        an AppSheet application.
        <br />
        <br />
        Each record is processed consistently using the same logic, and the
        workflow records when a row was last verified so updates are transparent
        and repeatable.
      </p>

      <h3>Impact</h3>
      <p>
        The automated workflow reduced a multi day manual task to a process that
        can be run on demand or scheduled as part of routine maintenance.
        <br />
        <br />
        Data accuracy improved, update cycles became predictable, and the dataset
        could be safely used as a reliable source for downstream tools and
        operational decision making.
        <br />
        <br />
        More importantly, this project reflects how I generally approach data
        and operations problems by looking for opportunities to replace fragile,
        manual processes with systems that scale more gracefully.
      </p>
    </>
  );
}
