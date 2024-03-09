import Image from "next/image";
// import getImageBase64 from "../../../../lib/getImageBase";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

const gitUrl: string =
  "https://raw.githubusercontent.com/samjain233/blog-server/main/images/";

export default async function CustomImage({ src, alt, priority }: Props) {
  const prty = priority ? true : false;
  // const myBlurDataUrl = await getImageBase64(gitUrl + src);
  return (
    <div className="w-full h-full mt-[1em]">
      <Image
        className="w-full h-[60vw] md:h-[30vw] lg:h-[25vw] xl:h-[28vw] object-cover"
        src={gitUrl + src}
        alt={`${alt} - Trippify`}
        width={650}
        height={365}
        priority={prty}
        // placeholder="blur"
        // blurDataURL={myBlurDataUrl}
        // unoptimized={true}
      />
    </div>
  );
}
