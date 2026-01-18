import Section from '../ui/Section';
import Card from '../ui/Card';

const articles = [
  {
    title: 'Understanding Microservices',
    platform: 'Published on Dev.to',
    description: 'An in-depth guide to microservices architecture.',
  },
  {
    title: 'REST vs GraphQL',
    platform: 'Published on Medium',
    description: 'Discussing the benefits and downsides of both approaches.',
  },
  {
    title: 'Performance Optimization',
    platform: 'Published on Hashnode',
    description: 'Techniques to optimize backend applications.',
  },
];

export default function Writing() {
  return (
    <Section id="writing" variant="default">
      <div className="mb-12 text-center">
        <h2 className="section-title mb-3 text-3xl font-bold">
          Writing
        </h2>
        <p className="section-subtitle">
          Recent articles and posts.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <Card key={index} hover={false}>
            <div className="flex gap-4">
              <div className="image-placeholder h-20 w-20 flex-shrink-0 rounded-lg" />
              <div className="flex-1">
                <h3 className="writing-item-title mb-1 text-lg font-semibold">
                  {article.title}
                </h3>
                <p className="writing-item-platform mb-2 text-sm">
                  {article.platform}
                </p>
                <p className="writing-item-description">
                  {article.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

