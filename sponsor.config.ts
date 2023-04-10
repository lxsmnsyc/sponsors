import { defineConfig, presets } from 'sponsorkit';


// from: https://www.solidjs.com/media
const SOLIDJS_LOGO = (width: number, height: number) => `
<a xlink:href="https://solidjs.com" class="sponsorkit-link" target="_blank" id="SolidJS">
  <svg x="${(width - 361)/2}" y="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="382.23" height="70.7" viewBox="0 0 382.23 70.7">
    <defs>
      <style>
        .a {
          fill: #76b3e1;
        }

        .b, .d {
          isolation: isolate;
          opacity: 0.3;
        }

        .b {
          fill: url(#a);
        }

        .c {
          fill: #518ac8;
        }

        .d {
          fill: url(#b);
        }

        .e {
          fill: url(#c);
        }

        .f {
          fill: url(#d);
        }

        .g {
          fill: #58595b;
        }
      </style>
      <linearGradient id="a" x1="11.67" y1="73.36" x2="70.61" y2="44.72" gradientTransform="matrix(1, 0, 0, -1, 0, 73.4)" gradientUnits="userSpaceOnUse">
        <stop offset="0.1" stop-color="#76b3e1"/>
        <stop offset="0.3" stop-color="#dcf2fd"/>
        <stop offset="1" stop-color="#76b3e1"/>
      </linearGradient>
      <linearGradient id="b" x1="44" y1="59.33" x2="33.68" y2="24.96" gradientTransform="matrix(1, 0, 0, -1, 0, 73.4)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#76b3e1"/>
        <stop offset="0.5" stop-color="#4377bb"/>
        <stop offset="1" stop-color="#1f3b77"/>
      </linearGradient>
      <linearGradient id="c" x1="7.34" y1="44.34" x2="66.94" y2="3.82" gradientTransform="matrix(1, 0, 0, -1, 0, 73.4)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#315aa9"/>
        <stop offset="0.5" stop-color="#518ac8"/>
        <stop offset="1" stop-color="#315aa9"/>
      </linearGradient>
      <linearGradient id="d" x1="34.25" y1="39.49" x2="10.2" y2="-48.7" gradientTransform="matrix(1, 0, 0, -1, 0, 73.4)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#4377bb"/>
        <stop offset="0.5" stop-color="#1a336b"/>
        <stop offset="1" stop-color="#1a336b"/>
      </linearGradient>
    </defs>
    <g>
      <path class="a" d="M75.81,15.35S50.86-3.49,31.5.91l-1.7.47A12.35,12.35,0,0,0,23.22,6a11.18,11.18,0,0,0-.71,1.18L15.36,19.33l12.35,2.41A22,22,0,0,0,45.32,25.2l22,4.3Z"/>
      <path class="b" d="M75.81,15.35S50.86-3.49,31.5.91l-1.7.47A12.35,12.35,0,0,0,23.22,6a11.18,11.18,0,0,0-.71,1.18L15.36,19.33l12.35,2.41A22,22,0,0,0,45.32,25.2l22,4.3Z"/>
      <path class="c" d="M23,15.11l-1.71.48c-7.9,2.55-10.6,9.94-6.06,16.42a21.12,21.12,0,0,0,22.54,7.1L67.29,29.5S42.39,10.71,23,15.11Z"/>
      <path class="d" d="M23,15.11l-1.71.48c-7.9,2.55-10.6,9.94-6.06,16.42a21.12,21.12,0,0,0,22.54,7.1L67.29,29.5S42.39,10.71,23,15.11Z"/>
      <path class="e" d="M61.89,36.42a21.11,21.11,0,0,0-22.58-7.15L9.82,38.83.54,55.35l52.83,9,9.47-16.85C64.73,44.27,64.54,40.2,61.89,36.42Z"/>
      <path class="f" d="M52.61,52.94a21.14,21.14,0,0,0-22.53-7.15L.54,55.35s25,18.84,44.31,14.44l1.7-.47C54.46,66.81,57.16,59.42,52.61,52.94Z"/>
    </g>
    <g>
      <path class="g" d="M109.71,45a12,12,0,0,0,8.1,3.4c3.4,0,6.2-2,6.2-5.4,0-7.8-15.5-5.9-15.5-15.5,0-4.5,4-8.3,9.7-8.3a12,12,0,0,1,8.3,3L125,24.8a10.38,10.38,0,0,0-6.8-2.7c-4,0-6.5,2.6-6.6,5.3,0,7.4,15.5,5.3,15.5,15.5,0,4.6-3.6,8.4-9.4,8.4a13.36,13.36,0,0,1-9.8-4Zm49.1-25.6a15.73,15.73,0,0,1,15.8,15.9,16,16,0,0,1-15.8,16.2h-.1a16,16,0,0,1-15.8-16.2v-.1A15.73,15.73,0,0,1,158.81,19.4Zm-.1,29.3a13,13,0,0,0,12.7-13.29V35.3c0-7.4-5.6-13.1-12.6-13.1a12.72,12.72,0,0,0-12.7,13C146.11,42.8,151.71,48.6,158.71,48.7ZM192.61,20h3l-.1,28.3h14.4V51h-17.5Zm33.9.1h3l-.1,31.1h-3Zm23.2,0h10c9.3,0,15.6,5.7,15.6,15.6s-6.3,15.5-15.6,15.5h-10Zm9.6,28.4c7.6,0,12.7-4.5,12.8-12.8s-5.1-12.8-12.7-12.8h-6.7l-.1,25.6Z"/>
      <g>
        <path class="g" d="M301.48,51.2a10.27,10.27,0,0,0,7.06-2.52,9,9,0,0,0,2.86-7.1h0V20.47h-6.25V41.12a4.2,4.2,0,0,1-1,3,3.61,3.61,0,0,1-2.77,1.07q-2.94,0-4.29-3.45h0l-5.29,2.95Q294.39,51.2,301.48,51.2Z"/>
        <path class="g" d="M338.94,51.27c3.47,0,6.19-.86,8.14-2.59A8.61,8.61,0,0,0,350,41.89a7.09,7.09,0,0,0-2.5-5.67c-1.68-1.44-4.37-2.68-8.07-3.74a11.76,11.76,0,0,1-3.76-1.57,2.57,2.57,0,0,1-1.1-2.15,2.7,2.7,0,0,1,1.1-2.25,4.6,4.6,0,0,1,2.91-.85,5.67,5.67,0,0,1,5.71,3.72h0l5.17-2.83a10.05,10.05,0,0,0-4.07-4.84A12.17,12.17,0,0,0,338.86,20a11.11,11.11,0,0,0-7.45,2.6,8.11,8.11,0,0,0-3.09,6.55,7.5,7.5,0,0,0,2.32,5.61q2.08,2.1,7.37,3.69a16.51,16.51,0,0,1,4.52,1.82,2.33,2.33,0,0,1,1.19,2.09,2.74,2.74,0,0,1-1.29,2.31,5.64,5.64,0,0,1-3.3.91,7,7,0,0,1-6.6-4.23h0l-5.4,2.79a10.85,10.85,0,0,0,4.49,5.23A13.74,13.74,0,0,0,338.94,51.27Z"/>
      </g>
    </g>
  </svg>
</a>
`;

export default defineConfig({
  // includePrivate: true,
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: presets.medium,
    },
    {
      title: 'Special',
      monthlyDollars: Infinity,
      composeAfter(compose,_,config) {
        if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) { 
          compose
            .addSpan(20)
            .addText('Special Sponsor', 'sponsorkit-tier-title')
            .addSpan(10)
            .addRaw(SOLIDJS_LOGO(config.width!, compose.height))
            .addSpan(130)
        }
      }
    }
  ],
})