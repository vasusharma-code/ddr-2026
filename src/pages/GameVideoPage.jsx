import React from "react";
import { Card, Container, PageHero, Section, VideoCard } from "../components/DesignSystem";

const GameVideoPage = () => {
  return (
    <div className="page-surface">
      <PageHero title="Game Video" />
      <Section>
        <Container className="space-y-8">
          <VideoCard
            title="Game Video"
            src="https://www.youtube.com/embed/R9sRH5YIItM?si=iypiGSsQ8svqvvRU"
            link={(
              <>
                <p className="text-sm text-slate-600">
                  If the video doesn't play, watch it on YouTube:
                </p>
                <a href="https://youtu.be/R9sRH5YIItM?si=iypiGSsQ8svqvvRU" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 underline">
                  Watch on YouTube
                </a>
              </>
            )}
          />

          <Card className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-slate-900">Game Theme</h2>
            <h3 className="mt-4 text-xl font-bold text-slate-700">
              “Kung Fu Quest”
            </h3>
            <p className="mt-4 text-slate-700 leading-8">
              The theme symbolises the journey of a martial-arts disciple pursuing
              mastery through discipline, strategy, teamwork and harmony.
              <br />
              <br />
              It fuses traditional Chinese martial arts culture with advanced
              robotics, inviting competing teams to explore not only mechanical and
              electronic design, but also the spirit of coordination and intelligent
              strategy.
            </p>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default GameVideoPage;
