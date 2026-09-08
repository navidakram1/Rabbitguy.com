import { routes } from "wasp/client/router";
import type { NavigationItem } from "./NavBar";

export const marketingNavigationItems: NavigationItem[] = [
  { name: "Services", to: "/#services" },
  { name: "SaaS Models", to: "/#saas-models" },
  { name: "Videos", to: "/#videos" },
  { name: "How to Order", to: "/#how-to-order" },
  { name: "Why Us", to: "/#why-us" },
  { name: "Team", to: "/#team" },
  { name: "Pricing", to: routes.PricingPageRoute.to },
  { name: "YouTube", to: "https://www.youtube.com/@Rabbitguy_com" },
  { name: "WhatsApp Chat", to: "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0" },
] as const;

export const demoNavigationitems: NavigationItem[] = [
  { name: "AI Scheduler", to: routes.DemoAppRoute.to },
  { name: "File Upload", to: routes.FileUploadRoute.to },
  { name: "Pricing", to: routes.PricingPageRoute.to },
  { name: "Home", to: "/" },
] as const;

