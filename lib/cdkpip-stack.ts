import * as cdk from 'aws-cdk-lib';
import { CodePipeline } from 'aws-cdk-lib/aws-events-targets';
import { CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkpipStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);



    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'TestPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('......', 'main'),
        commands: ['npm ci',
                   'npm run build',
                   'npx cdk synth'
                  ]
      }),
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkpipQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
