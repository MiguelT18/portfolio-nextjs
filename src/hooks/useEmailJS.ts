import emailjs from "@emailjs/browser"

const useEmailJS = () => {
  const sendEmail = async (form: any) => {
    try {
      const response = await emailjs.sendForm(
        "service_a9cfpjf",
        "portfolio_contact_form",
        form,
        {
          publicKey: "pvQsSyKezHS-TGlMD",
        }
      )
      return response
    } catch (error: any) {
      throw new Error("Failed to send email: " + error.text)
    }
  }

  return { sendEmail }
}

export default useEmailJS
