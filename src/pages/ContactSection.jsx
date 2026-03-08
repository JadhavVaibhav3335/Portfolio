import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    const params = {
      name: data.name,
      email: data.email,
      message: data.message,
      form_name: data.name,
      form_email: data.email,
      title: "Portfolio Contact Request",
    };

    toast.loading("Sending message...", { id: "sending" });
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { id: "sending" });
          setSuccess(true);
          setLoading(false);

          setTimeout(() => {
            setSuccess(false);
            reset();
          }, 2500);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Try again later.", {
            id: "sending",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-24 contact-section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.25 }}
        className="section-shell contact-grid"
      >
        <div className="contact-copy">
          <span className="section-label">Contact</span>
          <h2 className="section-title contact-title">Let&apos;s build something that ships fast</h2>
          <p className="section-subtitle contact-subtitle">
            Open to internship, full-time roles and selected freelance projects. Share your
            project goals and I will respond with a practical implementation plan.
          </p>

          {[
            {
              icon: <Mail className="text-sky-300" />,
              text: "vaibhavjadhav5416@gmail.com",
            },
            {
              icon: <Phone className="text-emerald-300" />,
              text: "+91 7498857012 / +91 8600738954",
            },
            {
              icon: <MapPin className="text-rose-300" />,
              text: "Pune, Maharashtra",
            },
          ].map((item) => (
            <motion.div
              key={item.text}
              whileHover={{ y: -2 }}
              className="contact-item glass-card"
            >
              {item.icon}
              <span className="contact-item-text">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card contact-form"
        >
          {success && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="contact-success"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 140, delay: 0.1 }}
                className="contact-success-icon"
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <p className="contact-success-text">Message Sent Successfully!</p>
            </motion.div>
          )}

          {!success && (
            <>
              <div>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
              </div>

              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>

              <div>
                <label className="form-label">Message</label>
                <textarea
                  className="form-input form-textarea"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p className="form-error">{errors.message.message}</p>}
              </div>

              <motion.button
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                disabled={loading}
                className={`contact-submit ${loading ? "is-loading" : ""}`}
              >
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
