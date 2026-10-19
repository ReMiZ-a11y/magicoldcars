import Image from "next/image";

const paymentsData = [
  {
    id: 1,
    image: "/images/city/herb-lubawa.svg",
    href:'https://samorzad.gov.pl/web/miasto-lubawa',
    alt: "Lubawa",
    width: 33,
  },
  {
    id: 2,
    image: "/images/city/herb-ilawa.svg",
    href:'https://miastoilawa.pl/samorzad-administracja/urzad-miasta',
    alt: "Iława",
    width: 33,
  },
  {
    id: 3,
    image: "/images/city/herb-grunwald.svg",
    alt: "Grunwald",
    href:'https://www.gminagrunwald.pl/asp/pl_start.asp?typ=14&submenu=134&menu=134&strona=1&schemat=',
    width: 33,
  },
  {
    id: 4,
    image: "/images/city/herb-lidzbark.svg",
    alt: "Lidzbark",
    href:'https://bip.umig.lidzbark.pl/',
    width: 33,
  },
  { 
    id: 5,
    image: "/images/city/herb-ostroda.svg",
    alt: "Ostroda",
    href:'https://www.gminaostroda.pl/',
    width: 33,
  },
    {
    id: 6,
    image: "/images/city/herb-zalewo.svg",
    alt: "Zalewo",
    href:'https://zalewo.pl/',
    width: 33,
  },
];

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="py-5 xl:py-7.5 bg-gray-1">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <p className="font-medium text-dark-3 text-sm">
            &copy; {year}. Wszystkie Prawa Zastrzezone {" "}
            <a
              className="text-dark"
              href="https://pimjo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pimjo
            </a>
            ,
            <a
              className="text-dark"
              href="https://github.com/ReMiZ-a11y"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReMiZ-a11y
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <p className="font-medium text-sm text-dark-3">Wspłpracujemy z samorządami:</p>

            <div className="flex flex-wrap items-center gap-4">
              {paymentsData.map((payment) => (
                <div
                  key={payment.id}
                  className="  inline-flex items-center justify-center"
                >
                  <Image
                    src={payment.image}
                    alt={payment.alt}
                    width={payment.width}
                    height={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
