import ContactForm from "./ContactForm";
import Info from "./Info";

export default function Contact() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-32">
      <div className="mb-16 flex items-center gap-4">
        <div className="h-px w-12 bg-[#FACC15]" />
        <h3
          id="contact-me"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl scroll-mt-20"
        >
          Let's connect!
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <Info />

        <ContactForm />
      </div>
    </section>
  );
}
