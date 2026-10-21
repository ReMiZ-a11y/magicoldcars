'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  return (
    <main className="xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 py-9.5 px-4 sm:px-7.5 xl:px-10">
      <p className="text-dark">
        Witaj {session?.user?.name} (not {session?.user?.name} ?
        <button
          onClick={() => signOut({ callbackUrl: '/signin' })}
          className="text-red ease-out duration-200 hover:underline pl-1"
        >
          Wyloguj się
        </button>
        )
      </p>

      <p className="text-custom-sm mt-4">
W panelu swojego konta możesz przeglądać ostatnie zamówienia, zarządzać adresami dostawy i rozliczeniowym, a także zmieniać hasło oraz edytować dane konta.
      </p>
    </main>
  );
}
