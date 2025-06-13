import React from 'react';

const Video = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 gradient-bg-inverted text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See Parakeet in Action
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Watch how Parakeet helps you speak like a local
            </p>
          </div>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/gr3LL9P4KSU"
              title="Parakeet Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
