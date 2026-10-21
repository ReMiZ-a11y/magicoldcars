import Breadcrumb from '@/components/Common/Breadcrumb';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import Sidebar from './_component/sidebar';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
title: "Moje konto | Magic Old Cars – Klub Motoryzacyjny",
description: "Zarządzaj swoim kontem w Magic Old Cars. Edytuj dane osobowe, adres rozliczeniowy, sprawdzaj zamówienia i korzystaj z funkcji dla członków naszej społeczności miłośników klasycznej motoryzacji.",
// other metadata
};

export default function Layout({ children }: PropsWithChildren) {

  return (
    <>
      <Breadcrumb title={'My Account'} pages={['my account']} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            <Sidebar />
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
