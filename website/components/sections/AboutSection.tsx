"use client"

export default function AboutSection() {
  return (
    <section id="about" className="snap-start h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-8 grainy-texture">ABOUT ME</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Over the last decade, my expertise has centered around JavaScript, encompassing code writing,
              refactoring, and seamless integration of RESTful APIs with frameworks like Angular, React, and Vue.js.
              My experience extends beyond, having worked with diverse tech stacks.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I stand ready to provide invaluable assistance and guidance to your developers, ensuring they adhere
              to best practices. Explore my projects below to witness firsthand the impact of my skills.
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
                <li>• Neural network implementation</li>
                <li>• Data visualization platforms</li>
                <li>• Real-time processing systems</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-mono text-secondary">03</div>
              <h3 className="text-2xl font-archivo text-foreground">System Architecture</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Scalable backend systems</li>
                <li>• Cloud infrastructure</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}