import CertificationCard from "../components/cards/CertificationCard";
import { ICertificate } from "../interfaces/ICertificate";

const certificateList: ICertificate[] = [
  {
    link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/b8f05d37-519e-401f-8369-7bf1a9867969-riccardo-7e685681-7f4a-4115-bdef-691667c25f06-certificate.pdf",
    image: "/images/certificate/CKAD.jpg",
  },
  {
    link: "https://www.instagram.com/p/DDKDUNFTBT8/?img_index=1",
    image: "/images/certificate/HackathonICP.png",
  },
  {
    link: "https://coursera.org/share/4881e76dae49b391e5da7a27dac7c874",
    image: "/images/certificate/MetaAndroidDeveloper.png",
  },
  {
    image: "/images/certificate/InnovationAward.png",
  },
  {
    link: "https://coursera.org/share/4495e44a9580a23bffa33309358b627f",
    image: "/images/certificate/IntroToAndroidMobileAppDev.png",
  },
  {
    link: "https://coursera.org/share/dc52f8355cd5eab82a1c0f87852a2fc9",
    image: "/images/certificate/VersionControl.png",
  },
  {
    link: "https://coursera.org/share/2a605325923c2437edbf1fb0d5321e41",
    image: "/images/certificate/PrinciplesOfUXUIDesign.png",
  },
  {
    link: "https://coursera.org/share/d5f0379703666c87d09c82624267415c",
    image: "/images/certificate/ProgrammingFundamentalsInKotlin.png",
  },
  {
    link: "https://coursera.org/share/a1dc26f9580ca7e1748a77681632351e",
    image: "/images/certificate/CreateTheUserInterfaceInAndroidStudio.png",
  },
  {
    link: "https://coursera.org/share/80bdbcb494de060bd5890618b346ad2b",
    image: "/images/certificate/AdvancedProgrammingInKotlin.png",
  },
  {
    link: "https://coursera.org/share/db53587871101a5fa72f04addc52129d",
    image: "/images/certificate/WorkingWithDataInAndroid.png",
  },
  {
    link: "https://coursera.org/share/7ceb9ed368f579e5906acecc241d9e4c",
    image: "/images/certificate/MobileDevelopmentAndJavascript.png",
  },
  {
    link: "https://coursera.org/share/05b5320af9f01e23e9a4ae8692445577",
    image: "/images/certificate/ReactBasics.png",
  },
  {
    link: "https://coursera.org/share/34f21eb1ef7f3747247f400f5364b26a",
    image: "/images/certificate/ReactNative.png",
  },
  {
    link: "https://coursera.org/share/e372efbf51e86fe2804f5c25bf9d8398",
    image: "/images/certificate/AndroidAppCapstone.png",
  },
  // {
  //   link: "https://coursera.org/share/fed16238548238f0a961c6d75b73cae1",
  //   image: "/images/certificate/CodingInteriewPreparation.png",
  // },
];

export default function CertificationPage() {
  return (
    <>
      <div className="mx-auto my-20 flex flex-grow flex-col justify-start overflow-hidden md:my-28">
        <h1 className="mb-4 text-center text-xl font-bold md:mb-10 md:text-3xl">
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
