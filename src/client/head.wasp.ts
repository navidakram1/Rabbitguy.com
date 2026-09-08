import { type App } from "@wasp.sh/spec";

export const head: App["head"] = [
  "<link rel='icon' href='/favicon.ico' />",

  "<meta name='description' content='We will help you with Graphic Content, SEO, Marketing, Websites & Apps. All-in-One Digital & SaaS Solution!' />",
  "<meta name='author' content='Rabbitguy.com' />",
  "<meta name='keywords' content='saas, digital marketing, websites, apps, seo, logo animation, video editing, rabbitguy' />",

  "<meta property='og:type' content='website' />",
  "<meta property='og:title' content='All In 1 Digital & SaaS Solution - Rabbitguy.com' />",
  "<meta property='og:site_name' content='Rabbitguy.com' />",
  "<meta property='og:url' content='https://rabbitguy.com' />",
  "<meta property='og:description' content='We will help you with Graphic Content, SEO, Marketing, Websites & Apps. All-in-One Digital Solution!' />",
  "<meta property='og:image' content='https://rabbitguy.com/wp-content/uploads/2023/12/Rabbitguy.com_.png' />",
  "<meta name='twitter:image' content='https://rabbitguy.com/wp-content/uploads/2023/12/Rabbitguy.com_.png' />",
  "<meta name='twitter:card' content='summary_large_image' />",
  // TODO: You can put your Plausible analytics scripts below (https://docs.opensaas.sh/guides/analytics/):
  // NOTE: Plausible does not use Cookies, so you can simply add the scripts here.
  // Google, on the other hand, does, so you must instead add the script dynamically
  // via the Cookie Consent component after the user clicks the "Accept" cookies button.
  "<script async data-domain='<your-site-id>' src='https://plausible.io/js/script.js'></script>", // for production
  "<script async data-domain='<your-site-id>' src='https://plausible.io/js/script.local.js'></script>", // for development
];
