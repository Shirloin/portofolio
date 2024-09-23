import CertificationCard from "../components/cards/CertificationCard";
import { ICertificate } from "../interfaces/ICertificate";

const certificateList: ICertificate[] = [
  {
    link: "https://coursera.org/share/4495e44a9580a23bffa33309358b627f",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2RSF9XCQVCZP/CERTIFICATE_LANDING_PAGE~2RSF9XCQVCZP.jpeg",
  },
  {
    link: "https://coursera.org/share/dc52f8355cd5eab82a1c0f87852a2fc9",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D9K4XUX5ZKBK/CERTIFICATE_LANDING_PAGE~D9K4XUX5ZKBK.jpeg",
  },
  {
    link: "https://coursera.org/share/2a605325923c2437edbf1fb0d5321e41",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WSQN255ZJNZW/CERTIFICATE_LANDING_PAGE~WSQN255ZJNZW.jpeg",
  },
  {
    link: "https://coursera.org/share/d5f0379703666c87d09c82624267415c",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~58BCMWONZXIV/CERTIFICATE_LANDING_PAGE~58BCMWONZXIV.jpeg",
  },
];

export default function CertificationPage() {
  return (
    <>
      <div className="mx-auto my-20">
        <h1 className="animate__animated animate__fadeInLeft mb-4 text-center text-lg font-bold md:mb-10 md:mt-4 md:text-3xl">
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
