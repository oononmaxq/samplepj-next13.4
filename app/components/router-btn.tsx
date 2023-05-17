'use client'
import { useRouter } from 'next/navigation'

export default function RouterBtn({
  destination = '',
}: {
  destination?: string
}) {
  const router = useRouter()
  return (
    <button
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        // 1回目のpushはHardNavigation, 2回目以降はSoftNavigation ※Next.js13.4以降
        router.push(`/${destination}`)
      }}
    >
      Nav to {destination ? destination : 'Home'}
    </button>
  )
}
