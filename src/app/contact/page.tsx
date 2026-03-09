import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Support | Primematrix Tanzania Limited",
  description: "Get in touch with Primematrix for institutional support, technical inquiries, and professional consulting services in Tanzania.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Institutional Support"
        description="Our technical and compliance teams are available to address your inquiries. Submit a formal request for consultancy, training, or technical support services."
      />

      <Contact />
    </>
  );
};

export default ContactPage;