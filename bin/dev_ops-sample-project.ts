#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DevOpsSampleProjectStack } from '../lib/dev_ops-sample-project-stack';

const app = new cdk.App();
new DevOpsSampleProjectStack(app, 'DevOpsSampleProjectStack');
app.synth();
