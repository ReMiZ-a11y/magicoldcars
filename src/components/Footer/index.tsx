import { CallIcon, EmailIcon, MapIcon } from "@/assets/icons";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/assets/icons/social";
import Link from "next/link";
import AccountLinks from "./AccountLinks";
import FooterBottom from "./FooterBottom";
import { AppStoreIcon, GooglePlayIcon } from "./icons";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
                Pomoc i kontakt
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex gap-4.5">
                <span className="shrink-0">
                  <MapIcon className="w-6 h-6 text-blue" />
                </span>
                14-260 Lubawa, woj. warmińsko-mazurskie
              </li>

              <li>
                <Link
                  href="tel:+48 508-575-891"
                  className="flex items-center gap-4.5"
                >
                  <CallIcon className="w-6 h-6 text-blue" />
                  (+48) 508-575-891
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:magicoldcars@wp.pl"
                  className="flex items-center gap-4.5"
                >
                  <EmailIcon className="w-6 h-6 text-blue" />
                  magicoldcars@wp.pl
                </Link>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="flex items-center gap-4 mt-7.5">
              <Link
                href="#"
                className="flex duration-200 ease-out hover:text-blue"
              >
                <span className="sr-only">Facebook link</span>
                <FacebookIcon />
              </Link>

              <Link
                href="#"
                className="flex duration-200 ease-out hover:text-blue"
              >
                <span className="sr-only">Twitter link</span>
                <TwitterIcon />
              </Link>

              <Link
                href="#"
                className="flex duration-200 ease-out hover:text-blue"
              >
                <span className="sr-only">Instagram link</span>
                <InstagramIcon />
              </Link>

              <Link
                href="#"
                aria-label="Linkedin Social Link"
                className="flex duration-200 ease-out hover:text-blue"
              >
                <span className="sr-only">LinkedIn link</span>
                <LinkedInIcon />
              </Link>
            </div>
            {/* <!-- Social Links end --> */}
          </div>

          <AccountLinks />

          <QuickLinks />

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark lg:text-right">
             Głowny Sponsor 
            </h2>

            <p className="mb-4 lg:text-right text-custom-sm">
            Miasto Lubawa 
            </p>

            <ul className="flex flex-col gap-3 lg:items-end">
              <li>
                <Link
                  className="inline-flex items-center gap-3 py-[9px] pl-4 pr-8.5 text-white rounded-xl bg-blue ease-out duration-200 hover:bg-opacity-95"
                   href="https://lubawa.pl/"
                >
                  <GooglePlayIcon />

                  <div>
                    <span className="block text-custom-xs"> Miasto lubawa </span>
                    <p className="font-medium">orzeły</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
