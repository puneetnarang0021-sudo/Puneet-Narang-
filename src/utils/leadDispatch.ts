/**
 * Lead Dispatch Utility for Balance Bull Academy
 * Handles instant direct transmission to Trader Punit Narang's WhatsApp (9999633109),
 * local lead preservation, email fallback, and Google Form integration.
 */

export interface LeadData {
  type: 'Free Demo Class' | 'Admission Inquiry' | 'Counseling Request';
  name: string;
  phone: string;
  email?: string;
  mode?: string;
  slot?: string;
  course?: string;
  experience?: string;
  message?: string;
  timestamp?: string;
}

export const OFFICIAL_PHONE = '9999633109';
export const OFFICIAL_PHONE_INTL = '919999633109';
export const OFFICIAL_EMAIL = 'PuneetNarang0021@gmail.com';
export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSddlnDkVU2miFiXhcbLD21qYgdK0SyXiSm4boljdK03sVyPtA/viewform?usp=header';
export const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSddlnDkVU2miFiXhcbLD21qYgdK0SyXiSm4boljdK03sVyPtA/viewform?embedded=true';

/**
 * Builds a clear, professional WhatsApp message for Trader Punit Narang
 */
export function buildWhatsAppMessage(lead: LeadData): string {
  const parts: string[] = [
    `🔥 *NEW ${lead.type.toUpperCase()} - BALANCE BULL ACADEMY*`,
    ``,
    `👤 *Student Name:* ${lead.name}`,
    `📱 *Mobile / WhatsApp:* ${lead.phone}`,
  ];

  if (lead.email && lead.email.trim()) {
    parts.push(`📧 *Email:* ${lead.email.trim()}`);
  }
  if (lead.course && lead.course.trim()) {
    parts.push(`📚 *Course / Setup:* ${lead.course.trim()}`);
  }
  if (lead.mode && lead.mode.trim()) {
    parts.push(`📍 *Attendance Mode:* ${lead.mode.trim()}`);
  }
  if (lead.slot && lead.slot.trim()) {
    parts.push(`⏰ *Preferred Slot:* ${lead.slot.trim()}`);
  }
  if (lead.experience && lead.experience.trim()) {
    parts.push(`📈 *Background:* ${lead.experience.trim()}`);
  }
  if (lead.message && lead.message.trim()) {
    parts.push(`💬 *Student Note:* ${lead.message.trim()}`);
  }

  parts.push(``);
  parts.push(`Hello Trader Punit Narang Sir (+91 9999633109),`);
  parts.push(`I have submitted this form on Balance Bull Academy website. Please confirm my Free Demo seat and batch details!`);

  return parts.join('\n');
}

/**
 * Builds direct WhatsApp URL
 */
export function getWhatsAppUrl(lead: LeadData): string {
  const text = encodeURIComponent(buildWhatsAppMessage(lead));
  return `https://wa.me/${OFFICIAL_PHONE_INTL}?text=${text}`;
}

/**
 * Builds direct Email URL (mailto)
 */
export function getEmailUrl(lead: LeadData): string {
  const subject = encodeURIComponent(
    `[Balance Bull Academy] ${lead.type}: ${lead.name} (${lead.phone})`
  );
  const body = encodeURIComponent(buildWhatsAppMessage(lead));
  return `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Dispatches the lead:
 * 1. Saves lead to localStorage so no submission is ever lost
 * 2. Immediately launches WhatsApp directly to 9999633109 with prefilled details
 */
export function dispatchLeadDirectly(lead: LeadData): { success: boolean; whatsappUrl: string } {
  const timestamp = new Date().toISOString();
  const leadWithTime: LeadData = { ...lead, timestamp };

  // 1. Save locally for persistence & audit
  try {
    const existing = localStorage.getItem('balance_bull_academy_leads');
    const leadsList: LeadData[] = existing ? JSON.parse(existing) : [];
    leadsList.unshift(leadWithTime);
    // Keep last 50 leads
    localStorage.setItem(
      'balance_bull_academy_leads',
      JSON.stringify(leadsList.slice(0, 50))
    );
  } catch (err) {
    console.warn('Could not save lead to localStorage', err);
  }

  // 2. Open WhatsApp directly to Trader Punit Narang's number 9999633109
  const whatsappUrl = getWhatsAppUrl(lead);

  // Directly attempt window.open in user click context
  try {
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      // If browser blocked popup window, navigate directly as fallback
      window.location.assign(whatsappUrl);
    }
  } catch {
    window.location.assign(whatsappUrl);
  }

  return { success: true, whatsappUrl };
}
