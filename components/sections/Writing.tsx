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
        <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:!text-white">
          Writing
        </h2>
        <p className="text-gray-600 dark:!text-white">
          Recent articles and posts.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <Card key={index} hover={false}>
            <div className="flex gap-4">
              <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-200 dark:bg-slate-800/50" />
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:!text-white">
                  {article.title}
                </h3>
                <p className="mb-2 text-sm text-gray-500 dark:!text-white">
                  {article.platform}
                </p>
                <p className="text-gray-600 dark:!text-white">
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

