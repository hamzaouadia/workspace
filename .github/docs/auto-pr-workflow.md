# Auto-PR Workflow

This document explains how the automatic pull request creation workflow works.

## Overview

The auto-PR workflow automatically creates a pull request to `main` when CI checks pass on a feature branch.

## How It Works

1. Developer pushes to a feature branch (e.g., `feat/my-feature`)
2. CI/CD Pipeline workflow runs on that branch
3. If CI passes, the Auto-PR workflow is triggered
4. Auto-PR checks if the branch is `main` (skips if true)
5. Auto-PR checks for open CI failure issues for that branch
6. If no issues exist, Auto-PR creates a pull request to `main`

## Workflow Chain

```
Push to feature branch
  ↓
CI/CD Pipeline (runs on feature branch)
  ↓
Auto-PR (triggered by CI/CD completion)
  ↓
Pull Request created
```

## Important Notes

### workflow_run Trigger

The Auto-PR workflow uses a `workflow_run` trigger to respond to CI/CD Pipeline completions:

```yaml
on:
  workflow_run:
    workflows: ["CI/CD Pipeline"]
    types:
      - completed
```

**Why trigger from "CI/CD Pipeline" and not "Create Issues"?**

- When a workflow is triggered by `workflow_run`, the `github.event.workflow_run.head_branch` reports the branch where the **workflow file** exists, not the branch that triggered the original workflow
- If we trigger from "Create Issues on CI Failure", the head_branch is always `main` (where the workflow file lives)
- By triggering directly from "CI/CD Pipeline", we get the actual feature branch name

### Branch Filtering

The workflow filters branches in the job steps, not in the trigger:

```yaml
# Don't filter by branches in the trigger
on:
  workflow_run:
    workflows: ["CI/CD Pipeline"]
    types:
      - completed
    # No branches filter here!

jobs:
  create-pr:
    steps:
      - name: Check for open CI failure issues
        uses: actions/github-script@v7
        with:
          script: |
            const branch = context.payload.workflow_run.head_branch;
            
            // Skip if branch is main
            if (branch === 'main') {
              core.setOutput('should_skip', 'true');
              return;
            }
```

This approach ensures we have access to the actual branch name in the workflow context.

## Maintenance

If you need to modify which workflow triggers the auto-PR, remember:

1. The triggering workflow must contain the feature branch name in `head_branch`
2. Test with a real feature branch push to ensure branch detection works
3. Check the debug logs to verify `context.payload.workflow_run.head_branch` reports correctly

## Troubleshooting

### PR Not Created

1. Check if CI passed on the feature branch
2. Verify the branch is not `main`
3. Check for open CI failure issues for that branch
4. Review Auto-PR workflow logs for debug output

### Wrong Branch Detected

If the workflow detects `main` instead of the feature branch:

1. Check which workflow triggers the auto-PR
2. Ensure it's triggered by "CI/CD Pipeline", not a downstream workflow
3. Add debug logging to view `context.payload.workflow_run` contents
