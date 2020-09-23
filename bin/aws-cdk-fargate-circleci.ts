#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkFargateCircleci } from '../lib/aws-cdk-fargate-circleci-stack';

const app = new cdk.App();
new AwsCdkFargateCircleci(app, 'AwsCdkFargateCircleci');
app.synth();
