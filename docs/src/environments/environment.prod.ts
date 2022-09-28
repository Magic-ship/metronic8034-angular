// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  appVersion: 'v8.0.34',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  appThemeName: 'Metronic',
  appPurchaseUrl: 'https://1.envato.market/EA4JP',
  appHTMLIntegration: 'https://preview.keenthemes.com/metronic8/demo1/documentation/base/helpers/flex-layouts.html',
  appPreviewUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1/',
  appPreviewAngularUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1',
  appPreviewDocsUrl: 'https://preview.keenthemes.com/metronic8/angular/docs',
  appPreviewChangelogUrl: 'https://preview.keenthemes.com/metronic8/angular/docs/changelog',
  appDemos: {
    'demo1': {
      'title': 'Demo 1',
      'description': 'Default Dashboard',
      'published': true,
      'thumbnail': './assets/media/demos/demo1.png'
    },

    'demo2': {
      'title': 'Demo 2',
      'description': 'SaaS Application',
      'published': false,
      'thumbnail': './assets/media/demos/demo2.png'
    },

    'demo3': {
      'title': 'Demo 3',
      'description': 'New Trend',
      'published': false,
      'thumbnail': './assets/media/demos/demo3.png'
    },

    'demo4': {
      'title': 'Demo 4',
      'description': 'Intranet Application',
      'published': false,
      'thumbnail': './assets/media/demos/demo4.png'
    },

    'demo5': {
      'title': 'Demo 5',
      'description': 'Support Forum',
      'published': false,
      'thumbnail': './assets/media/demos/demo5.png'
    },

    'demo6': {
      'title': 'Demo 6',
      'description': 'Admin Backend',
      'published': false,
      'thumbnail': './assets/media/demos/demo6.png'
    },

    'demo7': {
      'title': 'Demo 7',
      'description': 'CRM Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo7.png'
    },

    'demo8': {
      'title': 'Demo 8',
      'description': 'Core Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo8.png'
    },

    'demo9': {
      'title': 'Demo 9',
      'description': 'Fancy Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo9.png'
    },

    'demo10': {
      'title': 'Demo 10',
      'description': 'Modern Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo10.png'
    },

    'demo11': {
      'title': 'Demo 11',
      'description': 'Light Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo11.png'
    },

    'demo12': {
      'title': 'Demo 12',
      'description': 'Reporting System',
      'published': false,
      'thumbnail': './assets/media/demos/demo12.png'
    },

    'demo13': {
      'title': 'Demo 13',
      'description': 'Classic Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo13.png'
    },

    'demo14': {
      'title': 'Demo 14',
      'description': 'Creative Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo14.png'
    },

    'demo15': {
      'title': 'Demo 15',
      'description': 'Minimalistic Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo15.png'
    },

    'demo16': {
      'title': 'Demo 16',
      'description': 'Modern Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo16.png'
    },

    'demo17': {
      'title': 'Demo 17',
      'description': 'Backend System',
      'published': false,
      'thumbnail': './assets/media/demos/demo17.png'
    },

    'demo18': {
      'title': 'Demo 18',
      'description': 'System Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo18.png'
    },

    'demo19': {
      'title': 'Demo 19',
      'description': 'Light Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo19.png'
    },

    'demo20': {
      'title': 'Demo 20',
      'description': 'Monochrome Dashboard',
      'published': false,
      'thumbnail': './assets/media/demos/demo20.png'
    },
  },
  changelogs: {
    'v8.0.34': {
      'date': '31 December, 2021',
      'changelog': {
        'new': [
          'Added engage toolbar.',
          'Added demo topbar search.',
        ],
        'update': [
          'Update tooltip for the dummy links.'
        ],
        'fix': [
          'Fixed main font family loading.'
        ],
      }
    },
    'v8.0.33': {
      'date': '17 December, 2021',
      'changelog': {
        'new': [],
        'update': [
          'Restrict <code>Popper</code> version to <code>v2.10.1</code> in <code>packages.json</code>.'
        ],
        'fix': [
          '<code class="ms-0">KTMenu</code> dropdown position issue caused by <code>Popper v2.11.0</code> auto update.'
        ],
      }
    },
    'v8.0.32': {
      'date': '15 December, 2021',
      'changelog': {
        'new': [],
        'update': [],
        'fix': [
          'Fixed undetected <code>Angular DevTools</code> plugin.',
          'Fixed layout height on login page.',
          'Fixed jumping issue during initial page load.'
        ],
      }
    },
    'v8.0.30': {
      'date': '11 November, 2021',
      'changelog': {
        'new': [
          'Added new Angular Material documentation and integration. <a href="https://preview.keenthemes.com/metronic8/angular/demo1/angular-material/overview">See preview</a>',
          'Added search toolbar component.'
        ],
        'update': [
          'Migrate code highlighting plugin from <code>ngx-highlightjs</code> to <code>prism</code>.'
        ],
        'fix': [
          'Fixed code highlight issue.',
          'Fixed undetected <code>Angular DevTools</code> plugin.'
        ],
      }
    },
    'v8.0.29': {
      'date': '29 October, 2021',
      'changelog': {
        'new': [],
        'update': [
          'Improve documentation. Added breadcrumb service documentation.',
          'Sync assets from HTML version.',
        ],
        'fix': [],
      }
    },
    'v8.0.27': {
      'date': '5 October, 2021',
      'changelog': {
        'new': [],
        'update': [],
        'fix': [
          'Fixed aside menu config in the layout builder.'
        ],
      }
    },
    'v8.0.26': {
      'date': '30 September, 2021',
      'changelog': {
        'new': [
          'Added explorer panel'
        ],
        'update': [],
        'fix': [],
      }
    },
    'v8.0.25': {
      'date': '20 September, 2021',
      'changelog': {
        'new': [
          'Added new <code>dark mode</code> in demo1'
        ],
        'update': [],
        'fix': [
          'Fixed minimize aside icon.',
          'Fixed <code>KTMenu</code> flip.'
        ],
      },
    },
    'v8.0.24': {
      'date': '3 September, 2021',
      'changelog': {
        'new': [
          'Initial release'
        ],
        'update': [],
        'fix': [],
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
