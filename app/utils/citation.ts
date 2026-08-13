import { Publication } from '../data/publications';

/**
 * Formats a single author name to APA style (Last, F. M.)
 */
export function formatAuthor(authorName: string): string {
  const parts = authorName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  
  const last = parts.pop()!;
  const initials = parts.map(p => {
    // Handle hyphenated initials like T-H
    if (p.includes('-')) {
      return p.split('-').map(part => part[0] + '.').join('-');
    }
    // Handle multiple initials clumped together like RK
    if (p === p.toUpperCase() && p.length > 1 && !p.includes('.')) {
      return p.split('').map(char => char + '.').join(' ');
    }
    return p[0] + '.';
  }).join(' ');
  
  return `${last}, ${initials}`;
}

/**
 * Generates an APA formatted citation string from a Publication object
 */
export function generateAPACitation(pub: Publication): string {
  let authorStr = '';
  
  if (pub.authors && pub.authors.length > 0) {
    const formatted = pub.authors.map(formatAuthor);
    if (formatted.length === 1) {
      authorStr = formatted[0];
    } else if (formatted.length === 2) {
      authorStr = `${formatted[0]}, & ${formatted[1]}`;
    } else if (formatted.length >= 20) {
      authorStr = formatted.slice(0, 19).join(', ') + ', ... ' + formatted[formatted.length - 1];
    } else {
      authorStr = formatted.slice(0, -1).join(', ') + ', & ' + formatted[formatted.length - 1];
    }
  }

  let apa = `${authorStr} (${pub.year}). ${pub.title}.`;
  
  if (pub.journal) {
    apa += ` ${pub.journal}`;
    if (pub.volume) apa += `, ${pub.volume}`;
    if (pub.pages) apa += `, ${pub.pages}.`;
    else apa += `.`;
  } else if (pub.conference) {
    apa += ` In ${pub.conference}`;
    if (pub.pages) apa += ` (pp. ${pub.pages}).`;
    else apa += `.`;
  } else if (pub.type === 'report') {
    apa += ` [Report].`;
  }
  
  if (pub.doi) {
    apa += ` https://doi.org/${pub.doi}`;
  } else if (pub.url && !pub.url.includes('scholar.google')) {
    apa += ` ${pub.url}`;
  }

  return apa.trim();
}
