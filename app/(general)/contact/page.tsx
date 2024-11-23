import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Pagina de contacto de mis servicios',
};

export default function ContactPage() {
  return (
    <>
      <span className='text-7xl'>Contact Page</span>
    </>
  );
}
