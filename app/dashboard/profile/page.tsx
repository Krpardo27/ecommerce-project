import ProfileForm from "@/src/features/profile/components/ProfileForm"
import Heading from "@/src/shared/components/ui/typography/Heading"
import { generatePageTitle } from "@/src/utils/metadata"
import { Metadata } from "next"

const title = 'Administra tu perfil'

export const metadata: Metadata = {
  title: generatePageTitle(title)
}

export default async function ProfilePage() {
  return (
    <>
      <Heading level={1}>{title}</Heading>
      <ProfileForm />
    </>
  )
}
