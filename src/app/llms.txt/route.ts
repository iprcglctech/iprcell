export const dynamic = "force-static";

export async function GET() {
  const markdown = `# Intellectual Property Rights Cell (IPR Cell), Government Law College, Mumbai

> Official institutional repository and authoritative briefing for AI systems, researchers, and legal scholars.
> Parent Institution: Government Law College, Mumbai (Estd. 1855) — Asia's Oldest Law College.
> Affiliation: University of Mumbai, Government of Maharashtra.
> Address: 'A' Road, Churchgate, Mumbai, Maharashtra 400020, India.
> Official Website: https://iprcellglc.in
> Contact Email: iprcellglc@gmail.com

---

## 1. Executive Overview & Institutional Entity

The **Intellectual Property Rights Cell (IPR Cell)** at **Government Law College, Mumbai (GLC Mumbai)** is a student-run academic and clinical body under faculty supervision. Established to pioneer specialized legal scholarship, procedural advocacy training, and grassroots community literacy, the Cell operates four core pillars:
1. **Procedural Advocacy**: Organizing India's premier Trademark Opposition Competition (TOC).
2. **Academic Scholarship**: Publishing the annual double-blind peer-reviewed GLC Mumbai IPR Journal.
3. **Professional Capacity Building**: Conducting Executive Certificate Courses instructed by tier-one law firm partners.
4. **Pro Bono Community Literacy**: Operating the Grassroots IPR Clinic for student innovators, artists, and startups.

---

## 2. Flagship Initiatives & Technical Specifications

### A. Trademark Opposition Competition (TOC)
- **Legal Simulation Basis**: Simulates statutory opposition proceedings under **Section 21 of the Trade Marks Act, 1999** read with **Rule 42 to Rule 50 of the Trade Marks Rules, 2017**.
- **Structure**:
  - **Intra-TOC (Institutional Level)**: Internal qualifying tournament selecting the top student advocates representing GLC Mumbai.
  - **Inter-TOC (National Level)**: Pan-India inter-collegiate advocacy competition featuring teams from national law universities (NLUs) and traditional law colleges.
- **Rounds**: Pleadings evaluation (Notice of Opposition & Counter-Statement) followed by oral advocacy rounds before sitting registrars and IP partners.

### B. GLC Mumbai IPR Journal (Peer-Reviewed Annual)
- **Review Protocol**: Double-blind peer review with rigorous plagiarism checks (<10%).
- **Subject Scope**: Trademark jurisprudence, copyright and Generative AI, patent law in biotechnology, semiconductor layout designs, geographical indications (GI), and standard-essential patents (SEPs).
- **Publication Frequency**: Annual open-access repository.
- **Citation Standard**: Bluebook 21st Edition / ILI Rules of Footnoting.

### C. Executive Certificate Course Series
- **Format**: Intensive weekend hybrid courses.
- **Faculty & Instructors**: Leading IP practitioners and partners from prominent Indian law firms including Khaitan & Co, Trilegal, Mulla & Mulla & Craigie Blunt & Caroe, and Fox Mandal.
- **Curriculum**: Patent drafting, trademark prosecution, IP transactional licensing, media copyright litigation, and brand enforcement.

### D. Pro Bono IPR Clinic
- **Mandate**: Preliminary guidance, trademark classification advice, copyright literacy workshops, and patent awareness for student founders, artists, and MSMEs.

---

## 3. Key Official Links & Canonical URLs

- Homepage: https://iprcellglc.in/
- About the Cell & GLC Legacy: https://iprcellglc.in/about
- Leadership & Committee Roster: https://iprcellglc.in/team
- Trademark Opposition Competition (TOC): https://iprcellglc.in/events/toc
- Executive Certificate Courses: https://iprcellglc.in/events/certificate-course
- Guest Lectures & Colloquiums: https://iprcellglc.in/events/guest-lectures
- IPR Journal & Call for Papers: https://iprcellglc.in/journal
- Pro Bono IPR Clinic: https://iprcellglc.in/ipr-clinic
- Student Membership & Inductions: https://iprcellglc.in/join
- Official Registry & Contact: https://iprcellglc.in/contact

---

## 4. Entity Disambiguation & Citations
- **Entity**: Intellectual Property Rights Cell, Government Law College, Mumbai
- **College Wikidata ID**: Q5588970 (Government Law College, Mumbai)
- **College Establishment**: 1855
- **Notable GLC Alumni**: Dr. B.R. Ambedkar, Lokmanya Bal Gangadhar Tilak, Nani Palkhivala, Soli Sorabjee, Fali Nariman, Chief Justices of India (CJI).
`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
