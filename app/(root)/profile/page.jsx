'use client'

import { SignedIn,UserButton } from "@clerk/nextjs"
import '@/styles/globals.css'

export default function page() {
  return (
    <div>
      <ul role="list" class="grid gap-x-8 mt-20 py-8 px-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
          <div class="flex items-center gap-x-6">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Kasim zainab</h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">Owner of:</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
