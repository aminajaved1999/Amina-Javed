'use strict';

/** Full years + months elapsed since career start (day-aware). */
function calcExperience(startYear, startMonth, startDay) {
  startDay = startDay || 1;
  const start = new Date(startYear, startMonth - 1, startDay);
  const now   = new Date();

  let years  = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days   = now.getDate() - start.getDate();

  if (days < 0) months--;
  if (months < 0) { years--; months += 12; }

  const plusYears  = Math.max(0, years);
  const plusLabel  = `${plusYears}+`;
  const shortText  = plusYears === 0
    ? `${Math.max(1, months)} month${months === 1 ? '' : 's'}`
    : `${plusYears}+ years`;

  const preciseText = years === 0
    ? `${months} month${months === 1 ? '' : 's'}`
    : months === 0
      ? `${years} year${years === 1 ? '' : 's'}`
      : `${years} year${years === 1 ? '' : 's'} and ${months} month${months === 1 ? '' : 's'}`;

  const monthNames = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
  const sinceText = `${monthNames[startMonth - 1]} ${startYear}`;

  return { years, months, plusYears, plusLabel, shortText, preciseText, sinceText };
}

/** Patch meta tags, JSON-LD, and static hero copy from PORTFOLIO_DATA. */
function applyExperienceSEO(data) {
  if (!data || !data.profile) return;

  const p   = data.profile;
  const exp = calcExperience(p.stats.expStartYear, p.stats.expStartMonth, p.stats.expStartDay);
  const projCount = (data.projects || []).length;
  const certCount = (data.certifications || []).length;
  const otw   = p.openToWork ? 'Open to work · ' : '';
  const expOf = exp.plusYears === 0 ? exp.shortText : `${exp.shortText} of experience`;

  const setMeta = (sel, attr, val) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  };

  setMeta('meta[name="description"]', 'content',
    `${otw}Full Stack Software Engineer with ${expOf} · .NET 8 · ASP.NET Core · Blazor · C# · Node.js · Python · ${projCount} projects · ${certCount} certifications · Faisalabad, Pakistan`);

  setMeta('meta[property="og:description"]', 'content',
    `${otw}${exp.shortText} enterprise backend development · .NET · ASP.NET Core · Blazor · C# · ${projCount} projects · ${certCount} certifications across Meta, IBM, Microsoft & Google`);

  setMeta('meta[name="twitter:description"]', 'content',
    `${otw}Full Stack Software Engineer · .NET · ASP.NET Core · Blazor · C# · ${exp.shortText} · ${projCount} projects · ${certCount} certifications`);

  const ldScript = document.querySelector('script[type="application/ld+json"]');
  if (ldScript) {
    try {
      const graph = JSON.parse(ldScript.textContent)['@graph'];
      graph.forEach(node => {
        if (node['@type'] === 'ProfilePage') {
          node.description = `Professional portfolio of Amina Javed — Full Stack Software Engineer with ${exp.shortText} of .NET enterprise development experience.`;
        }
        if (node['@type'] === 'Person') {
          node.description = `Amina Javed is a Full Stack Software Engineer from Faisalabad, Pakistan with ${exp.preciseText} of professional experience (since ${exp.sinceText}) building enterprise backends, REST APIs, WinForms apps, and cloud-native systems in the .NET ecosystem. She holds ${certCount} professional certifications from Meta, IBM, Microsoft, and Google.`;
        }
        if (node['@type'] === 'FAQPage') {
          node.mainEntity.forEach(q => {
            if (q.name === 'Who is Amina Javed?') {
              q.acceptedAnswer.text = `Amina Javed is a Full Stack Software Engineer based in Faisalabad, Pakistan. She has ${exp.preciseText} of professional experience (since ${exp.sinceText}), currently works at Beacon Impex Pvt. Ltd., holds a BCS from FAST NUCES, and has ${certCount} professional certifications from Meta, IBM, Microsoft, and Google. Her portfolio is at https://aminajaved.com`;
            }
          });
        }
      });
      ldScript.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
    } catch (_) { /* keep static JSON-LD on parse failure */ }
  }

  const heroBio = document.getElementById('static-hero-bio');
  if (heroBio) {
    heroBio.textContent = `Amina Javed is a Full Stack Software Engineer with ${exp.preciseText} of professional experience (since ${exp.sinceText}) specializing in the .NET ecosystem — C#, ASP.NET Core, Blazor, WinForms, SQL Server, and REST APIs. She builds enterprise backends, desktop applications, and cloud-native systems at Beacon Impex Pvt. Ltd. BCS graduate from FAST NUCES. ${certCount} professional certifications from Meta, IBM, Microsoft, and Google. ${projCount} portfolio projects.`;
  }

  document.title = document.title.replace(/\d+\+ years?/i, exp.shortText);
}
