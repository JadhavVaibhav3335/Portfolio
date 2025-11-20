import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <section  className="w-full py-16 px-4 bg-[#1f1f1f]" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
      >
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="text-gray-400">
            I am always open to discussing new projects, creative ideas, or opportunities.
          </p>

          {[
            {
              icon: <Mail className="text-blue-400" />,
              text: "vaibhavjadhav5416@gmail.com",
            },
            {
              icon: <Phone className="text-green-400" />,
              text: "+91 7498857012",
            },
            {
              icon: <MapPin className="text-red-400" />,
              text: "Pune, Maharashtra",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 bg-[#151515] rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.08)] border border-white/10"
            >
              {item.icon}
              <span className="text-gray-300 text-lg">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] p-8 shadow-xl rounded-2xl border border-white/10 space-y-4"
        >
          {success && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 140, delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center"
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

              <p className="text-green-400 mt-4 text-lg">
                Message Sent Successfully!
              </p>
            </motion.div>
          )}

          {/* FORM UI (hidden after success) */}
          {!success && (
            <>
              <div>
                <label className="text-gray-300 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full text-white mt-1 p-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="text-gray-300 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full text-white mt-1 p-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-gray-300 font-semibold">Message</label>
                <textarea
                  className="w-full text-white mt-1 p-3 border border-gray-700 rounded-xl h-32 resize-none focus:ring-2 focus:ring-blue-500"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition 
                  ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
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
