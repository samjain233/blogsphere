import Image from "next/image";

export default function CustomImageComponent({ src, alt, priority }) {
  const prty = priority ? priority : false;
  return (
    <div className="w-full h-full mt-[1em]">
      <Image
        className="w-full h-[60vw] md:h-[30vw] lg:h-[25vw] xl:h-[28vw] object-cover"
        src={src}
        alt={`${alt} - BlogSphere`}
        width={650}
        height={365}
        priority={prty}
      />
    </div>
  );
}
