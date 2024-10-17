export default function manifest() {
    return {
      name: 'Bel´s Birthday',
      short_name: 'Bel´s Birthday',
      description: 'Una App para mi mejor amiga',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/icon/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }