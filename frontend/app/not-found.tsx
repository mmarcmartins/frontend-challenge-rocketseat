import Container from '@/components/Container'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada 🧌</h1>      
      Retorne para a <Link href="/">Página principal</Link>
    </Container>
  )
}