import ProfileSearch from "@/components/ProfileSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute left-15 top-5 z-1">
        <Image
          src={"/square.png"}
          alt="Imagem de um quadrado"
          width={239}
          height={225}
        />
      </div>
      <div className="absolute -left-25 top-100 mask-x-from-80% rotate-180 ">
      <Image src={'/circle.png'} alt="bola de brilho" width={674} height={674}/>
      </div>
      <div className="absolute top-50 left-50 z-25">
        <ProfileSearch />
      </div>
      <div className="absolute right-0 z-1">
    <Image src={'/circle.png'} alt="bola de brilho" width={674} height={674}/>
    </div>
    </div>
  );
}
