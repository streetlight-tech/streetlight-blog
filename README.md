# streetlight-blog
Serverless blog

## Deploying Pipeline Resources

To deploy the resources required to deploy via the GitHub actions pipeline, run the 
`cloudformation/pipeline-resources.yml` template in CloudFormation. The recommended stack name is 
`streetlight-blog-pipeline`. The following parameters must be privded:
- IdentifierLower: Prefix for bucket name for pipeline artifacts. Bucket name will be 
  `${IdentifierLower}-pipeline-artifacts-${AWS::AccountId}`.
- Environment: Environment identifier. Will be applied using an `Environment` tag on resources.
- ExpirationDays: Number of days after which objects are deleted from the artifacts bucket. Leave blank to keep objects
  indefinitely.
- Identifier: Prefix for pipeline roles. Roles will be named `${Identifier}CloudFormationExecutionRole` and 
  `${Identifier}PipelineExecutionRole`.

## Configuring Pipeline

The pipeline is configured to retrieve variables from repository secrets. The following secret values are required:
- FEATURE_ACCESS_KEY_ID: Value stored as `aws_access_key_id` in the Secrets Manager entry created by the pipeline
  resources stack.
- FEATURE_SECRET_ACCESS_KEY: Values stored as `aws_secret_access_key` in the Secrets Manager entry created by the
  pipeline resources stack.
- FEATURE_ACCOUNT_ID: AWS Account ID where pipeline resources were created.
- FEATURE_IDENTIFIER_LOWER: Prefix used for feature stack. This must