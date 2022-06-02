export default (theme) => {
  return {
    ':root': {
      fontSize: 'var(--root-size)',
      lineHeight: 1.5,
    },
    'html, body': {
      minHeight: '100%',
      height: '100%',
    },
    body: {
      fontFamily: "'Poppins', sans-serif",
      color: 'var(--color-body-foreground)',
      backgroundColor: 'var(--color-body-background)',
      background:
        "var(--color-body-background) url('https://source.unsplash.com/random/1920x1080/?abstract,dark') no-repeat fixed",
      /* background: var(--color-body-background) url("https://picsum.photos/1920/1080?random=12") no-repeat fixed; */
    },
    '#root': {
      minHeight: '100%',
      display: 'grid',
      gridTemplate: 'auto 1fr auto / 1fr',
      padding: '1em',
      gap: '1em',
    },
  };
};
