import React from "react";
import { Card, Container, DownloadCard, PageHero, Section } from "../components/DesignSystem";

const ContestRulesPage = () => {
  return (
    <div className="page-surface">
      <PageHero title="CONTEST RULES" />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <a href="#rules" className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">DD Robocon India 2026 Rules</a>
                <a href="#theme" className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">ABU Robocon 2026 Theme & Rules</a>
              </div>
            </aside>
            <div className="space-y-6">
              <Card id="rules" className="p-6 sm:p-8">
                <p className="text-lg font-semibold text-slate-900">
                  DD Robocon India 2026 Rules
                </p>
                <p id="theme" className="mt-4 text-slate-600">
                  ABU Robocon 2026 Theme & Rules
                </p>
                <p className="mt-2 text-slate-500">
                  Please refer to the{" "}
                  <a href="https://app7.rthk.hk/special/aburobocon2026" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline">
                    ABU Robocon 2026 website
                  </a>{" "}
                  for the latest updates.
                </p>
              </Card>
              <DownloadCard title="ABU Robocon 2026 Theme & Rules" href="https://app7.rthk.hk/special/aburobocon2026">
                ABU Robocon 2026 website
              </DownloadCard>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContestRulesPage;
