import React from 'react';

interface SocialIconProps {
  type: 'email' | 'github' | 'linkedin' | 'hackerrank';
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ type, className = 'w-5 h-5 fill-current' }) => {
  switch (type) {
    case 'email':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 4.99-8-4.99V6l8 4.99L20 6z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.4 21.5h5.16V9.75H2.4zM9.9 9.75h4.95v1.6h.07c.69-1.24 2.37-2.55 4.88-2.55 5.22 0 6.18 3.3 6.18 7.6v7.1h-5.15v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33v6.4H9.9z" />
        </svg>
      );
    case 'hackerrank':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M12 0c1.28 0 9.7 4.86 10.34 5.97.64 1.11.64 10.95 0 12.06C21.7 19.14 13.28 24 12 24s-9.7-4.86-10.34-5.97c-.64-1.11-.64-10.95 0-12.06C2.3 4.86 10.72 0 12 0zm-2.6 7.2c-.12 0-.22.1-.22.22v9.35c0 .12.1.22.22.22h1.36c.12 0 .22-.1.22-.22v-3.62h2.04v3.62c0 .12.1.22.22.22h1.36c.12 0 .22-.1.22-.22V7.42c0-.12-.1-.22-.22-.22h-1.36c-.12 0-.22.1-.22.22v3.53h-2.04V7.42c0-.12-.1-.22-.22-.22z" />
        </svg>
      );
    default:
      return null;
  }
};
