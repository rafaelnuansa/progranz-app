import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Progranz Indonesia</h1>
          <span className="inline-block -rotate-1 animate-gradient-pulse rounded-xl ring-2 ring-gray/100 shadow-2xl shadow-gray/[0.25] ml-1 bg-gradient-to-r from-background via-gray/10 to-background px-4 py-2 text-lg tracking-tight text-foreground sm:px-4 sm:py-3 sm:text-lg lg:text-xl">
            Provide An Easy Way
          </span>
          <p className="mt-5 mb-3 text-base leading-relaxed tracking-tighter text-muted-foreground sm:text-xl/[1rem] xl:text-2xl/[1.5rem]">
            Kami menawarkan jasa pembuatan Website dan Aplikasi
            Dapatkan harga terbaik dan kepuasan berpartner dengan kami
          </p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-gray-800 hover:bg-gray-900 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-900">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
       
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
      className="dark:hidden w-[272px] h-[572px]"
      alt=""
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
      className="hidden dark:block w-[272px] h-[572px]"
      alt=""
    />
  </div>
</div>

        </div>
      </div>
    
    </section>
  );
};

export default Hero;
