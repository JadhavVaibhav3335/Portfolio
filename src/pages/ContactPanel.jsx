import { useState } from 'react';
import { useForm } from 'react-hook-form';

const address = 'vaibhavjadhav5416@gmail.com';
export default function ContactPanel() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [state, setState] = useState('');
  const [feedback, setFeedback] = useState('');
  const configured = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  async function send(data) {
    setState('sending'); setFeedback('Sending your message…');
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { ...data, form_name: data.name, form_email: data.email, title: 'Portfolio Contact Request' }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      setState('success'); setFeedback('Message sent. Thank you for getting in touch.'); reset();
    } catch { setState('error'); setFeedback('Your message could not be sent. Please try again or use the email link.'); }
  }
  async function copy() { try { await navigator.clipboard.writeText(address); setFeedback('Email address copied.'); } catch { setFeedback(`Copy this address: ${address}`); } }
  return <section className="contact-section" id="contact"><div className="wrap contact-layout"><div><p className="eyebrow">CONTACT</p><h2>Let’s talk about<br/>what you’re building.</h2><p className="contact-description">Open to internships, full-time roles, and selected freelance projects. Share your goals and let’s discuss a practical implementation plan.</p><a className="email-address" href={`mailto:${address}`}>{address}</a><div className="contact-actions"><a className="button light" href={`mailto:${address}`}>Send an email</a><button className="copy-email" onClick={copy}>Copy email</button></div><div className="phone-links"><a href="tel:+917498857012">+91 7498857012</a><a href="tel:+918600738954">+91 8600738954</a><span>Pune, Maharashtra</span></div></div><div className="contact-message">{configured ? <form onSubmit={handleSubmit(send)} noValidate><h3>Send a message</h3><label htmlFor="contact-name">Name</label><input id="contact-name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name',{ required:'Enter your name.', validate: v => Boolean(v.trim()) || 'Enter your name.' })}/>{errors.name && <p className="form-error" id="name-error">{errors.name.message}</p>}<label htmlFor="contact-email">Email</label><input id="contact-email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email',{ required:'Enter your email.', pattern:{ value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:'Enter a valid email address.' } })}/>{errors.email && <p className="form-error" id="email-error">{errors.email.message}</p>}<label htmlFor="contact-message">Message</label><textarea id="contact-message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message',{required:'Enter a message.',validate:v => Boolean(v.trim()) || 'Enter a message.'})}/>{errors.message && <p className="form-error" id="message-error">{errors.message.message}</p>}<button className="button light" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</button></form> : <div className="contact-brief"><h3>A good place to start</h3><p>Tell me what you’re working on, the problem you want to solve, and the kind of support you need.</p><p>Use the email link to start a conversation, or call either number listed here.</p><a className="text-link" href="/Vaibhav_jadhav_resume.pdf" target="_blank" rel="noreferrer">View my resume</a></div>}<p className="copy-status" role="status">{feedback}</p></div></div></section>;
}
