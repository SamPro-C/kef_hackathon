
'use client';

import dynamic from 'next/dynamic'

const GameClient = dynamic(() => import('@/components/game/GameClient'), {
  ssr: false,
  loading: () => <p className="text-center mt-40">Loading Challenge...</p>
})

export default function GamePage() {
  return <GameClient />
}
