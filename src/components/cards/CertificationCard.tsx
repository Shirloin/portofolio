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
        className="animate__animated animate__zoomIn h-[380px] max-w-[500px]"
        href={certificate.link || undefined}
        target={certificate.link ? "_blank" : undefined}
      >
        <img
          id="cardHover"
          className="min-h-full min-w-full rounded-lg border object-contain"
          src={certificate.image}
          alt=""
          loading="lazy"
        />
      </a>
    </>
  );
}
