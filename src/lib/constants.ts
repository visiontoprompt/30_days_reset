export const ETSY_LISTING_BASE =
  'https://www.etsy.com/listing/4497986394/30-day-life-reset-workbook-daily-planner';

export function etsyUrl(utmContent: string): string {
  const params = new URLSearchParams({
    utm_source: 'landing',
    utm_medium: 'web',
    utm_campaign: 'workbook_lp',
    utm_content: utmContent,
  });
  return `${ETSY_LISTING_BASE}?${params.toString()}`;
}

export const EMAIL_ENDPOINT = 'https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe';
export const SITE_TITLE =
  '30-Day Life Reset Workbook — A Gentle Daily Planner | $5.99';
export const SITE_DESCRIPTION =
  'A 66-page guided workbook for anyone who feels stuck or burned out. ADHD-friendly, behavioral pacing, missed-day reset. Instant PDF download — $5.99 on Etsy.';
