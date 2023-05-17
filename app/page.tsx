import Image from 'next/image'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList />
        </Suspense>
        {/* SuspenseでラップすることでNotesList(初期に未解決のサーバーコンポーネント)
        を待たずにHydrationできる */}
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
