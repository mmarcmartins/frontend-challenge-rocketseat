import { Header } from '@/components/Header';
import { Snackbar } from '@/components/Snackbar';
import StyledComponentsRegistry from '@/lib/registry'
import Providers from '@/utils/provider';
import type { Metadata } from 'next'
import { Saira, Saira_Stencil_One } from 'next/font/google'

const SairaFont = Saira({ subsets: ['latin'], variable: '--font-content' })
const SairaStencilOne = Saira_Stencil_One({ subsets: ['latin'] , weight: '400', variable: '--font-title' });

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'E-commerce - Capputeeno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body style={{margin: 0, backgroundColor: '#F0F0F5'}} suppressHydrationWarning={true} className={`${SairaStencilOne.variable} ${SairaFont.className}`}>
        <Providers>          
          <StyledComponentsRegistry>
          <Header/>
          {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
