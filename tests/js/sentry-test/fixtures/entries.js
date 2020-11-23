export function Entries() {
  return [
    [
      {
        type: 'exception',
        data: {
          values: [
            {
              stacktrace: {
                frames: [
                  {
                    function: null,
                    colNo: null,
                    vars: {},
                    symbol: null,
                    module: '<unknown module>',
                    lineNo: null,
                    errors: null,
                    package: null,
                    absPath:
                      'https://sentry.io/hiventy/kraken-prod/issues/438681831/?referrer=slack#',
                    inApp: false,
                    instructionAddr: null,
                    filename: '/hiventy/kraken-prod/issues/438681831/',
                    platform: null,
                    context: [],
                    symbolAddr: null,
                  },
                ],
                framesOmitted: null,
                registers: null,
                hasSystemFrames: false,
              },
              module: null,
              rawStacktrace: null,
              mechanism: null,
              threadId: null,
              value: 'Unexpected token else',
              type: 'SyntaxError',
            },
          ],
          excOmitted: null,
          hasSystemFrames: false,
        },
      },
      {
        type: 'threads',
        data: {
          values: [
            {
              stacktrace: {
                frames: [
                  {
                    function: 'start',
                    package: 'libdyld.dylib',
                    image_addr: '0x7fff20256000',
                    in_app: true,
                    symbol_addr: '0x7fff20257408',
                    data: {},
                    instruction_addr: '0x7fff20257409',
                  },
                  {
                    function: 'main',
                    package: 'iOS-Swift',
                    symbol: 'main',
                    image_addr: '0x10e68f000',
                    in_app: true,
                    symbol_addr: '0x10e693440',
                    data: {},
                    instruction_addr: '0x10e69348a',
                  },
                  {
                    function: 'UIApplicationMain',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff246722bb',
                    data: {},
                    instruction_addr: '0x7fff24672320',
                  },
                  {
                    function: '-[UIApplication _run]',
                    package: 'UIKitCore',
                    symbol: '-[UIApplication _run]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff2466d07f',
                    data: {},
                    instruction_addr: '0x7fff2466d40f',
                  },
                  {
                    function: 'GSEventRunModal',
                    package: 'GraphicsServices',
                    image_addr: '0x7fff2b790000',
                    in_app: true,
                    symbol_addr: '0x7fff2b793d28',
                    data: {},
                    instruction_addr: '0x7fff2b793db3',
                  },
                  {
                    function: 'CFRunLoopRunSpecific',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a1967',
                    data: {},
                    instruction_addr: '0x7fff203a1b9e',
                  },
                  {
                    function: '__CFRunLoopRun',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a2089',
                    data: {},
                    instruction_addr: '0x7fff203a23f7',
                  },
                  {
                    function: '__CFRunLoopDoSources0',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a7b27',
                    data: {},
                    instruction_addr: '0x7fff203a7c1f',
                  },
                  {
                    function: '__CFRunLoopDoSource0',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a8689',
                    data: {},
                    instruction_addr: '0x7fff203a873d',
                  },
                  {
                    function:
                      '__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a8834',
                    data: {},
                    instruction_addr: '0x7fff203a8845',
                  },
                  {
                    function: '__eventFetcherSourceCallback',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff24712c68',
                    data: {},
                    instruction_addr: '0x7fff24712cd0',
                  },
                  {
                    function: '__processEventQueue',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff24718cf3',
                    data: {},
                    instruction_addr: '0x7fff2471c33a',
                  },
                  {
                    function: '-[UIApplicationAccessibility sendEvent:]',
                    package: 'UIKit',
                    symbol: '-[UIApplicationAccessibility sendEvent:]',
                    image_addr: '0x110b5e000',
                    in_app: true,
                    symbol_addr: '0x110b8799d',
                    data: {},
                    instruction_addr: '0x110b879f2',
                  },
                  {
                    function: '-[UIApplication sendEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIApplication sendEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff2468ba19',
                    data: {},
                    instruction_addr: '0x7fff2468bc92',
                  },
                  {
                    function: '-[UIWindow sendEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIWindow sendEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff246b0eb9',
                    data: {},
                    instruction_addr: '0x7fff246b215f',
                  },
                  {
                    function: '-[UIWindow _sendTouchesForEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIWindow _sendTouchesForEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff246afddf',
                    data: {},
                    instruction_addr: '0x7fff246b02e6',
                  },
                  {
                    function: '-[UIControl touchesEnded:withEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIControl touchesEnded:withEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff23f9e644',
                    data: {},
                    instruction_addr: '0x7fff23f9e838',
                  },
                  {
                    function: '-[UIControl _sendActionsForEvents:withEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIControl _sendActionsForEvents:withEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff23f9fe03',
                    data: {},
                    instruction_addr: '0x7fff23f9ff4f',
                  },
                  {
                    function: '-[UIControl sendAction:to:forEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIControl sendAction:to:forEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff23f9fb4d',
                    data: {},
                    instruction_addr: '0x7fff23f9fc2c',
                  },
                  {
                    function:
                      '__44-[SentryBreadcrumbTracker swizzleSendAction]_block_invoke_2',
                    package: 'Sentry',
                    symbol:
                      '__44-[SentryBreadcrumbTracker swizzleSendAction]_block_invoke_2',
                    image_addr: '0x10e90f000',
                    in_app: false,
                    symbol_addr: '0x10e951350',
                    data: {},
                    instruction_addr: '0x10e9518e9',
                  },
                  {
                    function: '-[UIApplication sendAction:to:from:forEvent:]',
                    package: 'UIKitCore',
                    symbol: '-[UIApplication sendAction:to:from:forEvent:]',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff24673978',
                    data: {},
                    instruction_addr: '0x7fff246739cb',
                  },
                  {
                    function: 'ViewController.captureNSException',
                    package: 'iOS-Swift',
                    symbol: '$s9iOS_Swift14ViewControllerC18captureNSExceptionyyypFTo',
                    image_addr: '0x10e68f000',
                    in_app: true,
                    symbol_addr: '0x10e692290',
                    raw_function: '@objc ViewController.captureNSException(_:)',
                    data: {},
                    instruction_addr: '0x10e6922df',
                  },
                  {
                    function: 'ViewController.captureNSException',
                    package: 'iOS-Swift',
                    symbol: '$s9iOS_Swift14ViewControllerC18captureNSExceptionyyypF',
                    image_addr: '0x10e68f000',
                    in_app: true,
                    symbol_addr: '0x10e691e60',
                    raw_function: 'ViewController.captureNSException(_:)',
                    data: {},
                    instruction_addr: '0x10e691fd8',
                  },
                ],
              },
              name: '',
              current: true,
              crashed: false,
              raw_stacktrace: {
                frames: [
                  {
                    function: 'start',
                    package: 'libdyld.dylib',
                    image_addr: '0x7fff20256000',
                    in_app: true,
                    symbol_addr: '0x7fff20257408',
                    instruction_addr: '0x7fff20257409',
                  },
                  {
                    function: 'main',
                    package: 'iOS-Swift',
                    image_addr: '0x10e68f000',
                    in_app: true,
                    symbol_addr: '0x10e693440',
                    instruction_addr: '0x10e69348b',
                  },
                  {
                    function: 'UIApplicationMain',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff246722bb',
                    instruction_addr: '0x7fff24672320',
                  },
                  {
                    function: '-[UIApplication _run]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff2466d07f',
                    instruction_addr: '0x7fff2466d40f',
                  },
                  {
                    function: 'GSEventRunModal',
                    package: 'GraphicsServices',
                    image_addr: '0x7fff2b790000',
                    in_app: true,
                    symbol_addr: '0x7fff2b793d28',
                    instruction_addr: '0x7fff2b793db3',
                  },
                  {
                    function: 'CFRunLoopRunSpecific',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a1967',
                    instruction_addr: '0x7fff203a1b9e',
                  },
                  {
                    function: '__CFRunLoopRun',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a2089',
                    instruction_addr: '0x7fff203a23f7',
                  },
                  {
                    function: '__CFRunLoopDoSources0',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a7b27',
                    instruction_addr: '0x7fff203a7c1f',
                  },
                  {
                    function: '__CFRunLoopDoSource0',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a8689',
                    instruction_addr: '0x7fff203a873d',
                  },
                  {
                    function:
                      '__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__',
                    package: 'CoreFoundation',
                    image_addr: '0x7fff20329000',
                    in_app: true,
                    symbol_addr: '0x7fff203a8834',
                    instruction_addr: '0x7fff203a8845',
                  },
                  {
                    function: '__eventFetcherSourceCallback',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff24712c68',
                    instruction_addr: '0x7fff24712cd0',
                  },
                  {
                    function: '__processEventQueue',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff24718cf3',
                    instruction_addr: '0x7fff2471c33a',
                  },
                  {
                    function: '-[UIApplicationAccessibility sendEvent:]',
                    package: 'UIKit',
                    image_addr: '0x110b5e000',
                    in_app: true,
                    symbol_addr: '0x110b8799d',
                    instruction_addr: '0x110b879f2',
                  },
                  {
                    function: '-[UIApplication sendEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff2468ba19',
                    instruction_addr: '0x7fff2468bc92',
                  },
                  {
                    function: '-[UIWindow sendEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff246b0eb9',
                    instruction_addr: '0x7fff246b215f',
                  },
                  {
                    function: '-[UIWindow _sendTouchesForEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff246afddf',
                    instruction_addr: '0x7fff246b02e6',
                  },
                  {
                    function: '-[UIControl touchesEnded:withEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff23f9e644',
                    instruction_addr: '0x7fff23f9e838',
                  },
                  {
                    function: '-[UIControl _sendActionsForEvents:withEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff23f9fe03',
                    instruction_addr: '0x7fff23f9ff4f',
                  },
                  {
                    function: '-[UIControl sendAction:to:forEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff23f9fb4d',
                    instruction_addr: '0x7fff23f9fc2c',
                  },
                  {
                    function:
                      '__44-[SentryBreadcrumbTracker swizzleSendAction]_block_invoke_2',
                    package: 'Sentry',
                    image_addr: '0x10e90f000',
                    in_app: false,
                    symbol_addr: '0x10e951350',
                    instruction_addr: '0x10e9518ea',
                  },
                  {
                    function: '-[UIApplication sendAction:to:from:forEvent:]',
                    package: 'UIKitCore',
                    image_addr: '0x7fff23a83000',
                    in_app: true,
                    symbol_addr: '0x7fff24673978',
                    instruction_addr: '0x7fff246739cb',
                  },
                  {
                    function: '$s9iOS_Swift14ViewControllerC18captureNSExceptionyyypFTo',
                    package: 'iOS-Swift',
                    image_addr: '0x10e68f000',
                    in_app: true,
                    symbol_addr: '0x10e692290',
                    instruction_addr: '0x10e6922e0',
                  },
                  {
                    function: '$s9iOS_Swift14ViewControllerC18captureNSExceptionyyypF',
                    package: 'iOS-Swift',
                    image_addr: '0x10e68f000',
                    in_app: true,
                    symbol_addr: '0x10e691e60',
                    instruction_addr: '0x10e691fd8',
                  },
                ],
              },
              id: 0,
            },
            {
              current: false,
              crashed: false,
              id: 1,
              name: '',
            },
            {
              current: false,
              crashed: false,
              id: 2,
              name: '',
            },
            {
              current: false,
              crashed: false,
              id: 3,
              name: 'com.apple.uikit.eventfetch-thread',
            },
            {
              current: false,
              crashed: false,
              id: 4,
              name: '',
            },
            {
              current: false,
              crashed: false,
              id: 5,
              name: '',
            },
            {
              current: false,
              crashed: false,
              id: 6,
              name: '',
            },
            {
              current: false,
              crashed: false,
              id: 7,
              name: 'com.apple.NSURLConnectionLoader',
            },
          ],
        },
      },
      {
        type: 'breadcrumbs',
        data: {
          values: [
            {
              category: 'xhr',
              level: 'info',
              event_id: null,
              timestamp: '2018-01-23T08:12:53.591Z',
              data: {
                url: 'https://reload.getsentry.net/page/',
                status_code: '201',
                method: 'POST',
              },
              message: null,
              type: 'http',
            },
            {
              category: 'xhr',
              level: 'info',
              event_id: null,
              timestamp: '2018-01-23T08:12:53.636Z',
              data: {
                url: '/api/0/organizations/?member=1',
                status_code: '200',
                method: 'GET',
              },
              message: null,
              type: 'http',
            },
            {
              category: 'xhr',
              level: 'info',
              event_id: null,
              timestamp: '2018-01-23T08:12:53.895Z',
              data: {url: '/api/0/internal/health/', status_code: '403', method: 'GET'},
              message: null,
              type: 'http',
            },
          ],
        },
      },
      {
        type: 'request',
        data: {
          fragment: '',
          cookies: [],
          inferredContentType: null,
          env: null,
          headers: [
            ['Referer', '[Filtered]'],
            [
              'User-Agent',
              'Mozilla/5.0 (Linux; Android 7.0; ONEPLUS A3003 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/56.0.2924.87 Mobile Safari/537.36',
            ],
          ],
          url: 'https://sentry.io/hiventy/kraken-prod/issues/438681831/',
          query: 'referrer=slack',
          data: null,
          method: null,
        },
      },
    ],
    [
      {
        type: 'exception',
        data: {
          values: [
            {
              stacktrace: {
                frames: [
                  {
                    function: null,
                    colNo: null,
                    vars: {},
                    symbol: null,
                    module: '<unknown module>',
                    lineNo: null,
                    errors: null,
                    package: null,
                    absPath:
                      'https://sentry.io/hiventy/kraken-prod/issues/438681831/?referrer=slack#',
                    inApp: false,
                    instructionAddr: null,
                    filename: '/hiventy/kraken-prod/issues/438681831/',
                    platform: null,
                    context: [],
                    symbolAddr: null,
                  },
                ],
                framesOmitted: null,
                registers: null,
                hasSystemFrames: false,
              },
              module: null,
              rawStacktrace: null,
              mechanism: null,
              threadId: null,
              value: 'Unexpected token else',
              type: 'SyntaxError',
            },
          ],
          excOmitted: null,
          hasSystemFrames: false,
        },
      },
      {
        type: 'breadcrumbs',
        data: {
          values: [
            {
              category: 'xhr',
              level: 'info',
              event_id: null,
              timestamp: '2018-01-23T08:12:53.591Z',
              data: {
                url: 'https://reload.getsentry.net/page/',
                status_code: '201',
                method: 'POST',
              },
              message: null,
              type: 'http',
            },
            {
              category: 'xhr',
              level: 'info',
              event_id: null,
              timestamp: '2018-01-23T08:12:53.636Z',
              data: {
                url: '/api/0/organizations/?member=1',
                status_code: '200',
                method: 'GET',
              },
              message: null,
              type: 'http',
            },
            {
              category: 'xhr',
              level: 'info',
              event_id: null,
              timestamp: '2018-01-23T08:12:53.895Z',
              data: {url: '/api/0/internal/health/', status_code: '403', method: 'GET'},
              message: null,
              type: 'http',
            },
          ],
        },
      },
      {
        type: 'request',
        data: {
          fragment: '',
          cookies: [],
          inferredContentType: null,
          env: null,
          headers: [
            ['Referer', '[Filtered]'],
            [
              'User-Agent',
              'Mozilla/5.0 (Linux; Android 7.0; ONEPLUS A3003 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/56.0.2924.87 Mobile Safari/537.36',
            ],
          ],
          url: 'https://sentry.io/hiventy/kraken-prod/issues/438681831/',
          query: 'referrer=slack',
          data: null,
          method: null,
        },
      },
    ],
  ];
}
