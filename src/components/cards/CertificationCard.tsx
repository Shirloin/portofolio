import { ICertificate } from "../../interfaces/ICertificate";

interface CertificationCardProps {
  certificate: ICertificate;
}

export default function CertificationCard({
  certificate,
}: CertificationCardProps) {
  return (
    <>
      <a
        className="animate__animated animate__zoomIn max-w-xl"
        href={certificate.link}
        target="_blank"
      >
        <img
          className="h-full w-full rounded-lg border object-contain"
          src={certificate.image}
          alt=""
          loading="lazy"
        />
      </a>
    </>
  );
}
