import { useRouter } from 'next/router';
import { games } from '../data/games';

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;
  const game = games.find((g) => g.slug === slug);

  if (!game) return <div className="p-6">Game not found</div>;

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
      <iframe
        src={game.url}
        title={game.title}
        className="w-full h-[80vh] border rounded"
        allowFullScreen
      />
    </div>
  );
}
