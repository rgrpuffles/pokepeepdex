import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: ':setId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // If we are deploying/building for production, only prerender set-1 and set-2
      const isProd =
        process.env['NODE_ENV'] === 'production' ||
        process.env['npm_lifecycle_event']?.includes('deploy') ||
        process.env['npm_lifecycle_event']?.includes('build');

      if (isProd) {
        return [
          { setId: 'set-1' },
          { setId: 'set-2' }
        ];
      }

      return [
        { setId: 'set-1' },
        { setId: 'set-2' },
        { setId: 'set-3' },
        { setId: 'set-3.5' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
