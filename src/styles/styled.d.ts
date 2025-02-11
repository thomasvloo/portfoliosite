import 'styled-components';

import { ThemeType } from './theme';

// Extend the default theme interface properly
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
