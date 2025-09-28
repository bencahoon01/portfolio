"use client"

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ThreeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('Three.js Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center h-full w-full bg-background">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <p className="text-foreground/60 font-mono text-sm">
              3D Scene Loading...
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}