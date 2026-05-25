import { ContactFormProps } from "@/types";

export default function EmailTemplate({
  name,
  company,
  email,
  message,
}: ContactFormProps) {
  return (
    <div>
      <h2>Someone sent you an email from your portfolio</h2>
      <p>
        <strong>Name:</strong> {name || "Not specified"}
      </p>
      <p>
        <strong>Company:</strong> {company || "Not specified"}
      </p>
      <p>
        <strong>Email:</strong> {email || "Not specified"}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message || "Not specified"}</p>
    </div>
  );
}
