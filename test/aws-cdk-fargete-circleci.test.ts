import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DevOpsSampleProject from '../lib/aws-cdk-fargete-circleci-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DevOpsSampleProject.DevOpsSampleProjectStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
