/**
 * Debug workflow_run context
 * Logs information about the triggering workflow run for debugging purposes
 * 
 * @param {object} params
 * @param {object} params.core - GitHub Actions core toolkit
 * @param {object} params.context - GitHub Actions context
 */
module.exports = async ({ core, context }) => {
  const workflowRun = context.payload.workflow_run;
  
  core.info(`head_branch: ${workflowRun.head_branch}`);
  core.info(`head_repository.full_name: ${workflowRun.head_repository.full_name}`);
  core.info(`Event: ${JSON.stringify(workflowRun, null, 2)}`);
};
