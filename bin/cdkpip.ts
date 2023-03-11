#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkpipStack } from '../lib/cdkpip-stack';

const app = new cdk.App();
new CdkpipStack(app, 'CdkpipStack', {
  env: {
    account: '475191662736',
    region: 'us-west-2'
  }
});

app.synth();