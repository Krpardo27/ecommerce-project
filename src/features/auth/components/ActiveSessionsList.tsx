import Heading from '@/src/shared/components/ui/typography/Heading'
import { authService } from '../services/AuthService'

export default async function ActiveSessionsList() {

  const sessions = await authService.getSessions()
  console.log(sessions)

  return (
    <>
      <Heading level={1}>Sesiones Activas</Heading>
    </>
  )
}
