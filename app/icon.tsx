import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 64,
        height: 64,
        background: '#0B1220',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          color: '#3dd68c',
          fontSize: 26,
          fontWeight: 600,
          fontFamily: 'monospace',
          letterSpacing: 1,
        }}
      >
        SV
      </span>
    </div>,
    { width: 64, height: 64 }
  );
}
