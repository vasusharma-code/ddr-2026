import React from "react";
import { Card, Container, PageHero, Section } from "../components/DesignSystem";

const ContactUsPage = () => {
  return (
    <div className="page-surface">
      <PageHero title="CONTACT US" />
      <Section>
        <Container>
          <Card className="mx-auto max-w-2xl p-6 sm:p-8">
            <div className="text-slate-600 space-y-3 leading-7">
              <p>DD Robocon 2026 Secretariat</p>
              <p>Department of Mechanical Engineering,</p>
              <p>Indian Institute of Technology Delhi</p>
              <p>Hauz Khas, New Delhi - 110016</p>
              <p>INDIA</p>
              <p>
                <strong className="text-slate-900">Phone no:</strong> +91-90138-99145
              </p>
              <p>
                <strong className="text-slate-900">Email:</strong>{" "}
                <a href="mailto:ddroboconiitd@gmail.com" className="font-semibold text-blue-700 underline">
                  ddroboconiitd@gmail.com
                </a>
              </p>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default ContactUsPage;
