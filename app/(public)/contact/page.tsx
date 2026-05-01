import ContactForm from '@/src/features/contact/components/ContactForm'
import Information from '@/src/features/contact/components/Information'

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto w-full py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
        <Information />
        <ContactForm />
      </div>
    </section>
  )
}