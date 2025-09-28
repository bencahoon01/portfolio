"use client"

export default function AboutSection() {
  return (
    <section id="about" className="snap-start h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-8 grainy-texture">ABOUT ME</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a Computer Science student at Clemson University with a passion for full-stack development and AI. My experience includes developing AI-assisted training platforms with a focus on scalable, serverless backends using AWS technologies.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am proficient in a variety of languages and frameworks, and I am always eager to learn new technologies. Explore my projects below to see my skills in action.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <h3 className="text-4xl font-serif italic text-secondary transform -rotate-12">
              {"Code is poetry in motion"}
            </h3>
          </div>
        </div>

        <div>
          <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-12 grainy-texture">MY EXPERTISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-4xl font-mono text-secondary">01</div>
              <h3 className="text-2xl font-archivo text-foreground">Software Development</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Full-stack web applications</li>
                <li>• Modern JavaScript frameworks</li>
                <li>• RESTful API integration</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-mono text-secondary">02</div>
              <h3 className="text-2xl font-archivo text-foreground">AI & Machine Learning</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Retrieval-Augmented Generation</li>
                <li>• AI-Powered Browser Extension</li>
                <li>• OpenAI API Integration</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-mono text-secondary">03</div>
              <h3 className="text-2xl font-archivo text-foreground">System Architecture</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Scalable serverless backends</li>
                <li>• Cloud infrastructure (AWS)</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}