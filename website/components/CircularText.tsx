"use client"

export default function CircularText({ text }: { text: string }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center animate-spin-slow">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="text-xs fill-secondary font-mono">
          <textPath href="#circle">{text}</textPath>
        </text>
      </svg>
    </div>
  )
}