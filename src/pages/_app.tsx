import type { AppProps } from 'next/app'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { StyledTheme } from '../assets/theme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyledComponentsProvider theme={StyledTheme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</StyledComponentsProvider>
	)
}
