declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Extend video element props for mobile playback attributes
declare namespace JSX {
  interface IntrinsicElements {
    video: React.DetailedHTMLProps<
      React.VideoHTMLAttributes<HTMLVideoElement> & {
        'webkit-playsinline'?: string;
        'x5-playsinline'?: string;
        'x5-video-player-type'?: string;
        'x5-video-player-fullscreen'?: string;
      },
      HTMLVideoElement
    >;
  }
}
