import { AstroSite, StackContext } from 'sst/constructs';

export function Site({ stack }: StackContext) {
  const site = new AstroSite(stack, 'site', {
    path: 'packages/site',
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
