import type { Metadata } from "next";
import React from "react";
import JournalClient from "@/components/journal/JournalClient";

export const metadata: Metadata = {
  title: "GLC Mumbai IPR Journal | Volume I & Submission Guidelines",
  description:
    "Annual double-blind peer-reviewed journal dedicated to high-calibre scholarship in intellectual property jurisprudence, competition policy, biotechnology, and emerging technologies at Government Law College Mumbai.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "IPR Journal | Government Law College, Mumbai",
    description:
      "Peer-reviewed scholarship, call for papers, and open-access research repository in Intellectual Property Law.",
    url: "https://iprcellglcmumbai.in/journal",
  },
};

const jsonLdJournal = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Periodical",
      "name": "GLC Mumbai IPR Journal",
      "issn": "Annual Peer-Reviewed",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "Intellectual Property Rights Cell, Government Law College, Mumbai",
        "url": "https://iprcellglcmumbai.in"
      },
      "inLanguage": "en",
      "hasPart": [
        {
          "@type": "PublicationVolume",
          "name": "GLC Mumbai IPR Journal Volume I",
          "volumeNumber": "1",
          "license": "Open Access / Academic Use"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the GLC Mumbai IPR Journal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The GLC Mumbai IPR Journal is an annual double-blind peer-reviewed legal publication by the IPR Cell at Government Law College, Mumbai. It publishes original research papers, case notes, and legislative critiques on intellectual property jurisprudence, patents, copyrights, trademarks, and emerging tech law."
          }
        },
        {
          "@type": "Question",
          "name": "What citation and formatting guidelines apply to submissions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submissions must adhere to standard Bluebook 21st Edition or Indian Law Institute (ILI) citation formatting. Submissions must be original, non-plagiarized (<10% similarity score), and include a 250-word abstract."
          }
        }
      ]
    }
  ]
};

export default function JournalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdJournal) }}
      />
      <JournalClient />
    </>
  );
}
