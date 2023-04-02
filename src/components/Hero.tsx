import Image from "next/image"

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ( { imgUrl, title, text }: Props ) => {
  return (
    <section className="py-32 bg-opacity-70 bg-violet-900 relative">
        <div className="container flex flex-col-reverse h-full w-full items-center justify-end text-center md:text-start">
          <div className="text-white max-w-2xl px-4">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl">{text}</p>
          </div>
        </div>
        <Image priority objectFit="cover" objectPosition="center" layout="fill" src={imgUrl} alt="hero image" />
    </section>
  )
}

export default Hero
