"use client"

interface PreLoaderProps {
  progress: number
  loadingText: string
}

export default function PreLoader({ progress, loadingText }: PreLoaderProps) {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="relative">
        {/* Circular Progress Ring */}
        <div className="circular-text w-48 h-48 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <defs>
              {/* Larger radius for text ring only (41) */}
              <path id="textcircle" d="M 50, 50 m -41, 0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0" />
              {/* Progress and background circles remain at radius 35 */}
              <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="text-muted-foreground opacity-20"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 35}`}
              strokeDashoffset={`${2 * Math.PI * 35 * (1 - progress / 100)}`}
              className="text-accent transition-all duration-300 ease-out"
              strokeLinecap="round"
            />
            {/* Rotating text with larger radius */}
            <text className="text-xs fill-muted-foreground/50 font-mono rotate-90" style={{ transformOrigin: '50px 50px' }}>
              <textPath href="#textcircle" startOffset="0%">
                SYSTEMS • LOADING • INITIALIZING • ONLINE • PREPARING • READY • 
              </textPath>
            </text>
          </svg>
        </div>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-accent mb-2">
              {Math.round(progress)}%
            </div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mx-auto mb-2" />
            <div className="text-sm font-mono text-muted-foreground max-w-24 truncate leading-tight">
              {loadingText.replace("...", "")}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom progress bar */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="w-full bg-muted-foreground/20 rounded-full h-1">
          <div 
            className="bg-accent h-1 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs font-mono text-muted-foreground mt-2">
          <span>INITIALIZING</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  )
}
