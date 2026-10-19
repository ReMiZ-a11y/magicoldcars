import Link from 'next/link'

const quickLinks = [
  {
    id: 1,
    label: 'Polityka prywatności',
    href:'/agreements/polityka_prywatnosci.pdf',
  },
  {
    id: 2,
    label: 'Polityka cookies i podobnych technologii',
    href:'/agreements/polityka_cookies_i_podobnych_technologii.pdf',
  },
  {
    id: 3,
    label: 'Regulamin zlotów samochodowych o charakterze nie masowym',
    href: '/agreements/regulamin_zlotow_samochodowych_o_charakterze_niem_masowym.pdf',
  },
  {
    id: 4,
    label: "Najczęściej Zadawane Pytania",
    href: '/agreements/najczesciej zadawane pytania.pdf',
  },
  {
    id: 5,
    label: 'Kontakt',
    href: '/contact',
  },
]

export default function QuickLinks() {
  return (
    <div className="w-full sm:w-auto">
      <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
        Polityka i Regulamin
      </h2>

      <ul className="flex flex-col gap-3">
        {
          quickLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="ease-out duration-200 hover:text-blue"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}

      </ul>
    </div>
  )
}
