import { projects, site } from "@/content/site"
import { toText } from "./to-markdown"

const personId = `${site.url}/#person`
const websiteId = `${site.url}/#website`

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: {
          "@type": "Person",
          "@id": personId,
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        name: site.title,
        dateModified: site.updated,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        image: `${site.url}/vojta-holik-design-engineer.png`,
        jobTitle: site.role,
        description: site.description,
        email: site.email,
        sameAs: [site.x, site.github],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "work inquiries",
          email: site.email,
          availableLanguage: ["English", "Czech"],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#work`,
        name: "Selected work",
        description: `Projects ${site.name} has worked on.`,
        itemListElement: projects.map(
          ({ title, description, actions }, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: title,
              description: toText(description),
              url: actions?.[0].url,
            },
          })
        ),
      },
    ],
  }
}
