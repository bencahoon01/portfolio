declare module 'three-stdlib' {
  export class AsciiEffect {
    constructor(
      renderer: any,
      charSet?: string,
      options?: { invert?: boolean; color?: string; backgroundColor?: string }
    )
    
    domElement: HTMLElement
    
    setSize(width: number, height: number): void
    render(scene: any, camera: any): void
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    asciiEffect: any
  }
}