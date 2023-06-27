import { FC } from "react";
import { BackgroundBlur } from "~/src/components/blur";
import { Footer } from "~/src/components/footer";
import { Header } from "~/src/components/header";
import { Navbar } from "~/src/components/navbar";

interface Props {
  title: string;
  children: React.ReactNode;
  backgroundBlurColor?: string;
  gradient: {
    from: string;
    to: string;
  };
}

export const PageLayout: FC<Props> = ({
  title,
  children,
  backgroundBlurColor,
  gradient,
}) => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-bl from-[${gradient.from}] to-[${gradient.to}]`}
    >
      <Header title={title} />
      <div className="relative ">
        {backgroundBlurColor && <BackgroundBlur color={backgroundBlurColor} />}
        <div className="min-h-screen max-w-6xl mx-auto">
          <main className="relative pt-12 pb-10 px-5">
            <Navbar title={title} />
            <div className="pt-14 space-y-8">{children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};
