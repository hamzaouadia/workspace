/**
 * Check for open CI failure issues for a specific branch
 * 
 * @param {object} params
 * @param {object} params.github - GitHub API client
 * @param {object} params.context - GitHub Actions context
 * @param {object} params.core - GitHub Actions core toolkit
 */
module.exports = async ({ github, context, core }) => {
  const branch = context.payload.workflow_run.head_branch;
  
  // Check for open CI failure issues
  const issues = await github.rest.issues.listForRepo({
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: 'open',
    labels: 'ci-failure',
    per_page: 100
  });
  
  const branchIssue = issues.data.find(issue => 
    issue.title.includes(branch) || issue.body.includes(branch)
  );
  
  if (branchIssue) {
    core.setOutput('has_issues', 'true');
    core.info(`Found open CI issue #${branchIssue.number} for branch ${branch}`);
  } else {
    core.setOutput('has_issues', 'false');
    core.info(`No open CI issues for branch ${branch}`);
  }
};
