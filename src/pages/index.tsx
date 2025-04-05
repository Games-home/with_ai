import Link from 'next/link';
import { games } from '../data/games';
import { Card } from '../components/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Play Games with AI</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link href={`/${game.slug}`} key={game.slug}>
            <Card>
              <h2 className="text-xl font-semibold">{game.title}</h2>
              <p className="text-sm text-gray-600">{game.url}</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
