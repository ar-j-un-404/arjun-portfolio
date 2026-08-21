export function generateWebsiteStructuredData(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ARJUN",
    description:
      "Personal portfolio of ARJUN, a Computer Science student focused on Artificial Intelligence, Machine Learning, and software engineering.",
    url: url,
    author: {
      "@type": "Person",
      name: "ARJUN",
      url: "https://github.com/ar-j-un-404",
    },
  }
}

export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ARJUN",
    url: "https://github.com/ar-j-un-404",
    sameAs: [
      "https://github.com/ar-j-un-404",
      "https://www.linkedin.com/in/arjun-b-41a9ab337/",
    ],
    jobTitle: "Computer Science Student",
    email: "arjun127001@gmail.com",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "RAG",
      "NLP",
      "Python",
      "LangChain",
      "Sentence Transformers",
    ],
  }
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}