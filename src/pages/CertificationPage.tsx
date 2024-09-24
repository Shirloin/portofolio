import CertificationCard from "../components/cards/CertificationCard";
import { ICertificate } from "../interfaces/ICertificate";

const certificateList: ICertificate[] = [
  {
    link: "https://coursera.org/share/4495e44a9580a23bffa33309358b627f",
    image: "/images/certificate/IntroToAndroidMobileAppDev.jpeg",
  },
  {
    link: "https://coursera.org/share/dc52f8355cd5eab82a1c0f87852a2fc9",
    image: "/images/certificate/VersionControl.jpeg",
  },
  {
    link: "https://coursera.org/share/2a605325923c2437edbf1fb0d5321e41",
    image: "/images/certificate/PrinciplesOfUXUIDesign.jpeg",
  },
  {
    link: "https://coursera.org/share/d5f0379703666c87d09c82624267415c",
    image: "/images/certificate/ProgrammingFundamentalsInKotlin.jpeg",
  },
];

export default function CertificationPage() {
  return (
    <>
      <div className="mx-auto my-20 flex flex-col justify-start overflow-hidden md:my-28">
        <h1 className="mb-4 text-center text-base font-bold md:mb-10 md:text-3xl">
          Certification Lists
        </h1>
        <div className="grid w-full place-items-center gap-4 px-4 sm:grid-cols-2 sm:gap-10">
          {certificateList.map((certificate, i) => (
            <CertificationCard certificate={certificate} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
