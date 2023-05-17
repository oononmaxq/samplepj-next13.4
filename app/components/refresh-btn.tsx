'use client'
import { useRouter } from 'next/navigation'

export default function RefreshBtn() {
  const router = useRouter()
  return (
    <button
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        // push, replaceは状態を保持したまま遷移する.
        // refreshはDataFetchしなおす
        router.refresh()
      }}
    >
      Router Refresh
    </button>
  )
}
