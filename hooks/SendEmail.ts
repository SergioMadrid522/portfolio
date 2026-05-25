import { contactFormSchema } from "@/schemas/contact.schema";
import { useState } from "react";
import toast from "react-hot-toast";

export function SendEmail() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    const apiKey = process.env.NEXT_PUBLIC_API_URL_SEND_EMAIL;
    e.preventDefault();

    const validation = contactFormSchema.safeParse({
      name,
      company,
      email,
      message,
    });
    if (!validation.success) {
      const error = validation.error.issues[0].message;
      toast.error(error);
      return;
    }

    try {
      if (!apiKey) return;
      setLoading(true);
      const res = await fetch(apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (!res) {
        toast.error(data.errors || "Credenciales incorrectas");
        return;
      }
      toast.success("Email sent!");

      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong, try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    name,
    setName,
    company,
    setCompany,
    email,
    setEmail,
    message,
    setMessage,
    loading,
    handleSubmit,
  };
}
